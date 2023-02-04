import { useRouter } from "next/router";
import styled from "styled-components";
import PlayerForm from "../components/GamePage/PlayerForm";
import PlayersAndPoints from "../components/GamePage/PlayersAndPoints";
import Notes from "../components/GamePage/Notes";
import Rules from "../components/GamePage/Rules";
import { useLocalStorage } from "../helpers/hooks";

export default function GamePage({ onAddNewPlayer }) {
  const router = useRouter();
  const { id } = router.query;

  const [games, setGames] = useLocalStorage("games");

  if (!games) {
    return null;
  }

  const currentGame = games.find((game) => game.id === id);

  if (!currentGame) {
    return null;
  }

  function handleAddPoints(playerId) {
    const currentPlayer = currentGame.players.find(
      (player) => player.id === playerId
    );

    const newPoints = currentPlayer.points + 1;
    const playerNewPoints = currentGame.players.map((player) =>
      player.id === playerId ? { ...player, points: newPoints } : player
    );

    setGames(
      games.map((game) =>
        game.id === id
          ? {
              ...game,
              players: playerNewPoints,
            }
          : game
      )
    );
  }

  function handleRemovePoints(playerId) {
    const currentPlayer = currentGame.players.find(
      (player) => player.id === playerId
    );

    const newPoints = currentPlayer.points - 1;
    const playerNewPoints = currentGame.players.map((player) =>
      player.id === playerId ? { ...player, points: newPoints } : player
    );

    setGames(
      games.map((game) =>
        game.id === id
          ? {
              ...game,
              players: playerNewPoints,
            }
          : game
      )
    );
  }

  const playersArray = currentGame.players;

  function handleAddNotes(gameNotes) {
    setGames(
      games.map((game) =>
        game.id === id ? { ...game, notes: gameNotes } : game
      )
    );
  }

  function handleAddRules(gameRules) {
    setGames(
      games.map((game) =>
        game.id === id ? { ...game, rules: gameRules } : game
      )
    );
  }

  return (
    <>
      <h2>{currentGame.name}</h2>
      <PlayerForm onAddNewPlayer={onAddNewPlayer} gameId={currentGame.id} />
      <PlayersAndPoints
        gameId={currentGame.id}
        playersArray={playersArray}
        onAddPoints={handleAddPoints}
        onRemovePoints={handleRemovePoints}
      />
      <hr />
      <Notes
        gameId={currentGame.id}
        onAddNotes={handleAddNotes}
        notes={currentGame.notes}
      />
      <hr />
      <Rules onAddRules={handleAddRules} rules={currentGame.rules} />
      <StyledBackButton onClick={() => router.back()}>back</StyledBackButton>
    </>
  );
}

const StyledBackButton = styled.button`
  position: fixed;
  bottom: 10px;
  left: 20px;
`;
