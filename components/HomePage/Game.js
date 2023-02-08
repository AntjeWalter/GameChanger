import styled from "styled-components";
import Link from "next/link";

export default function Game({ name, id, onDelete }) {
  return (
    <StyledGameContainer>
      <StyledLink href={`/${id}`}>
        <StyledGame>🎲 {name}</StyledGame>
      </StyledLink>
      <StyledButton onClick={() => onDelete(id)}>Delete Game</StyledButton>
    </StyledGameContainer>
  );
}

const StyledGameContainer = styled.section`
  position: relative;
  margin: 30px 0px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

const StyledGame = styled.h2`
  display: block;
  font-size: 1.2rem;
  border: 1px solid black;
  border-radius: 5px;
  padding: 5px;
  margin-bottom: 0;
  background-color: #ffffff;
`;

const StyledButton = styled.button`
  background-color: #d52941;
  border-radius: 5px;
  color: white;
`;
