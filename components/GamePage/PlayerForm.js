import { nanoid } from "nanoid";

export default function PlayerForm({ onAddNewPlayer, gameId }) {
  function handlePlayerSubmit(event) {
    event.preventDefault();
    const player = event.target.player.value;
    const newPlayer = {
      name: player,
      id: nanoid(),
    };
    onAddNewPlayer(newPlayer, gameId);
  }

  return (
    <form onSubmit={handlePlayerSubmit}>
      <label>Add players:</label>
      <input placeholder="Player Name" name="player"></input>
      <button type="submit">+</button>
    </form>
  );
}
