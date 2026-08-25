// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

const basePath = "/freelance-web-star/";

export default defineConfig({
  // GitHub Pages (project site) 用のアセットパス
  vite: {
    base: basePath,
  },
  // 静的ホスティング向けに SPA シェルを生成（サーバー不要）
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
    spa: {
      enabled: true,
    },
    router: {
      // Vite base と揃える（末尾スラッシュなし）
      basepath: "/freelance-web-star",
    },
  },
  // GitHub Pages は静的ファイルのみのため Nitro サーバー出力は不要
  nitro: false,
});
