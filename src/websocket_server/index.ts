import { WebSocketServer } from "ws";
import { players } from "../db";
import { handleRegistration } from "./heandlers/registration";

export function runWebSocketServer(websocketPort: number) {
  const server = new WebSocketServer({ port: websocketPort });

  let defaultUser = {
    index: 0,
    name: "admin",
    password: "admin",
  };

  players.push(defaultUser);

  server.on("connection", (ws) => {
    console.log("New client connected!");

    ws.on("message", (message) => {
      const { type, data } = JSON.parse(message.toString());
      console.log("Received message from client:", type, data);
      console.log(players);
      console.log(players.length);

      switch (type) {
        case "reg":
          {
            let response = handleRegistration(data);
            console.log(response);
            ws.send(JSON.stringify({ type: "reg", data: response, id: 0 }));
          }
          break;
        case "create_room":
          // Handle room creation
          break;
        case "add_user_to_room":
          // Handle adding user to room
          break;
        case "add_ships":
          // Handle adding ships
          break;
        case "attack":
          // Handle attack
          break;
        case "randomAttack":
          // Handle random attack
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
