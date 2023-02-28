import React, { useState } from "react";
import SearchResults from "../SearchResults/SearchResults";

const SearchBar = ({ videoGames, filteredGames, setFilteredGames }) => {
  const [searchName, setSearchName] = useState("");

  function handleSearch(event) {
    event.preventDefault();
    const filteredGames = videoGames.filter((game) =>
      game.name.includes(searchName)
    );
    setFilteredGames(filteredGames);
    console.log(filteredGames)
    setSearchName("")
  }

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="search"
          value={searchName}
          onChange={(event) => setSearchName(event.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <SearchResults filteredGames={filteredGames} />
    </div>
  );
};

export default SearchBar;
