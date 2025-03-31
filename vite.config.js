import { defineConfig } from "vite"
import tsconfigPaths from 'vite-tsconfig-paths'
import viteReact from "@vitejs/plugin-react"
import { TanStackRouterVite } from "@tanstack/router-plugin/vite"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    tsconfigPaths(),
    TanStackRouterVite({ target: 'react' }),
    viteReact()
  ],
  test: {
    globals: true,
    environment: "happy-dom",
  },
});
