import { players, rooms } from "../db";

export function setUpDefaultData() {
  let defaultUser = {
    index: 0,
    name: "admin",
    password: "admin",
  };

  players.push(defaultUser);

  let defaultRoom = {
    indexRoom: 0,
    roomUsers: [
      {
        index: 0,
        name: "admin",
      },
    ],
  };

  rooms.push(defaultRoom);
}
