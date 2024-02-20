import { WebSocketServer } from "ws";
import { handleRegistration } from "./heandlers/registration";
import { handleRoomCreation } from "./heandlers/create-room";
import { roomsWithOnePlayer } from "./heandlers/update-rooms-state";
import { setUpDefaultData } from "./default-date";

export function runWebSocketServer(websocketPort: number) {
  const server = new WebSocketServer({ port: websocketPort });

  setUpDefaultData();

  server.on("connection", (ws) => {
    console.log("New client connected!");
    ws.on("message", (message) => {
      const { type, data } = JSON.parse(message.toString());
      console.log("Received message from client:", type, data);

      switch (type) {
        case "reg":
          {
            const response = handleRegistration(data);
            ws.send(JSON.stringify({ type: "reg", data: response, id: 0 }));
            ws.send(
              JSON.stringify({
                type: "update_room",
                data: roomsWithOnePlayer(),
                id: 0,
              })
            );
          }
          break;
        case "create_room":
          {
            const response = handleRoomCreation();
            ws.send(
              JSON.stringify({
                type: "add_user_to_room",
                data: response,
                id: 0,
              })
            );
          }
          break;
        case "add_user_to_room":
          break;
        default:
          console.log("Unknown command");
      }
    });

    ws.on("close", () => {
      console.log("Client disconnected");
    });
  });
}
