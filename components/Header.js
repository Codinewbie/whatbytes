
export default function Header() {
    return (
     <div className ="flex items-center justify-between border-b" >
        <div className = "p-4 text-xl font-bold"> WhatBytes</div>
        <div className ="border flex start justify-center items-center rounded-md border-md border-2 space-x-2 m-3 p-1">
            <div className="bg-blue-400 rounded-full w-6 h-6 flex items-center justify-center text-white text-xs"> AK</div>
            <div className = " flex text-sm font-bold items-center justify-center mb-1"> Aman Kumar</div>
        </div>
     </div>
    );
  }
  