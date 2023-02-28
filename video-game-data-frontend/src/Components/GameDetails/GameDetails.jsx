const GameDetails = ({selectedGame, game}) => {
    if (selectedGame === game) {
        return (
            <div>
      {selectedGame && (
          <div>
          <h3>Game Info</h3>
          <p> Id: {selectedGame.id}</p>
          <p> Game Rank: {selectedGame.game_rank}</p>
          <p> Name: {selectedGame.name}</p>
          <p> Platform: {selectedGame.platform}</p>
          <p> Year: {selectedGame.year}</p>
          <p> Genre: {selectedGame.genre}</p>
          <p> Publisher: {selectedGame.publisher}</p>
        </div>
      )}
    </div>
  );
}
};

export default GameDetails;
