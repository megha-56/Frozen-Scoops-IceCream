// import React from "react";
// import {useNavigate} from 'react-router-dom'


// const MenuCard=()=>{
//     const navigate=useNavigate();
//     function handleClick(){
//         navigate('menu');
//     }
//     return(

//         <div className="h-[600px] w-screen bg-white flex justify-center gap-25">


//         <div className="flex justify-center bg-white  pt-[150px]  rounded  h-[500px] w-85">

//             <div className="flex flex-col items-center  bg-[#faa5bc]  h-[400px] w-85  rounded-4xl">
//             {/* <div className="flex flex-col items-center shadow-2xl bg-[#faa5bc]  h-[400px] w-85  rounded-4xl"> */}
//                {/* <img className="h-60 w-60 object-cover -mt-16  shadow-xl rounded-full" src="/icecream.jpg" alt="icecream"/> */}
//               <div className="h-60 w-60 -mt-16 rounded-full overflow-hidden relative shadow-2xl">
//                        <video autoPlay loop  muted  playsInline
//                           className="absolute top-0 left-0 w-full h-full object-cover">
//                           <source src="/icecreamclip.mp4" type="video/mp4" />
//                        </video>
//               </div>
               

//               <h2 className="text-xl pt-6 font-bold">Ice-Creams</h2>

//               <div className="text-lg">
//                        ⭐️⭐️⭐️⭐️⭐️
//               </div>


//               <p className="text-center text-black pt-4 font-semibold text-sm">"Crunchy cones cradle creamy indulgence, a delightful treat with every lick."
//                 </p>

//              <button onClick={handleClick} className="bg-pink-100 text-pink-800 mx-auto my-auto px-6 py-3 border rounded-3xl ">Order Now</button>
  
//              </div>
//         </div>



//         <div className="flex justify-center bg-white  pt-[150px]  rounded  h-[500px] w-85">
            
//             <div className="flex flex-col items-center  bg-[#b1cf8a]  h-[400px] w-85  rounded-4xl">
//                {/* <img className="h-60 w-60 object-cover -mt-16 shadow-2xl rounded-full" src="/yogurt.png" alt="Yogurt"/> */}
//                 <div className="h-60 w-60 -mt-16 rounded-full overflow-hidden relative shadow-2xl">
//                        <video autoPlay loop  muted  playsInline
//                           className="absolute top-0 left-0 w-full h-full scale-150">
//                           <source src="/YOGURT.mp4" type="video/mp4" />
//                        </video>
//                  </div>

    
               

//               <h2 className="text-xl pt-6 font-bold">Yogurt</h2>

//               <div className="text-lg">
//                        ⭐️⭐️⭐️⭐️⭐️
//               </div>


//               <p className="text-center text-black pt-4 font-semibold text-sm">"Tangy, creamy yogurt, a refreshing swirl of probiotic goodness.""
//                 </p>

//              <button onClick={handleClick} className="bg-pink-100 text-pink-800 mx-auto my-auto px-6 py-3 border rounded-3xl ">Order Now</button>
  
//              </div>
//         </div>



//         <div className="flex justify-center bg-white  pt-[150px]  rounded  h-[500px] w-85">
            
//             <div className="flex flex-col items-center bg-[#d9b382] h-[400px] w-85  rounded-4xl">
//                {/* <img className="h-60 w-60 object-cover -mt-16 shadow-2xl  rounded-full" src="/milk-shake.jpeg" alt="milk-shake"/>
    
//                 */}
//                 <div className="h-60 w-60 -mt-16 rounded-full overflow-hidden relative shadow-2xl">
//                        <video autoPlay loop  muted  playsInline
//                           className="absolute top-0 left-0 w-full h-full object-cover">
//                           <source src="/MilkShake.mp4" type="video/mp4" />
//                        </video>
//                  </div>

//               <h2 className="text-xl pt-6 font-bold">
// Milkshakes</h2>

//               <div className="text-lg">
//                        ⭐️⭐️⭐️⭐️⭐️
//               </div>


//               <p className="text-center text-black pt-4 font-semibold text-sm">""Velvety milkshake bliss, a symphony of
// flavors in every sip.""


//                 </p>

//              <button onClick={handleClick} className="bg-pink-100 text-pink-800 mx-auto my-auto px-6 py-3 border rounded-3xl ">Order Now</button>
  
