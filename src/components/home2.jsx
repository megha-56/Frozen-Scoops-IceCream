import React from "react";
import MenuCard from "./menuCard";

const Home2=()=>{
    return(
        <div className=" h-200 bg-white"> 
           <div className="flex justify-center w-full ">
             <h4 className="text-pink-700 pt-25">OUR PRODUCTS</h4>
           </div>
           <div className="flex justify-center w-full ">
             <h1 className="text-pink-700 text-center font-bold text-4xl pt-5">REAL ICECREAM FOR REAL<br/> PEOPLE !</h1>
           </div>
           <div className="flex w-auto h-50 pt-5">
            <MenuCard/>
           </div>


          

        </div>
    )
}
export default Home2