import styled from "styled-components";

export default function Contestant({
  contestantId,
  name,
  points,
  onAddContestantPoints,
  onRemoveContestantPoints,
}) {
  return (
    <StyledContestant>
      <StyledName>{name}</StyledName>
      <StyledPoints>
        {points === 1 ? `${points} Punkt` : `${points} Punkte`}{" "}
      </StyledPoints>
      <StyledButtons>
        <button
          aria-label="Remove one point"
          onClick={() => onRemoveContestantPoints(contestantId)}
        >
          -
        </button>
        <StyledAddButton
          aria-label="Add one point"
          onClick={() => onAddContestantPoints(contestantId)}
        >
          +
        </StyledAddButton>
      </StyledButtons>
    </StyledContestant>
  );
}

const StyledContestant = styled.section`
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
