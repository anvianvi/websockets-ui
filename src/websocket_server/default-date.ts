import { players, rooms } from "../db";

export function setUpDefaultData() {
  let defaultUser = {
    index: 0,
    name: "admin",
    password: "admin",
  };

  players.push(defaultUser);

  let defaultRoom = {
    roomId: 0,
    roomUsers: [
      {
        name: "admin",
        index: 0,
      },
    ],
  };

  rooms.push(defaultRoom);
}
