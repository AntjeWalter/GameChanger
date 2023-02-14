import { useRouter } from "next/router";
import { useLocalStorage } from "/helpers/hooks";
import SinglePlayer from "../../../../components/GamePage/Players/SinglePlayer";
import styled from "styled-components";
import { useState } from "react";

export default function PlayerPage({
  gameId,
  onAddChosenContestants,
  onDeleteChosenContestant,
  games,
}) {
  const router = useRouter();
  const { id, playerId } = router.query;

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

  console.log("currentPlayer", currentPlayer);

  return (
    <>
      <SinglePlayer
        playerId={playerId}
        gameId={gameId}
        currentPlayer={currentPlayer}
        currentGame={currentGame}
        onAddChosenContestants={onAddChosenContestants}
        onDeleteChosenContestant={onDeleteChosenContestant}
      />
      <StyledBackButton onClick={() => router.back()}>🔙</StyledBackButton>
    </>
  );
}

const StyledBackButton = styled.button`
  position: fixed;
  bottom: 10px;
  left: 20px;
  background-color: transparent;
  border-radius: 5px;
  font-size: 1.2rem;
`;
