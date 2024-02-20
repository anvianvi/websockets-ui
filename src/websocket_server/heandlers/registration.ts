import { Player, players } from "../../db";

export function handleRegistration(input: string) {
  let data = JSON.parse(input);
  console.log(players.some((player) => player.name === data.name));

  if (players.some((player) => player.name === data.name)) {
    const response = {
      name: data.name,
      index: null,
      error: true,
      errorText: "Player already exists",
    };
    return JSON.stringify(response);
  } else {
    // Create a new player
    const id = players.length;
    const player: Player = {
      index: id,
      name: data.name,
      password: data.password,
    };

    players.push(player);

    const response = {
      name: data.name,
      index: id,
      error: false,
      errorText: "",
    };
    return JSON.stringify(response);
  }
}
