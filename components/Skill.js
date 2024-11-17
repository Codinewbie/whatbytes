import Graph from "./Graph";
import HtmlBox from "./HtmlBox";
import QuickBox from "./QuickBox";

export default function Skill({formData,setFormData}) {
    return (
     <div className ="flex flex-col py-4 space-y-4 justify-center  " >
        <div className ="h-10 items-center  flex text-sm text-gray-600 font-bold">Skill Test</div>
        <HtmlBox formData={formData} setFormData={setFormData}/>
        <QuickBox formData={formData}/>
        <Graph formData={formData}/>
     </div>
    );
  }
  