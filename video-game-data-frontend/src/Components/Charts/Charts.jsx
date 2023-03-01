import GameChart from '../GameChart/GameChart.jsx'
import AnalysisChart from '../AnalysisChart/AnalysisChart.jsx'


const Charts = ({ videoGames }) => {
    return ( 
        <div>
            <GameChart videoGames={videoGames} />
            <AnalysisChart videoGames={videoGames} />
        </div>
     );
}
 
export default Charts;