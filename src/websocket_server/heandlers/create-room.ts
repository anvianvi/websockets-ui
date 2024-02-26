import { Room, rooms } from "../../db";

export function handleRoomCreation(currentUser: {
  index: number | null;
  name: string;
}) {
  const indexRoom = rooms.length;
  const room: Room = {
    roomId: indexRoom,
    roomUsers: [
      {
        name: currentUser.name,
        index: currentUser.index,
      },
    ],
  };
  rooms.push(room);

  return JSON.stringify({ indexRoom: indexRoom });
}
