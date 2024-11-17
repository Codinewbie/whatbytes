
export default function Graph() {
    return (
    <div className =" p-3 flex flex-col border gap-3 rounded-lg w-full ">
        <div className="h-20 flex flex-row ">
            <div>
                <div className ="w-full px-3 text-sm font-bold"> Comparison Graph</div>
                <div className ="text-xs px-3 pt-3 text-gray-600"><span className="font-bold"> You scored 30% percentile</span> which is lower than the average percentile 72% of all the engineers who took the test.</div>
            </div>
            <div className =" p-4">
                <div className="lg:h-12 lg:w-12 h-8 w-8 bg-gray-200 rounded-full"></div>
            </div>
        </div>
        <div className="h-40 items-center flex justify-center text-4xl border"> Graph</div>
    </div>
    );
  }
  