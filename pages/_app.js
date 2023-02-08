import GlobalStyles from "../components/GlobalStyles";
import { useLocalStorage } from "../helpers/hooks";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  const [games, setGames] = useLocalStorage("games", []);

  function handleCreateGame(newGame) {
    setGames([...games, newGame]);
  }

  function handleDeleteGame(id) {
    const updatedGames = games.filter((game) => {
      return game.id !== id;
    });
    setGames([...updatedGames]);
  }

  function handleAddNewPlayer(newPlayer, gameId) {
    setGames(
      games.map((game) =>
        game.id === gameId
          ? { ...game, players: [...game.players, newPlayer] }
          : game
      )
    );
  }

  function handleAddNewContestant(newContestant, gameId) {
    setGames(
      games.map((game) =>
        game.id === gameId
          ? { ...game, contestants: [...game.contestants, newContestant] }
          : game
      )
    );
  }

  return (
    <>
      <GlobalStyles />
      <Component
        {...pageProps}
        onCreateGame={handleCreateGame}
        onDelete={handleDeleteGame}
        onAddNewPlayer={handleAddNewPlayer}
        onAddNewContestant={handleAddNewContestant}
        games={games}
      />
    </>
  );
}

export default MyApp;
