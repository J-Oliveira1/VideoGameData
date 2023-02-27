import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

import GameChart from "./Components/GameChart/GameChart";

function App() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    getAllGames();
  }, []);

  async function getAllGames() {
    let response = await axios.get("http://localhost:8080/all/");
    setGames(response.data);
    console.log(response.data);
  }
  return (
    <div className="col-md-6" >
      <div>
        <GameChart games={games} />
      </div>
    </div>
  );
}

export default App;
