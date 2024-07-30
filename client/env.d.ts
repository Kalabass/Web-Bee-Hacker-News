interface ImportMetaEnv {
  VITE_SERVER_URL: string;
  VITE_PORT: number;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
