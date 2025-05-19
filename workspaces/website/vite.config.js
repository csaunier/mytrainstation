import tailwindcss from "@tailwindcss/vite"
import { TanStackRouterVite } from "@tanstack/router-plugin/vite"
import viteReact from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import svgr from "vite-plugin-svgr"
import tsconfigPaths from "vite-tsconfig-paths"

export default defineConfig({
  plugins: [tsconfigPaths(), TanStackRouterVite({ target: "react" }), viteReact(), tailwindcss(), svgr()],
  test: {
    globals: true,
    environment: "happy-dom",
  },
  server: {
    port: 3000,
  },
})
