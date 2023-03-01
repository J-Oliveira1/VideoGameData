import { Chart } from "react-google-charts";
import React, { useState, useEffect } from "react";

const GameChart = ({ videoGames }) => {
  function generateDataFormChart() {

    let filteredGames = videoGames.filter(game => game.year >= 2013);


    let platforms = filteredGames.map(game => {
        return game.platform
    });

    
    let distinctPlatforms = [... new Set(platforms)]
    

    let platformArrays = distinctPlatforms.map(platform => {

        let allGamesForPlatform = filteredGames.filter(game => game.platform === platform);
        let gameSales = 0;
        for (let i = 0; i < filteredGames.length; i++ ){
            if (filteredGames[i].platform === platform) {
            gameSales += filteredGames[i].globalsales}
           
        }

        return [platform, gameSales, "blue"]
    });


    const data = [
        ["Platform", "Global Sales", { role: "style" }],
        ...platformArrays
      ];

      return data;
  }

  return (
    <div>
        <div>
          <h3>Platform by Global Sales in Millions</h3>
      <Chart
        chartType="ColumnChart"
        width="100%"
        height="400px"
        data={generateDataFormChart()}
        />
        </div>
    </div>
  );
};

export default GameChart;

