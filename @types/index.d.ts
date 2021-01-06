export declare global {
  interface Window {
    api: {
      inspectElement(point: { x: number; y: number });
    };
  }
}
