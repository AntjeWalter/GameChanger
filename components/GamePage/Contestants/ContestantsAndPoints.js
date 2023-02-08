import { Fragment } from "react";
import Contestant from "./Contestant";

export default function PlayersAndPoints({
  contestantsArray,
  onAddContestantPoints,
  onRemoveContestantPoints,
}) {
  return contestantsArray.map((contestant) => {
    return (
      <Fragment key={contestant.id}>
        <Contestant
          contestantId={contestant.id}
          name={contestant.name}
          points={contestant.points}
          onAddContestantPoints={onAddContestantPoints}
          onRemoveContestantPoints={onRemoveContestantPoints}
        />
      </Fragment>
    );
  });
}
