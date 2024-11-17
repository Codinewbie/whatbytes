import Header from "@/components/Header";
import Question from "@/components/Question";
import Sidebar from "@/components/Sidebar";
import Skill from "@/components/Skill";
import Syllabus from "@/components/Syllabus";
import Image from "next/image";

export default function Home() {
  
  return (
   <div>
     <Header/>
     <div id="1" className = "grid lg:grid-cols-9 grid-cols-6 gap-8">
      <div className = "col-span-2 lg:col-span-2 h-full border-r-2"> 
        <Sidebar/>
      </div>
      <div className ="lg:col-span-7 col-span-4 grid grid-cols-7 gap-4">
        <div id="2"className = "lg:col-span-4 col-span-7  min-h-screen ">
          <Skill/>
        </div>
        <div id = "3"className = "lg:col-span-3 col-span-7  flex flex-col  py-4 space-y-4 min-h-screen">
          <div className ="lg:h-10 h-0"></div>
          <Syllabus/>
          <Question/>
        </div>
      </div>
     </div>
   </div>
  );
}
