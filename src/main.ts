import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";

type Position = [number, number];

type GeoJsonGeometry = {
  type: string;
  coordinates?: unknown;
};

type GeoJsonFeature = {
  type: "Feature";
  geometry: GeoJsonGeometry;
  properties: Record<string, unknown>;
};

type FeatureCollection = {
  type: "FeatureCollection";
  features: GeoJsonFeature[];
};

type RiverInfo = {
  name: string;
  region: string;
  meanFlow: number;
};

type ApiResult = {
  featureId?: string | number;
  attributes?: Record<string, unknown>;
  geometry?: unknown;
};

const GEOADMIN_FIND_ENDPOINT =
  "https://api3.geo.admin.ch/rest/services/ech/MapServer/find";

const WATER_NETWORK_LAYER =
  "ch.swisstopo.swisstlm3d-gewaessernetz";

const DAY_MS = 24 * 60 * 60 * 1000;
const TOTAL_DAYS = 1826;

const rivers: RiverInfo[] = [
  { name: "Aare", region: "Bern / Aargau", meanFlow: 560 },
  { name: "Rhein", region: "Basel", meanFlow: 1050 },
  { name: "Rhône", region: "Valais / Geneva", meanFlow: 190 },
  { name: "Reuss", region: "Central Switzerland", meanFlow: 140 },
  { name: "Limmat", region: "Zurich / Aargau", meanFlow: 100 },
  { name: "Ticino", region: "Ticino", meanFlow: 110 },
  { name: "Inn", region: "Engadine", meanFlow: 55 },
  { name: "Thur", region: "Eastern Switzerland", meanFlow: 45 },
  { name: "Doubs", region: "Jura", meanFlow: 35 },
  { name: "Saane", region: "Fribourg", meanFlow: 55 },
  { name: "Emme", region: "Bern", meanFlow: 30 },
  { name: "Linth", region: "Glarus / St. Gallen", meanFlow: 45 },
  { name: "Maggia", region: "Ticino", meanFlow: 35 },
  { name: "Arve", region: "Geneva", meanFlow: 80 },
];

const emptyCollection: FeatureCollection = {
  type: "FeatureCollection",
  features: [],
};

const state = {
  river: rivers[0] as RiverInfo,
  riverFeatures: [] as GeoJsonFeature[],
  timelineIndex: TOTAL_DAYS,
  liveMode: true,
  playing: true,
};

const riverInput = document.querySelector(
  "#river-search",
) as HTMLInputElement;

const loadRiverButton = document.querySelector(
  "#load-river",
) as HTMLButtonElement;

const riverSummary = document.querySelector(
  "#river-summary",
) as HTMLDivElement;

const flowValue = document.querySelector(
  "#flow-value",
) as HTMLDivElement;

const dateValue = document.querySelector(
  "#date-value",
) as HTMLDivElement;

const catchmentValue = document.querySelector(
  "#catchment-value",
) as HTMLDivElement;

const stationValue = document.querySelector(
  "#station-value",
) as HTMLDivElement;

const statusElement = document.querySelector(
  "#status",
) as HTMLDivElement;

const mapLoadingElement = document.querySelector(
  "#map-loading",
) as HTMLDivElement;

const timeline = document.querySelector(
  "#timeline",
) as HTMLInputElement;

const timelineDate = document.querySelector(
  "#timeline-date",
) as HTMLDivElement;

const timelineStart = document.querySelector(
  "#timeline-start",
) as HTMLSpanElement;

const timelineEnd = document.querySelector(
  "#timeline-end",
) as HTMLSpanElement;

const playTimelineButton = document.querySelector(
  "#play-timeline",
) as HTMLButtonElement;

const liveModeButton = document.querySelector(
  "#live-mode",
) as HTMLButtonElement;

const showCatchment = document.querySelector(
  "#show-catchment",
) as HTMLInputElement;

const showTributaries = document.querySelector(
  "#show-tributaries",
) as HTMLInputElement;

const showStations = document.querySelector(
  "#show-stations",
) as HTMLInputElement;

const showWeather = document.querySelector(
  "#show-weather",
) as HTMLInputElement;

function setStatus(message: string, type = ""): void {
  statusElement.textContent = message;
  statusElement.className = `status ${type}`;
}

