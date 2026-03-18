import React from "react";

const Banner=()=>{
    return (
        <div className="flex h-[500px] bg-white  w-screen  justify-center items-center">
            <div className="flex pt-15 h-[300px] w-[80%] rounded-4xl bg-black bg-no-repeat bg-cover flex-col text-center " style={{backgroundImage:"url('/banner.jpeg')"}}>
                  <h2 className="font-semibold ">SPECIAL DISCOUNT</h2>
                  <h1 className="font-bold pt-8 text-red-800 text-2xl">GET SPECIAL FESTIVAL<br/> DISCOUNT!</h1>
                  
                  <div className="flex justify-center gap-4 pt-6">
                      <button className="border-black text-sm bg-pink-700 text-white px-6 py-3 rounded-3xl">
                           Our Products
                      </button>
                     <button className="border-black text-sm bg-pink-700 text-white px-6 py-3 rounded-3xl">
                          Contact Us
                     </button>
                  </div>
                
            </div>
            
                
            

        </div>
    )
}
export default Banner

