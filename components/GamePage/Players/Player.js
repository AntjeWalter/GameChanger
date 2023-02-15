import styled from "styled-components";
import Link from "next/link";
import { SlArrowRight } from "react-icons/sl";

export default function Player({ playerId, name, points, gameId }) {
  return (
    <StyledPlayer>
      <StyledLink href={`/game/${gameId}/player/${playerId}`}>
        <SlArrowRight /> {name}
      </StyledLink>
      <StyledPoints>
        {points === 1
          ? `${points} Punkt`
          : points === ""
          ? `0 Punkte`
          : `${points} Punkte`}
      </StyledPoints>
    </StyledPlayer>
  );
}

const StyledPlayer = styled.section`
  display: grid;
  grid-template-areas: "name name points";
  grid-template-columns: 2fr 1fr;
  margin: 10px 0;
`;

const StyledLink = styled(Link)`
  grid-area: "name";
  text-decoration: none;
  color: black;
`;

const StyledPoints = styled.div`
  grid-area: "points";
`;
