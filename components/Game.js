import styled from "styled-components";

export default function Game({ name, id, onDelete }) {
  return (
    <StyledGameContainer>
      <StyledGame>{name}</StyledGame>
      <StyledButton onClick={() => onDelete(id)}>Delete</StyledButton>
    </StyledGameContainer>
  );
}

const StyledGameContainer = styled.section`
  position: relative;
  margin-bottom: 20px;
`;

const StyledGame = styled.h2`
  display: block;
  font-size: 1.2rem;
  border: 1px solid black;
  border-radius: 5px;
  padding: 5px;
  margin-bottom: 0;
`;

const StyledButton = styled.button`
  background-color: red;
  border-radius: 5px;
  color: white;
`;
