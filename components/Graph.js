import LineChart from "./LineChart";
import 'boxicons';
export default function Graph({formData}) {

    const allResults = [
        70, 80, 70 ,70, 70, 70, 70 ,70, 70, 70, 70 ,70, 70, 70, 80, 30, 30, 30 , 30 , 30 , 30 , 20 , 40, 40, 40, 40, 50, 50, 50, 50,50, 50, 50, 50,  20, 72, 75, 50, 10, 60, 60, 60, 60, 60, 60, 60, 60, 20, 40, 20, 30,
      ];
    return (
    <div className =" p-3 flex flex-col border gap-3 rounded-lg w-full ">
        <div className="h-20 flex flex-row ">
            <div>
                <div className ="w-full px-3 text-sm font-bold"> Comparison Graph</div>
                <div className ="text-xs px-3 pt-3 text-gray-600"><span className="font-bold"> You scored {formData.percentile}% percentile</span> which is {formData.percentile == 72 ? " equal to" : formData.percentile > 72 ? " greater than" : " lower than"}  the average percentile 72% of all the engineers who took the test.</div>
            </div>
            <div className =" p-4">
                 <div className="h-8 w-8 lg:h-12 lg:w-12 bg-gray-100 border text-center flex justify-center items-center rounded-full"><box-icon name='line-chart' color='#2d7bb8' ></box-icon></div>
            </div>
            
        </div>
        <div className=" items-center flex justify-center ">
            <LineChart myScore={formData.percentile} othersScores={allResults} />
        </div>
    </div>
    );
  }