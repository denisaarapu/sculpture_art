/// <reference types="vite/client" />

// Extindere pentru tipurile Vite pentru a permite boolean la allowedHosts
import { ServerOptions } from 'vite';

declare module 'vite' {
  interface ServerOptions {
    allowedHosts?: boolean | true | string[] | undefined;
  }
}