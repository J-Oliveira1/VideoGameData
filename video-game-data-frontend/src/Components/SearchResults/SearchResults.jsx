import React from 'react';

const SearchResults = ({filteredResults}) => {
            <table className='table'>
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
                    {filteredResults.map((result) => {
                        return (
                            <tr>
                                <td>{result.id}</td>
                                <td>{result.game_rank}</td>
                                <td>{result.name}</td>
                                <td>{result.platform}</td>
                                <td>{result.year}</td>
                                <td>{result.genre}</td>
                                <td>{result.publisher}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
    }
 
export default SearchResults;