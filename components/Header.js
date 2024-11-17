
import Image from 'next/image'; 

export default function Header() {
    return (
     <div className ="flex items-center justify-between border-b" >

        <div className =" flex start justify-center items-center  space-x-2 m-3 p-1">
        <Image
          src="/images/logo.png" // Path relative to the public folder
          alt="WhatBytes Logo"
          width={35}
          height={35} // Adjust size as needed
        />
            <div className = "text-2xl flex items-center justify-center mb-1 font-bold"> WhatBytes</div>
        </div>
        
        <div className="border flex justify-start items-center rounded-md px-2 border-2 space-x-2 m-3 p-1">
            <div className="h-8 w-8 bg-gray-100 border z-20 text-center flex justify-center  items-center rounded-full overflow-hidden">
                <Image
                    src="/images/aman2.jpg" // Path relative to the public folder
                    alt="aman image"
                    width={40}
                    height={40}
                    className="object-cover rounded-full"
                />
            </div>
            <div className="flex text-sm font-bold items-center justify-center mb-1">Aman Kumar</div>
        </div>

     </div>
    );
  }
  