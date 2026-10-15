# Linthebene: Pegel, Gelände und Querprofile

Web-App für die Linthebene mit Live-Pegeln des BAFU, Niederschlag von MeteoSchweiz,
der swissSURFACE3D-Punktwolke und Querprofilen entlang von Linthkanal und Escherkanal.
Die Seite läuft komplett auf GitHub (Pages und Actions), ohne eigenen Server.

Was die App zeigt:

- **2D-Plan** auf Luftbild oder Landeskarte von swisstopo, mit Flussachsen, Querprofilen
  (eingefärbt nach Freibord), Pegeln, Niederschlagsstationen und der berechneten Wasserfläche.
- **3D-Modell** der Punktwolke, wahlweise eingefärbt nach Orthofoto, Klassierung,
  Intensität oder Höhe, mit Wasserfläche und gewähltem Profil. Klassen lassen sich ein- und ausblenden.
- **Querprofil** mit Gelände, Bäumen und Bauten, vermessener Flusssohle (wo vorhanden),
  Wasserspiegel und Freibord zu beiden Uferkronen.
- **Längenprofil** mit Wasserspiegel, Uferkronen und Pegeln. Ein Klick wählt das Profil.
- **Zeitachse**: Live-Stand oder zurück bis 7 bzw. 30 Tage, mit Abspielfunktion.

## Einrichten

1. Neues Repository auf GitHub anlegen und den Inhalt dieses Ordners hochladen.
   Das Repository muss **öffentlich** sein (GitHub Pages ist sonst kostenpflichtig, und die
   Niederschlagsdaten werden über `raw.githubusercontent.com` gelesen).
2. Unter **Settings → Pages** als Quelle **GitHub Actions** wählen.
3. Unter **Settings → Actions → General → Workflow permissions** «Read and write permissions» einstellen.
4. Unter **Actions** den Workflow **«Daten aufbereiten»** von Hand starten (Run workflow).
   Er lädt Achsen, Höhenmodelle, Punktwolke und Stationen, rechnet alles um und legt das
   Ergebnis als Release-Datei `data-latest` ab. Dauer: je nach Datenmenge 30 bis 120 Minuten.
   Danach startet er automatisch das Veröffentlichen der Seite.
5. Den Workflow **«Niederschlag aktualisieren»** einmal von Hand starten. Danach läuft er
   von selbst alle 30 Minuten.

Die Seite ist dann unter `https://<konto>.github.io/<repository>/` erreichbar.
Solange noch keine aufbereiteten Daten existieren, veröffentlicht GitHub automatisch
eine Vorschau mit künstlichen Demodaten.

## Lokale Vorschau

```bash
pip install -r pipeline/requirements.txt
python pipeline/make_demo_data.py --out site/data      # künstliche Daten, ohne Internet
python -m http.server -d site 8000                     # dann http://localhost:8000 öffnen
```

Mit echten Daten statt Demodaten:

```bash
python pipeline/build_all.py --config config/linthebene.json --out site/data
python pipeline/live_meteo.py --config config/linthebene.json --out site/live
```

Für einen schnellen Testlauf ohne Punktwolke: `--skip pointcloud`.

## Woher die Daten kommen

| Inhalt | Quelle | Wann |
| --- | --- | --- |
| Punktwolke | swisstopo swissSURFACE3D, jeweils neuester Stand pro Kachel | beim Aufbereiten |
| Gelände (DTM) | swisstopo swissALTI3D 0.5 m | beim Aufbereiten |
| Oberfläche (DSM) | swisstopo swissSURFACE3D Raster 0.5 m | beim Aufbereiten |
| Farbe der Punkte | aus der Punktwolke, sonst SWISSIMAGE 10 cm | beim Aufbereiten |
| Flussachsen | OpenStreetMap, oder eigene Datei (siehe unten) | beim Aufbereiten |
| Flusssohle | BAFU Flussvermessung (Querprofile) | beim Aufbereiten |
| Pegel und Abfluss | BAFU Hydrologische Beobachtungen, direkt im Browser | live, alle 5 Minuten |
| Niederschlag | MeteoSchweiz Bodenstationen, Zehnminutenwerte zu Stunden summiert | alle 30 Minuten |
| Hintergrundkarten | swisstopo WMTS | live |

Alle Daten sind offene Behördendaten (OGD) und frei nutzbar mit Quellenangabe.
Die Quellen stehen in der Fusszeile der Seite.

## Wie der Wasserspiegel berechnet wird

Die Pegel messen nur an einzelnen Stellen. Für die Profile dazwischen:

1. Aus dem Terrainmodell wird die **Wasserlinie zur Befliegungszeit** geschätzt: der tiefste
   Punkt im Gerinne (±20 m um die Achse), geglättet und flussabwärts nie ansteigend.
   Sie liefert das natürliche Gefälle.
2. An jedem Pegel wird die **Abweichung** zwischen gemessenem Wasserstand und dieser
   Referenz bestimmt und zwischen den Pegeln linear interpoliert, ausserhalb konstant
   fortgesetzt. Seepegel (Walensee, Obersee) werden am jeweiligen Kanalende angesetzt.
