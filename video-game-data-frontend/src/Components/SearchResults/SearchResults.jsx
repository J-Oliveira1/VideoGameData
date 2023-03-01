import React from "react";
import GameDetails from "../GameDetails/GameDetails";

const SearchResults = ({ filteredGames, selectedGame, setSelectedGame }) => {
  function handleGameCLick(game) {
    setSelectedGame(game);
  }
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>Game Title</th>
          </tr>
        </thead>
        <tbody>
          {filteredGames.map((game) => {
            return (
              <div>
                <tr key={game.id}>
                  <td>{game.name}</td>
                  <td>
                    <button onClick={() => handleGameCLick(game)}>
                      See Details
                    </button>
                  </td>
                </tr>
                <div>
                  <GameDetails selectedGame={selectedGame} game={game}/>
                </div>
              </div>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default SearchResults;
