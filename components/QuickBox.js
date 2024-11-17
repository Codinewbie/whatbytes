
export default function QuickBox() {
    return (
    <div className =" p-3 border rounded-lg w-full ">
        <div className ="w-full px-3 text-sm font-bold"> Quick Statistics</div>
        <div className =" flex flex-row  justify-around px-4  ">
            <div className=" py-3 flex justify-center items-center px-4 ">
                <div className="h-8 w-8   lg:h-12 lg:w-12 bg-gray-200 rounded-full"></div>
                <div className = "flex flex-col ml-3 " >
                    <div className ="lg:text-md text-[10px] font-bold"> 1</div>
                    <div className = "lg:text-[10px] text-[8px] xl:text-[11px] 2xl:text[12px]  text-gray-500 font-medium">YOUR RANK</div>
                </div>
            </div>

            <div className=" py-3 flex justify-center items-center px-4 md:px-7 border-x">
                <div className="h-8 w-8   lg:h-12 lg:w-12 bg-gray-200 rounded-full"></div>
                <div className = "flex flex-col ml-3 " >
                    <div className ="lg:text-md text-[10px] font-bold"> 30%</div>
                    <div className = "lg:text-[10px] text-[8px] xl:text-[11px] 2xl:text[12px]  text-gray-500 font-medium">PERCENTILE</div>
                </div>
            </div>

            <div className=" py-3 flex justify-center items-center px-4 ">
                <div className="h-8 w-8 lg:h-12 lg:w-12 bg-gray-200 rounded-full"></div>
                <div className = "flex flex-col ml-3 " >
                    <div className ="lg:text-md text-[10px] font-bold"> 10/11</div>
                    <div className = "lg:text-[10px] text-[8px] xl:text-[11px] 2xl:text[12px] text-gray-500 font-medium">CORRECT ANSWERS</div>
                </div>
            </div>
        </div>            
    </div>
    );
  }
  