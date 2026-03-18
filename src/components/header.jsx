import React from "react";


const Header=()=>{
    return(
         <div className="relative h-64 w-screen overflow-hidden flex items-center justify-center">

            <video autoPlay loop muted playsInline 
             className="absolute inset-0 w-full h-full object-cover object-center object-[center_-50px]  " >
             <source src="/bg.mp4" type="video/mp4" /> 
             </video>

            <div className="absolute inset-0 bg-black/30"></div>
              
            <div className="relative z-10 text-white text-xl"> Your Content Here </div> 
             
        </div>
       
    





    )

}
export default Header