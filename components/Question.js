import DoughnutChart from "./DoughnutChart";

export default function Question({formData}) {
    return (
    <div className =" p-5 rounded-lg  border" >
        
            <div className="flex  justify-between items-center">
                <div className ="text-sm  font-bold">Question Analysis</div>
                <div className="text-xs   text-blue-500 font-bold"> {formData.score}/15</div>
            </div> 
            <div className="text-gray-600 text-xs py-2">
                <span className="font-bold">You scored {formData.score} questions correct out of 15.</span>
                {formData.score <= 5 && " Keep practicing! Focus on areas that need improvement."}
                {formData.score >= 6 && formData.score <= 10 && " Good job! Keep up the effort to reach even higher."}
                {formData.score >= 11 && formData.score <= 14 && " Great work! Just a bit more effort to perfect your score."}
                {formData.score === 15 && " Excellent work! You aced the test!"}
            </div>
   
            <div className="flex items-center justify-center  mt-4 text-4xl">
                <DoughnutChart myScore={formData.score}/>
            </div>
        
        
     </div>
    );
  }
  