import React, { useState } from 'react';
import SearchResults from '../SearchResults/SearchResults';


const SearchBar = ({ videoGames, filteredGames, setFilteredGames }) => {

    const [searchName, setSearchName] = useState('');


    function handleSearch(event){
        event.preventDefault();
        setFilteredGames(videoGames.filter(game => game.name.includes(searchName)));
        displayFilteredGames();
    }

    function displayFilteredGames(){
        console.log(filteredGames)
        return(
            <SearchResults filteredGames={filteredGames}/>
        )
    }

    return ( 
        <form onSubmit={handleSearch}>
            <input type='search' value={searchName} onChange={(event) => setSearchName(event.target.value)}/>
            <button type='submit'>Search</button>
        </form>
     );
}
 
export default SearchBar;