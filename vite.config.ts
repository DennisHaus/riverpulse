import { defineConfig } from "vite";
import { fileURLToPath, URL } from "node:url";

const repositoryName =
  process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";

const isUserSite = repositoryName.endsWith(".github.io");

const base =
  process.env.GITHUB_ACTIONS === "true" &&
  repositoryName &&
  !isUserSite
    ? `/${repositoryName}/`
    : "/";

export default defineConfig({
  base,

  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },

  server: {
    host: "0.0.0.0",
    port: 5173,
  },

  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
});