function escapeHtml(value: unknown): string {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function clamp(value: number, minimum: number, maximum: number): number {
  return Math.max(minimum, Math.min(maximum, value));
}

function formatNumber(value: number): string {
  return new Intl.NumberFormat("en-CH", {
    maximumFractionDigits: 0,
  }).format(value);
}

function formatDate(date: Date): string {
  return new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  }).format(date);
}

function startDate(): Date {
  const today = new Date();

  const midnight = Date.UTC(
    today.getUTCFullYear(),
    today.getUTCMonth(),
    today.getUTCDate(),
  );

  return new Date(midnight - (TOTAL_DAYS - 1) * DAY_MS);
}

function dateForTimeline(index: number): Date {
  return new Date(startDate().getTime() + index * DAY_MS);
}

function findRiver(name: string): RiverInfo {
  const cleanName = name.trim();

  const existing = rivers.find(
    (river) =>
      river.name.toLocaleLowerCase() ===
      cleanName.toLocaleLowerCase(),
  );

  if (existing) {
    return existing;
  }

  return {
    name: cleanName,
    region: "GeoAdmin search",
    meanFlow: 25,
  };
}

function coordinatesTo2D(value: unknown): unknown {
  if (!Array.isArray(value)) {
    return value;
  }

  if (
    value.length >= 2 &&
    typeof value[0] === "number" &&
    typeof value[1] === "number"
  ) {
    return [value[0], value[1]];
  }

  return value.map(coordinatesTo2D);
}

function normaliseGeometry(
  rawGeometry: unknown,
): GeoJsonGeometry | null {
  if (!rawGeometry || typeof rawGeometry !== "object") {
    return null;
  }

  const geometry = rawGeometry as Record<string, unknown>;

  if (
    typeof geometry.type === "string" &&
    "coordinates" in geometry
  ) {
    return {
      type: geometry.type,
      coordinates: coordinatesTo2D(geometry.coordinates),
    };
  }

  if (Array.isArray(geometry.paths)) {
    const paths = geometry.paths as unknown[];

    return {
      type: paths.length === 1 ? "LineString" : "MultiLineString",
      coordinates: coordinatesTo2D(paths),
    };
  }

  if (
    typeof geometry.x === "number" &&
    typeof geometry.y === "number"
  ) {
    return {
      type: "Point",
      coordinates: [geometry.x, geometry.y],
    };
  }

  if (Array.isArray(geometry.rings)) {
    return {
      type: "Polygon",
      coordinates: coordinatesTo2D(geometry.rings),
    };
  }

  return null;
}

function apiResultToFeature(
  result: ApiResult,
): GeoJsonFeature | null {
  const geometry = normaliseGeometry(result.geometry);

  if (!geometry) {
    return null;
  }

  return {
    type: "Feature",
    geometry,
    properties: {
      ...(result.attributes ?? {}),
      featureId: result.featureId ?? "",
    },
  };
}

async function fetchRiverFeatures(
  riverName: string,
): Promise<GeoJsonFeature[]> {
  const parameters = new URLSearchParams({
    layer: WATER_NETWORK_LAYER,
    searchText: riverName,
    searchField: "name",
    contains: "true",
    returnGeometry: "true",
    geometryFormat: "geojson",
    sr: "4326",
    lang: "en",
    f: "json",
  });

  const response = await fetch(
    `${GEOADMIN_FIND_ENDPOINT}?${parameters.toString()}`,
  );

  if (!response.ok) {
    throw new Error(
      `GeoAdmin returned HTTP ${response.status}.`,
    );
  }

  const data = (await response.json()) as {
    results?: ApiResult[];
    error?: {
      message?: string;
    };
  };

  if (data.error) {
    throw new Error(
      data.error.message ?? "GeoAdmin returned an error.",
    );
  }

  return (data.results ?? [])
    .map(apiResultToFeature)
    .filter(
      (feature): feature is GeoJsonFeature =>
        feature !== null &&
        ["LineString", "MultiLineString"].includes(
          feature.geometry.type,
        ),
    );
}

function extractCoordinatePairs(
  value: unknown,
  output: Position[] = [],
): Position[] {
  if (!Array.isArray(value)) {
    return output;
  }

  if (
    value.length >= 2 &&
    typeof value[0] === "number" &&
    typeof value[1] === "number"
  ) {
    output.push([value[0], value[1]]);
    return output;
  }

  for (const child of value) {
    extractCoordinatePairs(child, output);
  }

  return output;
}

