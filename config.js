// Einstellungen der Web-App. Normalerweise muss hier nichts geändert werden.
window.LINTH_CONFIG = {
  // Woher die Niederschlagsdaten kommen (von der GitHub Action alle 30 Min. erzeugt).
  // null = automatisch aus der GitHub-Pages-Adresse ableiten:
  //   https://<konto>.github.io/<repo>/  ->  raw.githubusercontent.com/<konto>/<repo>/live-data/meteo.json
  meteoUrl: null,

  // Schnittstelle der BAFU-Datenplattform (CORS-fähig, ohne Login)
  bafuApi: 'https://data.bafu.admin.ch/api',

  // Wie viele Tage Verlauf beim Start geladen werden (7 oder 30)
  historyDays: 7,

  // Maximale Anzahl gleichzeitig geladener Punkte in der 3D-Ansicht
  pointBudget: 8000000,
};