//              </div>
//         </div>




//         </div>

        
//     )
// }
// export default MenuCard
import React from "react";
import { useNavigate } from 'react-router-dom';

const MenuCard = () => {
    const navigate = useNavigate();
    function handleClick() {
        navigate('menu');
    }
    return (
        <div className="h-auto lg:h-[600px] w-screen bg-white flex flex-col sm:flex-row flex-wrap justify-center items-center gap-10 sm:gap-15 lg:gap-25 py-10 lg:py-0">

            {/* ── Card 1: Ice-Creams ── */}
            <div className="flex justify-center bg-white pt-16 sm:pt-24 lg:pt-[150px] rounded h-auto lg:h-[500px] w-72 sm:w-80 lg:w-85">
                <div className="flex flex-col items-center bg-[#faa5bc] h-[400px] w-72 sm:w-80 lg:w-85 rounded-4xl">
                    <div className="h-60 w-60 -mt-16 rounded-full overflow-hidden relative shadow-2xl">
                        <video autoPlay loop muted playsInline
                            className="absolute top-0 left-0 w-full h-full object-cover">
                            <source src="/icecreamclip.mp4" type="video/mp4" />
                        </video>
                    </div>
                    <h2 className="text-xl pt-6 font-bold">Ice-Creams</h2>
                    <div className="text-lg">⭐️⭐️⭐️⭐️⭐️</div>
                    <p className="text-center text-black pt-4 font-semibold text-sm">"Crunchy cones cradle creamy indulgence, a delightful treat with every lick."</p>
                    <button onClick={handleClick} className="bg-pink-100 text-pink-800 mx-auto my-auto px-6 py-3 border rounded-3xl">Order Now</button>
                </div>
            </div>

            {/* ── Card 2: Yogurt ── */}
            <div className="flex justify-center bg-white pt-16 sm:pt-24 lg:pt-[150px] rounded h-auto lg:h-[500px] w-72 sm:w-80 lg:w-85">
                <div className="flex flex-col items-center bg-[#b1cf8a] h-[400px] w-72 sm:w-80 lg:w-85 rounded-4xl">
                    <div className="h-60 w-60 -mt-16 rounded-full overflow-hidden relative shadow-2xl">
                        <video autoPlay loop muted playsInline
                            className="absolute top-0 left-0 w-full h-full scale-150">
                            <source src="/YOGURT.mp4" type="video/mp4" />
                        </video>
                    </div>
                    <h2 className="text-xl pt-6 font-bold">Yogurt</h2>
                    <div className="text-lg">⭐️⭐️⭐️⭐️⭐️</div>
                    <p className="text-center text-black pt-4 font-semibold text-sm">"Tangy, creamy yogurt, a refreshing swirl of probiotic goodness."</p>
                    <button onClick={handleClick} className="bg-pink-100 text-pink-800 mx-auto my-auto px-6 py-3 border rounded-3xl">Order Now</button>
                </div>
            </div>

            {/* ── Card 3: Milkshakes ── */}
            <div className="flex justify-center bg-white pt-16 sm:pt-24 lg:pt-[150px] rounded h-auto lg:h-[500px] w-72 sm:w-80 lg:w-85">
                <div className="flex flex-col items-center bg-[#d9b382] h-[400px] w-72 sm:w-80 lg:w-85 rounded-4xl">
                    <div className="h-60 w-60 -mt-16 rounded-full overflow-hidden relative shadow-2xl">
                        <video autoPlay loop muted playsInline
                            className="absolute top-0 left-0 w-full h-full object-cover">
                            <source src="/MilkShake.mp4" type="video/mp4" />
                        </video>
                    </div>
                    <h2 className="text-xl pt-6 font-bold">Milkshakes</h2>
                    <div className="text-lg">⭐️⭐️⭐️⭐️⭐️</div>
                    <p className="text-center text-black pt-4 font-semibold text-sm">"Velvety milkshake bliss, a symphony of flavors in every sip."</p>
                    <button onClick={handleClick} className="bg-pink-100 text-pink-800 mx-auto my-auto px-6 py-3 border rounded-3xl">Order Now</button>
                </div>
            </div>

        </div>
    );
}
export default MenuCard;