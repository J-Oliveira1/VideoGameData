import React, { useEffect, useState } from "react";
import SearchResults from "../SearchResults/SearchResults";
import Button from 'react-bootstrap/Button';
import "../SearchBar/SearchBar.css"

const SearchBar = ({ videoGames }) => {
  const [searchName, setSearchName] = useState("");
  const [selectedGame, setSelectedGame] = useState(null);
  const [filteredGames, setFilteredGames] = useState([]);

  useEffect(() => {
    setFilteredGames([]);
  }, []);

  function handleSearch(event) {
    event.preventDefault();
    const filteredGames = videoGames.filter((game) =>
      game.name.includes(searchName)
    );
    setFilteredGames(filteredGames);
    console.log(filteredGames)
    setSearchName("")
    setSelectedGame(null)
  }

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="search"
          value={searchName}
          onChange={(event) => setSearchName(event.target.value)}
        />
        <Button variant="outline-dark" size="sm" type="submit">Search</Button>
      </form>
      <SearchResults filteredGames={filteredGames} selectedGame={selectedGame} setSelectedGame={setSelectedGame} />
    </div>
  );
};

export default SearchBar;
