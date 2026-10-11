import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [react()],
  resolve: { alias: { "@": new URL("./", import.meta.url).pathname } },
  test: {
    environment: "jsdom",
    css: { modules: { classNameStrategy: "non-scoped" } }, // readable class names in assertions
    setupFiles: ["./vitest.setup.ts"],
    include: ["**/*.test.{ts,tsx}"],
    exclude: ["node_modules", ".next", "tests/**"],
  },
});
