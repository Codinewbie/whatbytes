
export default function Question() {
    return (
    <div className =" p-1 rounded-lg h-96 border" >
        <div className="p-5 h-80">
            <div className="flex py-1 justify-between items-center">
                <div className ="text-sm  font-bold">Question Analysis</div>
                <div className="text-xs   text-blue-500 font-bold"> 10/15</div>
            </div> 
            <div className = "text-gray-600 text-xs py-2"> <span className="font-bold">You scored 10 questions correct out of 15.</span> However it still needs some improvements</div>     
            <div className="flex items-center justify-center border text-4xl h-full"> graph </div>
        </div>
        
     </div>
    );
  }
  