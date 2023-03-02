import { Chart } from "react-google-charts";

const BonusChart = ({ videoGames }) => {

    // Get Platform Array
    let distinctPlatforms = videoGames.map(game => {
        return game.platform
    });
    distinctPlatforms = [...new Set(distinctPlatforms)]
    
    let platformArrays = distinctPlatforms.map(platform => {
        let gameSales = 0;
        for (let i = 0; i < videoGames.length; i++ ){
            if (videoGames[i].platform === platform){
                gameSales += videoGames[i].globalsales
            }
        }
        return [platform, gameSales]
    });


    // Get Publisher Array
    let distinctPublishers = videoGames.map(game=>{
        return game.publisher
    })
    distinctPublishers = [...new Set(distinctPublishers)]

    // Map over each platform to return only one top publisher per platform
    let topPublishersArray = distinctPlatforms.map(platform => {
        // Will assign highest seling publisher for platform
        let topPublisher = null;
        // Will be used to compare publisher sales
        let highestSales = 0;

        // Loop through each publisher
        for (let i = 0; i < distinctPublishers.length; i++){
            
            let publisherPlatformSales = 0;
            let publisherGames = videoGames.filter(game => { return game.publisher === distinctPublishers[i]});

            // Loop through each game of current publisher
            for (let i = 0; i < publisherGames.length; i++){
                if (publisherGames[i].platform === platform){
                    // Add game's sales if platform matches
                    publisherPlatformSales += publisherGames[i].globalsales
                }
            }

            if (publisherPlatformSales > highestSales){
                highestSales = publisherPlatformSales;
                topPublisher = distinctPublishers[i];
            }
        }
        return [topPublisher, highestSales]
    });



    const platformTotalSales = [
        ["Platform", "Global Sales"],
        ...platformArrays
      ];

    const publisherTotalSales = [
        ["Publisher", "Global Sales"],
        ...topPublishersArray,
    ]

    const diffdata = {
        old: platformTotalSales,
        new: publisherTotalSales,
    };

    const options = {
        legend: { position: "top" },
    };

  return (
    <Chart
      chartType="BarChart"
      width="100%"
      height="400px"
      diffdata={diffdata}
      options={options}
    />
  );
};

export default BonusChart;