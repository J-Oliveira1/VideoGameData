import { Chart } from "react-google-charts";
import React, { useState, useEffect } from "react";

const GameChart = ({ videoGames }) => {
  function generateDataFormChart() {
    console.log(videoGames)

    let filteredGames = videoGames.filter(game => game.year >= 2013);

    console.log('Filtered Games', filteredGames) 

    let platforms = filteredGames.map(game => {
        return game.platform
    });

    console.log('Platforms', platforms)
    
    let distinctPlatforms = [... new Set(platforms)]
    
    console.log('Distinct Platform', distinctPlatforms)

    let platformArrays = distinctPlatforms.map(platform => {

        let allGamesForPlatform = filteredGames.filter(game => game.platform === platform);
        let gameSales = 0;
        for (let i = 0; i < filteredGames.length; i++ ){
            if (filteredGames[i].platform === platform) {
            gameSales += filteredGames[i].globalsales}
           
        }

        return [platform, gameSales, "silver"]
    });

    console.log('Platform Arrays', platformArrays)

    const data = [
        ["Platform", "Global Sales", { role: "style" }],
        ...platformArrays
      ];

      console.log('Data', data)
      return data;
  }

  return (
    <div>
        <div>

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

// useEffect(() => {
//     let recentGames = games.filter(game => game.year > 2012);
//     // Returns 1067 rows
//     // console.log(recentGames);
//     let tempChartData = recentGames.map(game => {
//         return [game.platform, game.globalsales];
//     });
//     setChartData(tempChartData);
// }, [games])

// const [chartData, setChartData] = useState([]);

// <Chart
// chartType="ColumnChart"
// data={[["Platforms", "Global Sales"], ...chartData]}
// width="100%"
// height="400px"
// options={{legend: {position: 'top-right'}}}
// legendToggle
// />
