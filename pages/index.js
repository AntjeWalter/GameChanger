import { Fragment, useState } from "react";
import CreateGame from "../components/CreateGame";
import Game from "../components/Game";

export default function Home() {
  const [games, setGames] = useState([]);

  function handleCreateGame(newGame) {
    setGames([...games, newGame]);
  }

  function handleDeleteGame(id) {
    const updatedGames = games.filter((game) => {
      return game.id !== id;
    });
    setGames([...updatedGames]);
  }

  console.log("games", games);

  return (
    <>
      <h1>GameChanger 🎲</h1>
      <CreateGame onCreateGame={handleCreateGame} />
      {games.map((game) => (
        <Fragment key={game.id}>
          <Game name={game.name} onDelete={handleDeleteGame} id={game.id} />
        </Fragment>
      ))}
    </>
  );
}
