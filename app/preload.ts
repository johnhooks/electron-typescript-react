import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld("api", {
  inspectElement: (point: { x: number; y: number }) => {
    ipcRenderer.send("contextmenu", point);
  },
});

process.once("loaded", () => {
  console.log("Preload Complete");
});