function calculateBounds(
  features: GeoJsonFeature[],
): [[number, number], [number, number]] | null {
  const points: Position[] = [];

  for (const feature of features) {
    extractCoordinatePairs(feature.geometry.coordinates, points);
  }

  if (!points.length) {
    return null;
  }

  let minLongitude = Infinity;
  let minLatitude = Infinity;
  let maxLongitude = -Infinity;
  let maxLatitude = -Infinity;

  for (const [longitude, latitude] of points) {
    minLongitude = Math.min(minLongitude, longitude);
    minLatitude = Math.min(minLatitude, latitude);
    maxLongitude = Math.max(maxLongitude, longitude);
    maxLatitude = Math.max(maxLatitude, latitude);
  }

  return [
    [minLongitude, minLatitude],
    [maxLongitude, maxLatitude],
  ];
}

function simulatedFlow(): number {
  const meanFlow = state.river.meanFlow;

  const date = dateForTimeline(
    state.liveMode ? TOTAL_DAYS : state.timelineIndex,
  );

  const dayOfYear = Math.floor(
    (date.getTime() -
      Date.UTC(date.getUTCFullYear(), 0, 0)) /
      DAY_MS,
  );

  /*
   * This is only a temporary visual preview.
   * It will be replaced by daily FOEN observations later.
   */
  const snowmeltPulse =
    Math.exp(-Math.pow((dayOfYear - 125) / 42, 2)) * 0.8;

  const summerLowWater =
    -Math.exp(-Math.pow((dayOfYear - 225) / 55, 2)) * 0.2;

  const winterBase =
    Math.sin((dayOfYear / 365.25) * Math.PI * 2) * 0.08;

  const historicalPulse =
    state.liveMode
      ? 0
      : Math.max(
          0,
          Math.sin((state.timelineIndex / TOTAL_DAYS) * Math.PI * 9),
        ) * 0.5;

  const multiplier =
    0.95 +
    snowmeltPulse +
    summerLowWater +
    winterBase +
    historicalPulse;

  return Math.max(0.2, meanFlow * multiplier);
}

function relativeFlow(): number {
  const flow = simulatedFlow();

  /*
   * Wide logarithmic range makes low and high conditions
   * visibly different instead of compressing them together.
   */
  const minimum = state.river.meanFlow * 0.25;
  const maximum = state.river.meanFlow * 4;

  const normalised =
    (Math.log(flow) - Math.log(minimum)) /
    (Math.log(maximum) - Math.log(minimum));

  return clamp(normalised, 0, 1);
}

function interpolateColour(
  first: [number, number, number],
  second: [number, number, number],
  amount: number,
): string {
  const red = Math.round(
    first[0] + (second[0] - first[0]) * amount,
  );

  const green = Math.round(
    first[1] + (second[1] - first[1]) * amount,
  );

  const blue = Math.round(
    first[2] + (second[2] - first[2]) * amount,
  );

  return `rgb(${red}, ${green}, ${blue})`;
}

function colourForFlow(normalised: number): string {
  const stops: Array<{
    at: number;
    colour: [number, number, number];
  }> = [
    { at: 0, colour: [45, 205, 208] },
    { at: 0.35, colour: [102, 225, 181] },
    { at: 0.68, colour: [232, 213, 93] },
    { at: 1, colour: [255, 115, 91] },
  ];

  for (let index = 0; index < stops.length - 1; index += 1) {
    const left = stops[index];
    const right = stops[index + 1];

    if (normalised <= right.at) {
      const amount =
        (normalised - left.at) / (right.at - left.at);

      return interpolateColour(
        left.colour,
        right.colour,
        clamp(amount, 0, 1),
      );
    }
  }

  return "rgb(255, 115, 91)";
}

function updateRiverAppearance(): void {
  if (!map.isStyleLoaded()) {
    return;
  }

  const normalised = relativeFlow();
  const colour = colourForFlow(normalised);

  const coreWidth =
    2.5 + Math.pow(normalised, 0.65) * 11;

  const glowWidth = coreWidth * 3.2;

  map.setPaintProperty(
    "selected-river-glow",
    "line-color",
    colour,
  );

  map.setPaintProperty(
    "selected-river-glow",
    "line-width",
    glowWidth,
  );

  map.setPaintProperty(
    "selected-river-core",
    "line-color",
    colour,
  );

  map.setPaintProperty(
    "selected-river-core",
    "line-width",
    coreWidth,
  );

  const flow = simulatedFlow();

  flowValue.textContent = `${formatNumber(flow)} m³/s`;

  dateValue.textContent = state.liveMode
    ? "Live preview"
    : formatDate(dateForTimeline(state.timelineIndex));

  timelineDate.textContent = state.liveMode
    ? "Live preview"
    : formatDate(dateForTimeline(state.timelineIndex));
}

