import styled from "styled-components";

export default function Notes({ onAddNotes, notes }) {
  function handleSubmit(event) {
    event.preventDefault();
    const gameNotes = event.target.notes.value;
    onAddNotes(gameNotes);
    event.target.reset();
  }

  return (
    <>
      <h3>Notes:</h3>
      <p>{notes}</p>
      <StyledForm onSubmit={handleSubmit}>
        <StyledTextarea
          placeholder="Notes for the game"
          name="notes"
        ></StyledTextarea>
        <StyledButton type="submit">Add notes</StyledButton>
      </StyledForm>
    </>
  );
}

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
