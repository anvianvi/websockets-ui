import { WebSocketServer } from "ws";
import { handleRegistration } from "./heandlers/registration";
import { handleRoomCreation } from "./heandlers/create-room";
import { roomsWithOnePlayer } from "./heandlers/update-rooms-state";
import { setUpDefaultData } from "./default-date";
import { addUserToRoom } from "./heandlers/add-user-to-room";

export function runWebSocketServer(websocketPort: number) {
  const server = new WebSocketServer({ port: websocketPort });

  setUpDefaultData();

  server.on("connection", (ws) => {
    console.log("New client connected!");
    let currentUser = {
      index: null,
      name: "",
    };
    console.log(`currentUserId: ${currentUser.index} + ${currentUser.name}`);

    ws.on("message", (message) => {
      console.log(message.toString());

      const { type, data } = JSON.parse(message.toString());
      // console.log("Received message from client:", type, data);

      switch (type) {
        case "reg":
          {
            const response = handleRegistration(data);
            currentUser.index = JSON.parse(response).index;
            currentUser.name = JSON.parse(response).name;

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
            console.log(`User ${currentUser.name} sent a message:`, type, data);
            handleRoomCreation(currentUser);
            ws.send(
              JSON.stringify({
                type: "update_room",
                data: roomsWithOnePlayer(),
                id: 0,
              })
            );
          }
          break;
        case "add_user_to_room":
          console.log(`User ${currentUser.name} sent a message:`, type, data);
          ws.send(
            JSON.stringify({
              type: "update_room",
              data: roomsWithOnePlayer(),
              id: 0,
            })
          );
          ws.send(
            JSON.stringify({
              type: "create_game",
              data: addUserToRoom(data, currentUser),
              id: 0,
            })
          );
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