function updateTimelineLabels(): void {
  timelineStart.textContent = formatDate(startDate());
  timelineEnd.textContent = "Live";

  timeline.value = String(
    state.liveMode ? TOTAL_DAYS : state.timelineIndex,
  );
}

function updatePanel(): void {
  riverSummary.innerHTML = `
    <strong>${escapeHtml(state.river.name)}</strong>
    <br />
    ${escapeHtml(state.river.region)} · visual flow preview
  `;

  catchmentValue.textContent = "next";
  stationValue.textContent = "next";

  updateTimelineLabels();
  updateRiverAppearance();
}

function setSelectedRiverData(
  features: GeoJsonFeature[],
): void {
  const source = map.getSource(
    "selected-river",
  ) as maplibregl.GeoJSONSource | undefined;

  if (!source) {
    return;
  }

  const collection: FeatureCollection = {
    type: "FeatureCollection",
    features,
  };

  source.setData(collection as never);
}

async function loadRiver(name: string): Promise<void> {
  const cleanName = name.trim();

  if (!cleanName) {
    setStatus("Enter a river name.", "error");
    return;
  }

  state.river = findRiver(cleanName);
  state.riverFeatures = [];

  updatePanel();
  setSelectedRiverData(emptyCollection);

  setStatus(
    `Searching the official swissTLM3D water network for ${state.river.name}…`,
    "loading",
  );

  try {
    const features = await fetchRiverFeatures(
      state.river.name,
    );

    state.riverFeatures = features;
    setSelectedRiverData({
      type: "FeatureCollection",
      features,
    });

    const bounds = calculateBounds(features);

    if (bounds) {
      map.fitBounds(bounds, {
        padding: {
          top: 90,
          right: 80,
          bottom: 90,
          left: 410,
        },
        maxZoom: 11,
        duration: 900,
      });
    }

    if (features.length >= 200) {
      setStatus(
        `${state.river.name} loaded. GeoAdmin returned the first 200 matching reaches; the complete connected network will be added in the data-preparation step.`,
        "loading",
      );
    } else if (features.length > 0) {
      setStatus(
        `${state.river.name} loaded. Flow colour and width are currently visual estimates.`,
      );
    } else {
      setStatus(
        `No named geometry was returned for ${state.river.name}. The official Swiss hydrography layer remains visible.`,
        "error",
      );
    }

    updatePanel();
  } catch (error) {
    console.error(error);

    setSelectedRiverData(emptyCollection);

    setStatus(
      error instanceof Error
        ? error.message
        : "The river search failed.",
      "error",
    );
  }
}

function setHydrographyVisibility(
  visible: boolean,
): void {
  if (!map.getLayer("hydrography")) {
    return;
  }

  map.setLayoutProperty(
    "hydrography",
    "visibility",
    visible ? "visible" : "none",
  );
}

const map = new maplibregl.Map({
  container: "map",

  style: {
    version: 8,

    sources: {
      basemap: {
        type: "raster",
        tiles: [
          "https://wmts.geo.admin.ch/1.0.0/ch.swisstopo.pixelkarte-farbe/default/current/3857/{z}/{x}/{y}.jpeg",
        ],
        tileSize: 256,
        attribution: "© swisstopo",
      },

      hydrography: {
        type: "raster",
        tiles: [
          "https://wmts.geo.admin.ch/1.0.0/ch.swisstopo.swisstlm3d-gewaessernetz/default/current/3857/{z}/{x}/{y}.png",
        ],
        tileSize: 256,
        attribution: "© swisstopo",
      },
    },

    layers: [
      {
        id: "basemap",
        type: "raster",
        source: "basemap",
        paint: {
          "raster-opacity": 0.78,
          "raster-saturation": -0.6,
          "raster-contrast": 0.15,
        },
      },

      {
        id: "hydrography",
        type: "raster",
        source: "hydrography",
        paint: {
          "raster-opacity": 0.62,
        },
      },
    ],
  },

  center: [8.23, 46.8],
  zoom: 7.25,
  pitch: 52,
  bearing: -8,
  antialias: true,
});

