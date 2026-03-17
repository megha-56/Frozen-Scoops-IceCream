import React from "react";


const MenuCard=()=>{
    return(

        <div className="h-[600px] w-screen bg-white flex justify-center gap-25">


        <div className="flex justify-center bg-white  pt-[150px]  rounded  h-[500px] w-85">
            
            <div className="flex flex-col items-center shadow-2xl bg-[#faa5bc]  h-[400px] w-85  rounded-4xl">
               <img className="h-60 w-60 object-cover -mt-16  shadow-xl rounded-full" src="/icecream.jpg" alt="icecream"/>
    
               

              <h2 className="text-xl pt-6 font-bold">Ice-Creams</h2>

              <div className="text-lg">
                       ⭐️⭐️⭐️⭐️⭐️
              </div>


              <p className="text-center text-black pt-4 font-semibold text-sm">"Crunchy cones cradle creamy indulgence, a delightful treat with every lick."
                </p>

             <button className="bg-pink-100 text-pink-800 mx-auto my-auto px-6 py-3 border rounded-3xl ">order now</button>
  
             </div>
        </div>



        <div className="flex justify-center bg-white  pt-[150px]  rounded  h-[500px] w-85">
            
            <div className="flex flex-col items-center  bg-[#b1cf8a]  h-[400px] w-85  rounded-4xl">
               <img className="h-60 w-60 object-cover -mt-16 shadow-2xl rounded-full" src="/yogurt.png" alt="Yogurt"/>
    
               

              <h2 className="text-xl pt-6 font-bold">Yogurt</h2>

              <div className="text-lg">
                       ⭐️⭐️⭐️⭐️⭐️
              </div>


              <p className="text-center text-black pt-4 font-semibold text-sm">"Tangy, creamy yogurt, a refreshing swirl of probiotic goodness.""
                </p>

             <button className="bg-pink-100 text-pink-800 mx-auto my-auto px-6 py-3 border rounded-3xl ">order now</button>
  
             </div>
        </div>



        <div className="flex justify-center bg-white  pt-[150px]  rounded  h-[500px] w-85">
            
            <div className="flex flex-col items-center bg-[#d9b382] h-[400px] w-85  rounded-4xl">
               <img className="h-60 w-60 object-cover -mt-16 shadow-2xl  rounded-full" src="/milk-shake.jpeg" alt="milk-shake"/>
    
               

              <h2 className="text-xl pt-6 font-bold">
Milkshakes</h2>

              <div className="text-lg">
                       ⭐️⭐️⭐️⭐️⭐️
              </div>


              <p className="text-center text-black pt-4 font-semibold text-sm">""Velvety milkshake bliss, a symphony of
flavors in every sip.""


                </p>

             <button className="bg-pink-100 text-pink-800 mx-auto my-auto px-6 py-3 border rounded-3xl ">order now</button>
  
             </div>
        </div>




        </div>

        
    )
}
export default MenuCard