import { useLocalStorage } from "../../../helpers/hooks";

export default function ChosenContestant({
  contestantId,
  contestantName,
  contestantPoints,
  onDeleteChosenContestant,
  gameId,
  currentPlayerId,
}) {
  return (
    <li>
      {contestantName}: {contestantPoints} points
      <button
        onClick={() =>
          onDeleteChosenContestant(contestantId, gameId, currentPlayerId)
        }
      >
        x
      </button>
    </li>
  );
}
