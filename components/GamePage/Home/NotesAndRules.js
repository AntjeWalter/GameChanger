import Notes from "./Notes";
import Rules from "./Rules";

export default function NotesAndRules({
  onAddNotes,
  onAddRules,
  gameId,
  notes,
  rules,
}) {
  return (
    <>
      <Notes gameId={gameId} onAddNotes={onAddNotes} notes={notes} />
      <hr />
      <Rules onAddRules={onAddRules} rules={rules} />
    </>
  );
}
