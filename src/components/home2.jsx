// import React from "react";
// import MenuCard from "./menuCard";

// const Home2=()=>{
//     return(
//         <div className=" h-200 bg-white"> 
//            <div className="flex justify-center w-full ">
//              <h4 className="text-pink-700 pt-25">OUR PRODUCTS</h4>
//            </div>
//            <div className="flex justify-center w-full ">
//              <h1 className="text-pink-700 text-center font-bold text-4xl pt-5">REAL ICECREAM FOR REAL<br/> PEOPLE !</h1>
//            </div>
//            <div className="flex w-auto h-50 pt-5">
//             <MenuCard/>
//            </div>


          

//         </div>
//     )
// }
// export default Home2
import React from "react";
import MenuCard from "./menuCard";

const Home2 = () => {
  return (
    <div className="min-h-screen bg-white px-4 sm:px-6 lg:px-0">
      
      {/* Heading */}
      <div className="flex justify-center w-full">
        <h4 className="text-pink-700 pt-16 sm:pt-20 md:pt-24 lg:pt-25 text-sm sm:text-base">
          OUR PRODUCTS
        </h4>
      </div>

      {/* Main Title */}
      <div className="flex justify-center w-full">
        <h1 className="text-pink-700 text-center font-bold 
                       text-2xl sm:text-3xl md:text-4xl lg:text-4xl 
                       pt-4 sm:pt-5 leading-snug">
          REAL ICECREAM FOR REAL <br className="hidden sm:block"/> PEOPLE !
        </h1>
      </div>

      {/* Cards Section */}
      <div className="flex flex-col sm:flex-row 
                      items-center justify-center 
                      gap-4 sm:gap-6 
                      w-full pt-6 sm:pt-5">
        <MenuCard />
      </div>

    </div>
  );
};

export default Home2;