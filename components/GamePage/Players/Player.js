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
        <StyledRemoveButton
          aria-label="Remove one point"
          onClick={() => onRemovePoints(playerId)}
        >
          -
        </StyledRemoveButton>
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
  grid-template-columns: 2fr 1fr 1fr;
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

const StyledRemoveButton = styled.button`
  border: none;
  border-radius: 2px;
  background-color: #990d35;
  color: white;
`;

const StyledAddButton = styled.button`
  background-color: #0d9971;
  border: none;
  border-radius: 2px;
  color: white;
  margin-left: 2px;
`;