map.addControl(
  new maplibregl.NavigationControl({
    visualizePitch: true,
  }),
  "bottom-right",
);

map.on("load", async () => {
  mapLoadingElement.style.display = "none";

  map.addSource("selected-river", {
    type: "geojson",
    data: emptyCollection as never,
    lineMetrics: true,
  });

  map.addLayer({
    id: "selected-river-glow",
    type: "line",
    source: "selected-river",
    layout: {
      "line-cap": "round",
      "line-join": "round",
    },
    paint: {
      "line-color": "#4bd8cf",
      "line-width": 12,
      "line-opacity": 0.16,
      "line-blur": 1.5,
    },
  });

  map.addLayer({
    id: "selected-river-core",
    type: "line",
    source: "selected-river",
    layout: {
      "line-cap": "round",
      "line-join": "round",
    },
    paint: {
      "line-color": "#4bd8cf",
      "line-width": 4,
      "line-opacity": 0.96,
    },
  });

  map.on(
    "mouseenter",
    "selected-river-core",
    () => {
      map.getCanvas().style.cursor = "pointer";
    },
  );

  map.on(
    "mouseleave",
    "selected-river-core",
    () => {
      map.getCanvas().style.cursor = "";
    },
  );

  map.on(
    "click",
    "selected-river-core",
    (event) => {
      const flow = simulatedFlow();

      new maplibregl.Popup({
        closeButton: true,
        closeOnClick: true,
      })
        .setLngLat(event.lngLat)
        .setHTML(`
          <strong>${escapeHtml(state.river.name)}</strong>
          <br />
          Estimated flow: ${formatNumber(flow)} m³/s
          <br />
          <small>Live FOEN observations will replace this preview.</small>
        `)
        .addTo(map);
    },
  );

  setStatus(
    "Map loaded without a private API key. Loading the Aare…",
    "loading",
  );

  await loadRiver("Aare");

  updatePanel();

  requestAnimationFrame(animationLoop);
});

loadRiverButton.addEventListener("click", () => {
  void loadRiver(riverInput.value);
});

riverInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    void loadRiver(riverInput.value);
  }
});

timeline.addEventListener("input", () => {
  state.timelineIndex = Number(timeline.value);
  state.liveMode = state.timelineIndex >= TOTAL_DAYS;

  updateTimelineLabels();
  updateRiverAppearance();
});

playTimelineButton.addEventListener("click", () => {
  state.playing = !state.playing;
  playTimelineButton.textContent = state.playing
    ? "Pause"
    : "Play";
});

liveModeButton.addEventListener("click", () => {
  state.liveMode = true;
  state.timelineIndex = TOTAL_DAYS;
  state.playing = false;
  playTimelineButton.textContent = "Play";

  updateTimelineLabels();
  updateRiverAppearance();

  setStatus(
    "Live mode selected. Real FOEN observations will be connected in the next data step.",
    "loading",
  );
});

showTributaries.addEventListener("change", () => {
  setHydrographyVisibility(showTributaries.checked);

  setStatus(
    showTributaries.checked
      ? "Swiss hydrography is visible. Catchment-limited tributary filtering comes next."
      : "Swiss hydrography is hidden.",
  );
});

showCatchment.addEventListener("change", () => {
  setStatus(
    "The full upstream catchment will be connected after the river-network data preparation step.",
    "loading",
  );
});

showStations.addEventListener("change", () => {
  setStatus(
    "Hydrometric station data will be connected after the FOEN data adapter is added.",
    "loading",
  );
});

showWeather.addEventListener("change", () => {
  setStatus(
    "MeteoSwiss precipitation and temperature layers will be connected after the FOEN station layer.",
    "loading",
  );
});

let previousFrame = performance.now();

function animationLoop(timestamp: number): void {
  const elapsed = timestamp - previousFrame;
  previousFrame = timestamp;

  if (state.playing && !state.liveMode) {
    /*
     * Approximately one five-year cycle every 90 seconds.
     */
    state.timelineIndex +=
      (elapsed / 90_000) * TOTAL_DAYS;

    if (state.timelineIndex >= TOTAL_DAYS) {
      state.timelineIndex = 0;
    }

    timeline.value = String(
      Math.floor(state.timelineIndex),
    );

    updateTimelineLabels();
    updateRiverAppearance();
  }

  requestAnimationFrame(animationLoop);
}
