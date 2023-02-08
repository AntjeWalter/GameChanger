import { useRouter } from "next/router";
import { useLocalStorage } from "../helpers/hooks";
import { useState } from "react";
import styled from "styled-components";
import PlayerForm from "../components/GamePage/Players/PlayerForm";
import PlayersAndPoints from "../components/GamePage/Players/PlayersAndPoints";
import NotesAndRules from "../components/GamePage/Home/NotesAndRules";
import ContestantsForm from "../components/GamePage/Contestants/ContestantsForm";
import ContestantsAndPoints from "../components/GamePage/Contestants/ContestantsAndPoints";
import { useEffect } from "react";

export default function GamePage({ onAddNewPlayer, onAddNewContestant }) {
  const router = useRouter();
  const { id } = router.query;

  const [games, setGames] = useLocalStorage("games");
  const [home, setHome] = useState(true);
  const [players, setPlayers] = useState(false);
  const [contestants, setContestants] = useState(false);

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

  function handleAddContestantPoints(contestantId) {
    const currentContestant = currentGame.contestants.find(
      (contestant) => contestant.id === contestantId
    );

    const newPoints = currentContestant.points + 1;
    const contestantNewPoints = currentGame.contestants.map((contestant) =>
      contestant.id === contestantId
        ? { ...contestant, points: newPoints }
        : contestant
    );

    setGames(
      games.map((game) =>
        game.id === id
          ? {
              ...game,
              contestants: contestantNewPoints,
            }
          : game
      )
    );
  }

  function handleRemoveContestantPoints(contestantId) {
    const currentContestant = currentGame.contestants.find(
      (contestant) => contestant.id === contestantId
    );

    const newPoints = currentContestant.points - 1;
    const contestantNewPoints = currentGame.contestants.map((contestant) =>
      contestant.id === contestantId
        ? { ...contestant, points: newPoints }
        : contestant
    );

    setGames(
      games.map((game) =>
        game.id === id
          ? {
              ...game,
              contestants: contestantNewPoints,
            }
          : game
      )
    );
  }

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

  const playersArray = currentGame.players;
  const contestantsArray = currentGame.contestants;

  function handleClickHome() {
    setHome(true);
    setPlayers(false);
    setContestants(false);
  }

  function handleClickPlayers() {
    setHome(false);
    setPlayers(true);
    setContestants(false);
  }

  function handleClickContestants() {
    setHome(false);
    setPlayers(false);
    setContestants(true);
  }

  return (
    <>
      <h2>{currentGame.name}</h2>
      <StyledNavigation>
        <StyledButton onClick={handleClickHome}>Home</StyledButton>
        <StyledButton onClick={handleClickPlayers}>Players</StyledButton>
        <StyledButton onClick={handleClickContestants}>
          Contestants
        </StyledButton>
      </StyledNavigation>

      {home ? (
        <>
          <h3>Home</h3>
          <NotesAndRules
            gameId={currentGame.id}
            onAddNotes={handleAddNotes}
            notes={currentGame.notes}
            onAddRules={handleAddRules}
            rules={currentGame.rules}
          />
        </>
      ) : players ? (
        <>
          <h3>Players</h3>
          <PlayerForm onAddNewPlayer={onAddNewPlayer} gameId={currentGame.id} />
          <PlayersAndPoints
            gameId={currentGame.id}
            playersArray={playersArray}
            onAddPoints={handleAddPoints}
            onRemovePoints={handleRemovePoints}
          />
        </>
      ) : contestants ? (
        <>
          <h3>Contestants</h3>
          <ContestantsForm
            onAddNewContestant={onAddNewContestant}
            gameId={currentGame.id}
          />
          <ContestantsAndPoints
            gameId={currentGame.id}
            contestantsArray={contestantsArray}
            onAddContestantPoints={handleAddContestantPoints}
            onRemoveContestantPoints={handleRemoveContestantPoints}
          />
        </>
      ) : null}

      <StyledBackButton onClick={() => router.back()}>🔙</StyledBackButton>
    </>
  );
}

const StyledNavigation = styled.section`
  display: flex;
  justify-content: space-around;
`;

const StyledButton = styled.button`
  padding: 3px 10px;
  border: none;
  border-bottom: 3px solid #990d35;
  background-color: transparent;
`;

const StyledBackButton = styled.button`
  position: fixed;
  bottom: 10px;
  left: 20px;
  background-color: transparent;
  border-radius: 5px;
  font-size: 1.2rem;
`;
