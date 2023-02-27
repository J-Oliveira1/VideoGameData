import { Chart } from "react-google-charts"
import React, { useState, useEffect } from 'react';


const GameChart = ({games}) => {

    const [chartData, setChartData] = useState([]);


    // .filter(game -> game.year > 2012)


    useEffect(() => {
        let recentGames = games.filter(game => game.year > 2012);
        // Returns 1067 rows
        // console.log(recentGames);
        let tempChartData = recentGames.map(game => {
            return [game.platform, game.globalsales];
        });
        setChartData(tempChartData);
    }, [games]) 

    return ( 
        <Chart
        chartType="ColumnChart"
        data={[["Platforms", "Globalsales"], ...chartData]}
        width="100%"
        height="400px"
        options={{legend: {position: 'bottom'}}}
        legendToggle
        />
     );
}
 
export default GameChart;