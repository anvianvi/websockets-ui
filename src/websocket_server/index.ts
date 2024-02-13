import { WebSocketServer } from "ws";

export function runWebSocketServer(websocketPort: number) {
  const server = new WebSocketServer({ port: websocketPort });

  server.on("connection", () => {
    console.log("New client connected!");
  });
}
