// Global type declarations for the application

declare global {
  interface Window {
    gtag: (command: string, ...args: unknown[]) => void;
  }
}

export {};
