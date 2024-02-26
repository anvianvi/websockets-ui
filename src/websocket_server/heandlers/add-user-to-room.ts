import { rooms } from "../../db";

export function addUserToRoom(
  input: string,
  currentUser: {
    index: number | null;
    name: string;
  }
) {
  const data = JSON.parse(input);
  console.log(data.indexRoom);
  const roomIndex = rooms.findIndex((room) => room.roomId === data.indexRoom);

  const userExistsInRoom = rooms[roomIndex].roomUsers.some(
    (user) => user.name === currentUser.name
  );
  console.log(userExistsInRoom);
  if (!userExistsInRoom) {
    rooms[roomIndex].roomUsers.push({
      name: currentUser.name,
      index: currentUser.index,
    });

    return JSON.stringify({
      idGame: 1,
      idPlayer: 2,
    });
  }
}
