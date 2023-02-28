import React, { useState } from "react";
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
              <tr key={game.id}>
                <td>{game.name}</td>
                <td>
                  <button onClick={() => handleGameCLick(game)}>
                    See Details
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <GameDetails selectedGame={selectedGame} />
    </div>
  );
};
export default SearchResults;
