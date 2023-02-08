import { nanoid } from "nanoid";
import styled from "styled-components";

export default function PlayerForm({ onAddNewPlayer, gameId }) {
  function handlePlayerSubmit(event) {
    event.preventDefault();
    const player = event.target.player.value;
    const newPlayer = {
      name: player,
      points: 0,
      id: nanoid(),
    };
    onAddNewPlayer(newPlayer, gameId);
    event.target.reset();
  }

  return (
    <>
      <StyledForm onSubmit={handlePlayerSubmit}>
        <label>Add players:</label>
        <input placeholder="Player Name" name="player"></input>
        <button type="submit">+</button>
      </StyledForm>
      <hr />
    </>
  );
}

const StyledForm = styled.form`
  display: flex;
  justify-content: space-between;
  margin: 20px 0px;
`;
