import 'boxicons';
export default function QuickBox({formData}) {
    return (
    <div className =" p-3 border rounded-lg w-full ">
        <div className ="w-full px-3 text-sm font-bold"> Quick Statistics</div>
        <div className =" flex flex-row  justify-around px-4  ">
            <div className=" py-3 flex justify-center items-center px-4 ">
            <div className="h-4 w-4 md:h-8 md:w-8 lg:h-12 lg:w-12 bg-gray-100 border text-center flex justify-center items-center rounded-full"><box-icon name='trophy' type='solid' color='#ffcb00' ></box-icon></div>
                <div className = "flex flex-col ml-3 " >
                    <div className ="lg:text-lg text-[10px] font-bold"> {formData.rank}</div>
                    <div className = "lg:text-[10px] text-[8px] xl:text-[11px] 2xl:text[12px]  text-gray-500 font-medium">YOUR RANK</div>
                </div>
            </div>
            
            <div className=" py-3 flex justify-center items-center px-4 border-x">
            <div className="h-4 w-4 md:h-8 md:w-8 lg:h-12 lg:w-12 bg-gray-100 border text-center flex justify-center items-center rounded-full"><box-icon name='book-content' type='solid' color='#7c4e25' ></box-icon></div>
                <div className = "flex flex-col ml-3 " >
                    <div className ="lg:text-lg text-[10px] font-bold"> {formData.percentile}%</div>
                    <div className = "lg:text-[10px] text-[8px] xl:text-[11px] 2xl:text[12px]  text-gray-500 font-medium">PERCENTILE</div>
                </div>
            </div>
            

            <div className=" py-3 flex justify-center items-center px-4 ">
                <div className="h-4 w-4 md:h-8 md:w-8 lg:h-12 lg:w-12 bg-gray-100 border text-center flex justify-center items-center rounded-full"><box-icon name='check-square' type='solid' color='#0ab125' className="h-8 w-8" ></box-icon></div>
                <div className = "flex flex-col ml-3 " >
                    <div className ="lg:text-lg text-[10px] font-bold"> {formData.score} / 15</div>
                    <div className = "lg:text-[10px] text-[8px] xl:text-[11px] 2xl:text[12px] text-gray-500 font-medium">CORRECT ANSWERS</div>
                </div>
            </div>
        </div>            
    </div>
    );
  }
  