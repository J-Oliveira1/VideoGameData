import { Chart } from "react-google-charts"
import React, { useState, useEffect } from 'react';


const GameChart = ({games}) => {

    const [chartData, setChartData] = useState([]);

    useEffect(() => {
        let tempChartData = games.map(game => {
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