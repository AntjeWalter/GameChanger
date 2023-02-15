import styled from "styled-components";

export default function ChosenContestant({
  contestantId,
  contestantName,
  contestantPoints,
  onDeleteChosenContestant,
  gameId,
  currentPlayerId,
}) {
  return (
    <StyledListItem>
      {contestantName}: {contestantPoints} points
      <StyledDeleteButton
        onClick={() =>
          onDeleteChosenContestant(contestantId, gameId, currentPlayerId)
        }
      >
        x
      </StyledDeleteButton>
    </StyledListItem>
  );
}

const StyledListItem = styled.li`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const StyledDeleteButton = styled.button`
  border: none;
  border-radius: 2px;
  background-color: #990d35;
  color: white;
`;
