export const players: Player[] = [];
export const rooms: Room[] = [];
// let games: Game[] = [];

export type Player = {
  index: number | null;
  name: string;
  password?: string;
  // ships: Ship[];
};

export type Room = {
  roomId: number;
  roomUsers: {
    name: string;
    index: number | null;
  }[];
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
