import { nanoid } from "nanoid";
import { useRouter } from "next/router";
import { Fragment } from "react";
import PlayerForm from "../components/GamePage/PlayerForm";
import { useLocalStorage } from "../helpers/hooks";

export default function GamePage({ games = [], onAddNewPlayer }) {
  const router = useRouter();
  const { id } = router.query;

  if (!games) {
    return null;
  }

  const currentGame = games.find((game) => game.id === id);

  if (!currentGame) {
    return null;
  }

  const playersArray = currentGame.players;
  console.log(playersArray);

  return (
    <>
      <h2>{currentGame.name}</h2>
      <PlayerForm onAddNewPlayer={onAddNewPlayer} gameId={currentGame.id} />
      {playersArray.map((player) => {
        return <p>{player.name}</p>;
      })}
      <button onClick={() => router.back()}>back</button>
    </>
  );
}
