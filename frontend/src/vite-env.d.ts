/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_BACKEND_HOST: string;
  readonly VITE_RRWEB_INTERVAL: number;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
