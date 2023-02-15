import { Fragment, useEffect } from "react";
import { useLocalStorage } from "../../../helpers/hooks";
import ChosenContestant from "./ChosenContestants";

export default function SinglePlayer({
  playerId,
  currentGame,
  currentPlayer,
  onAddChosenContestants,
  onDeleteChosenContestant,
  sumOfChosenContestantsPoints,
}) {
  const currentName = currentPlayer.name;
  const contestants = currentGame.contestants;
  const gameId = currentGame.id;
  const currentPlayersContestants = currentPlayer.chosenContestants;

  function handleChange(event) {
    event.preventDefault();
    const chosenName = event.target.value;
    onAddChosenContestants(chosenName, playerId, gameId, contestants);
  }

  return (
    <>
      <h3>Player: {currentName}</h3>
      <p>Total points: {sumOfChosenContestantsPoints}</p>
      <br />
      <h4>Chosen Contestants:</h4>
      <select onChange={handleChange}>
        <option value="selected">Which contestant do you bet on?</option>
        {contestants.map((contestant) => (
          <option key={contestant.id}>{contestant.name}</option>
        ))}
      </select>
      <ul>
        {currentPlayersContestants.map((contestant) => (
          <Fragment key={contestant.id}>
            <ChosenContestant
              contestantId={contestant.id}
              contestantName={contestant.name}
              contestantPoints={contestant.points}
              onDeleteChosenContestant={onDeleteChosenContestant}
              gameId={currentGame.id}
              currentPlayerId={currentPlayer.id}
            />
          </Fragment>
        ))}
      </ul>
    </>
  );
}
