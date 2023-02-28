import React from "react";

const SearchResults = ({ filteredGames }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Id</th>
          <th>Game Rank</th>
          <th>Name</th>
          <th>Platform</th>
          <th>Year</th>
          <th>Genre</th>
          <th>Publisher</th>
        </tr>
      </thead>
      <tbody>
        {filteredGames.map((game) => {
          return (
            <tr key={game.id}>
              <td>{game.id}</td>
              <td>{game.game_rank}</td>
              <td>{game.name}</td>
              <td>{game.platform}</td>
              <td>{game.year}</td>
              <td>{game.genre}</td>
              <td>{game.publisher}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default SearchResults;
