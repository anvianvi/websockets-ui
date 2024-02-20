import { Room, rooms } from "../../db";

export function handleRoomCreation() {
  const indexRoom = rooms.length;
  const room: Room = {
    indexRoom,
    roomUsers: [],
  };
  rooms.push(room);

  return JSON.stringify({ indexRoom: indexRoom });
}
