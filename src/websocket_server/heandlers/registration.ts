import { Player, players } from "../../db";

export function handleRegistration(input: string) {
  const data = JSON.parse(input);
  const existingPlayer = players.find((player) => player.name === data.name);

  if (existingPlayer) {
    if (existingPlayer.password === data.password) {
      return JSON.stringify({
        name: data.name,
        index: existingPlayer.index,
        error: false,
        errorText: "You are loggedIn",
      });
    } else {
      return JSON.stringify({
        name: data.name,
        password: data.password,
        error: true,
        errorText: "Incorrect password",
      });
    }
  }

  const id = players.length;
  const player: Player = {
    index: id,
    name: data.name,
    password: data.password,
  };

  players.push(player);

  return JSON.stringify({
    name: data.name,
    index: id,
    error: false,
    errorText: "Account created, and loggedIn",
  });
}
