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
  rooms[roomIndex].roomUsers.push({
    name: currentUser.name,
    index: currentUser.index,
  });
  // return;
}

// const indexRoom = rooms.length;
// const room: Room = {
//   roomId: indexRoom,
//   roomUsers: [
//     {
//       name: currentUser.name,
//       index: currentUser.index,
//     },
//   ],
// };
// rooms.push(room);
// let singlePlayerRooms = rooms.filter((room) => room.roomUsers.length === 1);

// return JSON.stringify({ indexRoom: indexRoom });
// {
//   idGame: <number>,
//   idPlayer: <number>, \* id for player in the game session, who have sent add_user_to_room request, not enemy *\
// },
