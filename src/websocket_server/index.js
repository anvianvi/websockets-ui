import { WebSocketServer } from "ws"

export function runWebSocketServer(websocketPort) {
  const server = new WebSocketServer({ port: websocketPort })

  server.on("connection", () => {
    console.log("New client connected!")
  })
}