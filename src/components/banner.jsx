// import React from "react";

// const Banner=()=>{
//     return (
//         <div className="flex h-[500px] bg-white  w-screen  justify-center items-center">
//             <div className="flex pt-15 h-[300px] w-[80%] rounded-4xl bg-black bg-no-repeat bg-cover flex-col text-center " style={{backgroundImage:"url('/banner.jpeg')"}}>
//                   <h2 className="font-semibold ">SPECIAL DISCOUNT</h2>
//                   <h1 className="font-bold pt-8 text-red-800 text-2xl">GET SPECIAL FESTIVAL<br/> DISCOUNT!</h1>
                  
//                   <div className="flex justify-center gap-4 pt-6">
//                       <button className="border-black text-sm bg-pink-700 text-white px-6 py-3 rounded-3xl">
//                            Our Products
//                       </button>
//                      <button className="border-black text-sm bg-pink-700 text-white px-6 py-3 rounded-3xl">
//                           Contact Us
//                      </button>
//                   </div>
                
//             </div>
            
                
            

//         </div>
//     )
// }
// export default Banner

import React from "react";

const Banner = () => {
  return (
    <div className="flex h-[500px] max-sm:h-auto max-sm:py-6
                    bg-white w-screen justify-center items-center">
      <div
        className="flex pt-15 max-sm:pt-6 h-[300px] max-sm:h-auto max-sm:pb-7
                   w-[80%] max-sm:w-[90%] rounded-4xl max-sm:rounded-[20px]
                   bg-black bg-no-repeat bg-cover
                   flex-col text-center px-4"
        style={{ backgroundImage: "url('/banner.jpeg')" }}
      >
        <h2 className="font-semibold">SPECIAL DISCOUNT</h2>
        <h1 className="font-bold pt-8 max-sm:pt-4 text-red-800
                       text-2xl max-sm:text-lg">
          GET SPECIAL FESTIVAL<br />DISCOUNT!
        </h1>

        <div className="flex max-sm:flex-col max-sm:items-center
                        justify-center gap-4 pt-6 max-sm:pt-4">
          <button className="border-black text-sm bg-pink-700 text-white
                             px-6 py-3 rounded-3xl max-sm:w-[70%]">
            Our Products
          </button>
          <button className="border-black text-sm bg-pink-700 text-white
                             px-6 py-3 rounded-3xl max-sm:w-[70%]">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;