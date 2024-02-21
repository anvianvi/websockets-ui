import { rooms } from "../../db";

export function roomsWithOnePlayer() {
  let singlePlayerRooms = rooms.filter((room) => room.roomUsers.length === 1);
  console.log(JSON.stringify(singlePlayerRooms));
  return JSON.stringify(singlePlayerRooms);
}
