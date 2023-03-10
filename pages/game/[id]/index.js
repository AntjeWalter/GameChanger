import { useRouter } from "next/router";
import { useState } from "react";
import styled from "styled-components";
import { SlArrowLeftCircle } from "react-icons/sl";
import PlayerForm from "../../../components/GamePage/Players/PlayerForm";
import PlayersAndPoints from "../../../components/GamePage/Players/PlayersAndPoints";
import NotesAndRules from "../../../components/GamePage/Home/NotesAndRules";
import ContestantsForm from "../../../components/GamePage/Contestants/ContestantsForm";
import ContestantsAndPoints from "../../../components/GamePage/Contestants/ContestantsAndPoints";

export default function GamePage({
  onAddNewPlayer,
  onAddNewContestant,
  onAddChosenContestants,
  onDeleteChosenContestant,
  onAddPoints,
  onRemovePoints,
  onAddContestantPoints,
  onRemoveContestantPoints,
  onAddNotes,
  onAddRules,
  onDeleteContestant,
  games,
}) {
  const router = useRouter();
  const { id } = router.query;

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
            onAddNotes={onAddNotes}
            notes={currentGame.notes}
            onAddRules={onAddRules}
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
            onAddPoints={onAddPoints}
            onRemovePoints={onRemovePoints}
            currentGame={currentGame}
            onAddChosenContestants={onAddChosenContestants}
            onDeleteChosenContestant={onDeleteChosenContestant}
            games={games}
          />
        </>
      ) : contestants ? (
        <>
          <h3>Contestants</h3>
          <ContestantsForm
            onAddNewContestant={onAddNewContestant}
            gameId={currentGame.id}
          />
          <StyledContestantContainer>
            <ContestantsAndPoints
              gameId={currentGame.id}
              contestantsArray={contestantsArray}
              onAddContestantPoints={onAddContestantPoints}
              onRemoveContestantPoints={onRemoveContestantPoints}
              onDeleteContestant={onDeleteContestant}
              currentGame={currentGame}
            />
          </StyledContestantContainer>
        </>
      ) : null}

      <StyledBackButton onClick={() => router.back()}>
        {" "}
        <SlArrowLeftCircle /> Back
      </StyledBackButton>
    </>
  );
}

const StyledNavigation = styled.section`
  display: flex;
  justify-content: space-around;
  font-family: inherit;
`;

const StyledContestantContainer = styled.section`
  margin-bottom: 50px;
`;

const StyledButton = styled.button`
  padding: 3px 10px;
  border: none;
  border-bottom: 3px solid #990d35;
  background-color: transparent;
  font-size: 0.9rem;
  font-family: inherit;
`;

const StyledBackButton = styled.button`
  position: fixed;
  bottom: 10px;
  left: 20px;
  background-color: transparent;
  border: none;
  font-size: 1rem;
  font-family: inherit;
`;
