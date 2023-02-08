import styled from "styled-components";

export default function Rules({ onAddRules, rules }) {
  function handleSubmit(event) {
    event.preventDefault();
    const gameRules = event.target.rules.value;
    onAddRules(gameRules);
    event.target.reset();
  }

  return (
    <>
      <h3>Rules:</h3>
      <StyledRules>{rules}</StyledRules>
      <StyledForm onSubmit={handleSubmit}>
        <StyledTextarea
          placeholder="Rules for the game"
          name="rules"
          wrap="hard"
          cols="20"
        ></StyledTextarea>
        <StyledButton type="submit">Add notes</StyledButton>
      </StyledForm>
    </>
  );
}

const StyledRules = styled.p`
  white-space: pre-line;
`;

const StyledForm = styled.form`
  display: flex;
  justify-content: space-between;
`;

const StyledTextarea = styled.textarea`
  width: 70%;
`;

const StyledButton = styled.button`
  width: 25%;
`;
