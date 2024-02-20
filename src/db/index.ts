export const players: Player[] = [];
export const rooms: Room[] = [];
// let games: Game[] = [];

export type Player = {
  index: number;
  name: string;
  password?: string;
  // ships: Ship[];
};

export type Room = {
  indexRoom: number;
  roomUsers: Player[];
};

// type Position = {
//   x: number;
//   y: number;
// };

// type Ship = {
//   position: Position;
//   direction: boolean;
//   length: number;
//   type: 'small' | 'medium' | 'large' | 'huge';
// };
