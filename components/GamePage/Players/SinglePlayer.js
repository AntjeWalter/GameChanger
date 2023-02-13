import { useLocalStorage } from "../../../helpers/hooks";

export default function SinglePlayer({
  playerId,
  currentGame,
  currentPlayer,
  onAddChosenContestants,
}) {
  const [games, setGames] = useLocalStorage("games");

  const currentName = currentPlayer.name;
  const currentPoints = currentPlayer.points;
  const contestants = currentGame.contestants;
  const gameId = currentGame.id;
  const currentPlayersContestants = currentPlayer.chosenContestants;

  console.log("currentPlayersContestants", currentPlayersContestants);

  function handleChange(event) {
    event.preventDefault();
    const chosenName = event.target.value;
    onAddChosenContestants(chosenName, playerId, gameId);
  }

  return (
    <>
      <h3>Player: {currentName}</h3>
      <p>Total points: {currentPoints}</p>
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
          <li>{contestant}</li>
        ))}
      </ul>
    </>
  );
}
