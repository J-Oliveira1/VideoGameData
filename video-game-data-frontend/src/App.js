import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import GameChart from "./Components/GameChart/GameChart";
import AnalysisChart from "./Components/AnalysisChart/AnalysisChart";
import SearchBar from "./Components/SearchBar/SearchBar";

function App() {
  const [videoGames, setVideoGames] = useState([]);
  const [filteredGames, setFilteredGames] = useState([]);

  useEffect(() => {
    getAllGames();
  }, []);

  async function getAllGames() {
    let response = await axios.get("http://localhost:8080/all/");
    setVideoGames(response.data);
  }

  return (
    <div>
      <GameChart videoGames={videoGames} />
      <AnalysisChart videoGames={videoGames} />
      <SearchBar videoGames={videoGames} filteredGames={filteredGames} setFilteredGames={setFilteredGames}/>
    </div>
  );
}

export default App;
