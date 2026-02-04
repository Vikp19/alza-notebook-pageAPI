import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/alza-api": {
        target: "https://www.alza.cz",
        changeOrigin: true,
        secure: false,
        headers: {
          origin: "https://www.alza.cz",
          referer: "https://www.alza.cz/",
          "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)",
        },
        rewrite: (path) => path.replace(/^\/alza-api/, ""),
      },
    },
  },
});
