import { nanoid } from "nanoid";
import styled from "styled-components";

export default function CreateGame({ onCreateGame }) {
  function handleSubmit(event) {
    event.preventDefault();
    const gameName = event.target.game.value;
    const newGame = {
      id: nanoid(),
      name: gameName,
    };
    onCreateGame(newGame);
    event.target.reset();
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledLabel>Create Game:</StyledLabel>
      <StyledInput
        placeholder="What's the name of the game?"
        name="game"
      ></StyledInput>
      <StyledButton type="submit">Submit</StyledButton>
    </StyledForm>
  );
}

const StyledForm = styled.form`
  text-align: center;
`;

const StyledLabel = styled.label`
  display: block;
  margin-bottom: 5px;
  font-size: 1.2rem;
`;

const StyledInput = styled.input`
  display: block;
  width: 200px;
  margin-bottom: 5px;
  margin: auto;
  text-align: center;
`;

const StyledButton = styled.button`
  background-color: green;
  border-radius: 5px;
  padding: 4px;
  margin-top: 10px;
  color: white;
`;
