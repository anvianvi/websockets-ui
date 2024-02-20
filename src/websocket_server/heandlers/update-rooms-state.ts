import { rooms } from "../../db";

export function roomsWithOnePlayer() {
  let singlePlayerRooms = rooms.filter((room) => room.roomUsers.length === 1);

  return JSON.stringify(singlePlayerRooms);
}
