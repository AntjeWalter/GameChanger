import { useRouter } from "next/router";
import { useLocalStorage } from "/helpers/hooks";
import SinglePlayer from "../../../../components/GamePage/Players/SinglePlayer";

export default function PlayerPage({ gameId, onAddChosenContestants }) {
  const router = useRouter();
  const { id, playerId } = router.query;

  const [games, setGames] = useLocalStorage("games");

  if (!games) {
    return null;
  }

  const currentGame = games.find((game) => game.id === id);

  if (!currentGame) {
    return null;
  }

  const currentPlayer = currentGame.players.find(
    (player) => player.id === playerId
  );

  console.log("games", games);
  console.log("currentPlayer", currentPlayer);

  return (
    <SinglePlayer
      playerId={playerId}
      gameId={gameId}
      currentPlayer={currentPlayer}
      currentGame={currentGame}
      onAddChosenContestants={onAddChosenContestants}
    />
  );
}
