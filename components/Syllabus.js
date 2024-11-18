
export default function Syllabus() {
    return (
     <div className ="flex rounded-lg  border" >
        <div className=" p-6 gap-2 flex w-full flex-col">
            <div className =" pb-3 items-center flex w-full rounded-lg font-bold text-sm"> Syllabus Wise Analysis</div>
            <div className ="h-15  py-3 justify-center flex-col flex w-full rounded-lg">
                <div className="text-xs mb-3 font-semibold text-gray-600"> HTML Tools, Forms, History</div>
                <div className="w-full grid grid-cols-6 items-center flex justify-between">
                    <div className="bg-blue-100 col-span-5  rounded-full h-2">
                        <div className="bg-blue-500 h-2 rounded-full " style={{ width: '80%' }} ></div>
                    </div>
                    <div className="col-span-1 text-xs text-right font-bold text-blue-600">80%</div>
                </div>
            </div>

            <div className ="h-15  py-3  justify-center flex-col flex w-full rounded-lg">
                <div className="text-xs mb-3 font-semibold text-gray-600"> Tags & References in HTML</div>
                <div className="w-full grid grid-cols-6 items-center ">
                    <div className="bg-orange-100 col-span-5 rounded-full h-2">
                        <div className="bg-orange-500 h-2 rounded-full " style={{ width: '60%' }} ></div>
                    </div>
                    <div className="col-span-1 text-xs text-right font-bold text-orange-500">60%</div>
                </div>
            </div>

            <div className ="h-15 py-3  justify-center flex-col flex w-full rounded-lg">
                <div className="text-xs mb-3 font-semibold text-gray-600"> Tables & References in HTML</div>
                <div className="w-full grid grid-cols-6 items-center ">
                    <div className="bg-red-100 col-span-5 rounded-full h-2">
                        <div className="bg-red-500 h-2 rounded-full " style={{ width: '24%' }} ></div>
                    </div>
                    <div className="col-span-1 text-xs text-right font-bold text-red-500">24%</div>
                </div>
            </div>

            <div className ="h-15 py-3   justify-center flex-col flex w-full rounded-lg">
                <div className="text-xs mb-3 font-semibold text-gray-600">Tables and CSS Basics</div>
                <div className="w-full grid grid-cols-6 items-center ">
                    <div className="bg-green-100 col-span-5 rounded-full h-2">
                        <div className="bg-green-500 h-2 rounded-full " style={{ width: '96%' }} ></div>
                    </div>
                    <div className="col-span-1 text-xs text-right  font-bold text-green-500">96%</div>
                </div>
            </div>
            
        </div>
        
     </div>
    );
  }
  