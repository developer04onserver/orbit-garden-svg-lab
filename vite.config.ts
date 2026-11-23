import { defineConfig } from "vite";

export default defineConfig({ base: "./", server: { host: "0.0.0.0" }, preview: { host: "0.0.0.0" }, build: { sourcemap: true, target: "es2022" } });
