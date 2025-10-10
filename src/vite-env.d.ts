/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_STATS_SPLINE_URL?: string
  readonly VITE_NEWS_SPLINE_SCENE_URL?: string
  readonly VITE_VIRTUAL_STUDIO_SPLINE_URL?: string
  readonly VITE_VIRTUAL_STUDIO_SPLINE_EMBED_URL?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
