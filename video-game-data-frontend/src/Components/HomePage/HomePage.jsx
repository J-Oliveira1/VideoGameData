
const HomePage = ({ videoGames }) => {
    return ( 
        <table>
            <thead>
                <th>Name</th>
                <th>Genre</th>
            </thead>
            <tbody>
            {videoGames.map((game) => {
            return (
                <tr key={game.id}>
                  <td>{game.name}</td>
                  <td>{game.genre}</td>
                </tr>
            );
          })}
            </tbody>
        </table>
     );
}
 
export default HomePage;