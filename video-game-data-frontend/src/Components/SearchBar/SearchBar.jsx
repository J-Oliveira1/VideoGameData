import React, { useState } from 'react';
import SearchResults from '../SearchResults/SearchResults';


const SearchBar = ({getAllGames, videoGames}) => {

    const [searchName, setSearchName] = useState('');


    function handleSearch(event){
        event.preventDefault();
        let filteredGames = videoGames.filter(game => game.name.includes(searchName));
        return (
            <SearchResults filteredGames={filteredGames}/>
        );
    }

    return ( 
        <form onSubmit={handleSearch}>
            <input type='search' value={searchName} onChange={(event) => setSearchName(event.target.value)}/>
            <button type='submit'>Search</button>
        </form>
     );
}
 
export default SearchBar;