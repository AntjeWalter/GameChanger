import styled from "styled-components";

export default function Player({
  playerId,
  name,
  points,
  onAddPoints,
  onRemovePoints,
}) {
  return (
    <StyledPlayer>
      <StyledName>{name}</StyledName>
      <StyledPoints>
        {points === 1 ? `${points} Punkt` : `${points} Punkte`}{" "}
      </StyledPoints>
      <StyledButtons>
        <button
          aria-label="Remove one point"
          onClick={() => onRemovePoints(playerId)}
        >
          -
        </button>
        <StyledAddButton
          aria-label="Add one point"
          onClick={() => onAddPoints(playerId)}
        >
          +
        </StyledAddButton>
      </StyledButtons>
    </StyledPlayer>
  );
}

const StyledPlayer = styled.section`
  display: grid;
  grid-template-areas: "name name points buttons";
  grid-template-columns: 3fr 1fr 1fr;
  margin: 10px 0;
`;

const StyledName = styled.div`
  grid-area: "name";
`;

const StyledPoints = styled.div`
  grid-area: "points";
`;

const StyledButtons = styled.div`
  grid-area: "buttons";
  justify-self: right;
`;

const StyledAddButton = styled.button`
  background-color: green;
  color: white;
  margin-left: 2px;
`;