3. Im Querprofil breitet sich das Wasser vom Gerinne seitwärts aus, solange das Gelände
   tiefer liegt. Die **Uferkrone** ist der höchste Punkt, der danach folgt.
   **Freibord** = Uferkrone minus Wasserspiegel.

Das ist eine **statische Näherung, kein hydraulisches Modell**. Fliesswiderstand, Brücken,
Rückstau und zeitlicher Verlauf einer Überflutung werden nicht berechnet. Liegt der Spiegel
über einer Uferkrone, füllt die Berechnung das tiefere Hinterland wie eine Badewanne –
das überschätzt eine Überflutung. Für Entscheide gelten die offiziellen Warnungen und Pegel.

Weitere Grenzen:

- Nur Pegel, die den Wasserstand in **m ü.M.** liefern, fliessen in den Spiegel ein.
  Relative Pegel werden angezeigt, aber nicht verwendet.
- Ohne BAFU-Vermessung zeigt das Terrainmodell im Gerinne die **Wasseroberfläche zur
  Befliegung**, nicht die Sohle. Die App weist im Profil darauf hin.
- Live-Werte des BAFU sind ungeprüft. Ältere Werte stammen aus den Stundenmitteln.

## Anpassen

Alles Wichtige steht in `config/linthebene.json`:

- `reaches`: die Flussabschnitte. `osm_name_regex` sucht die Achse in OpenStreetMap,
  `river_regex` und `lake_regex` ordnen BAFU-Stationen zu.
- `profiles`: Abstand der Querprofile (Standard 50 m), halbe Breite (300 m), Auflösung (1 m).
- `pointcloud`: Korridorbreite (±250 m) und Detailstufen. Ein breiterer Korridor oder
  feinere Stufen machen die Daten schnell gross: grob 12 Byte pro Punkt.
- `stations.include` / `exclude`: Stationsnummern von Hand hinzufügen oder ausschliessen.
- `meteo`: Umkreis und Anzahl der Niederschlagsstationen.

In `site/config.js` lassen sich der geladene Zeitraum und die maximale Punktzahl im 3D-Modell einstellen.

### Eigene Flussachse

Wenn die Achse aus OpenStreetMap falsch verläuft (im 2D-Plan gut sichtbar), eine Linie
in Fliessrichtung zeichnen, z.B. auf geojson.io, und als
`config/axis/<abschnitt-id>.geojson` speichern (etwa `config/axis/linthkanal.geojson`).
Koordinaten in WGS84 oder LV95 werden beide erkannt. Danach «Daten aufbereiten» neu starten.

## Fehlersuche

- **Seite zeigt «Noch keine aufbereiteten Daten»**: Workflow «Daten aufbereiten» starten
  und dessen Protokoll prüfen.
- **Keine Pegel in der Liste**: Im Protokoll von «Daten aufbereiten» steht unter Schritt 4,
  welche Stationen gefunden wurden. Fehlende Stationen unter `stations.include` eintragen.
- **Keine Niederschlagsdaten**: Workflow «Niederschlag aktualisieren» von Hand starten.
  Er schreibt auf den Branch `live-data`.
- **Geplante Workflows laufen nicht mehr**: GitHub pausiert sie nach 60 Tagen ohne
  Aktivität im Repository. Unter Actions wieder aktivieren.
- **3D-Modell bleibt leer**: Die Punktwolke wird nur mit einem vollständigen Lauf von
  «Daten aufbereiten» erzeugt (nicht mit «Punktwolke nicht neu rechnen»).

## Aufbau

```
config/linthebene.json        Einstellungen
pipeline/                     Aufbereitung in Python
  build_all.py                Gesamtlauf
  build_axis.py               Flussachsen
  build_profiles.py           Querprofile aus DTM und DSM
  build_surveys.py            BAFU-Flussvermessung
  build_stations.py           BAFU-Stationen
  build_pointcloud.py         Punktwolke in LOD-Kacheln
  live_meteo.py               Niederschlag (alle 30 Min.)
  make_demo_data.py           Demodaten für die Vorschau
site/                         die Web-App (statisch, wird so veröffentlicht)
  index.html, style.css       Seite und Gestaltung
  app.js                      gesamte App-Logik in einer Datei
  config.js                   Einstellungen
  vendor/                     three.js und Leaflet (lokal, ohne CDN)
src/                          Quellmodule, aus denen app.js gebaut wird
.github/workflows/            Aufbereiten, Veröffentlichen, Niederschlag
```

`app.js` ist aus den Modulen in `src/` zusammengesetzt. Kleine Änderungen können direkt
in `app.js` gemacht werden. Wer lieber in `src/` arbeitet, baut danach neu:

```bash
npx esbuild src/main.js --bundle --format=esm --external:three --outfile=site/app.js
```

Die aufbereiteten Daten liegen nicht im Repository, sondern als Release-Datei
`data-latest`. So bleibt das Repository klein, auch wenn die Punktwolke mehrere
hundert MB gross ist.
