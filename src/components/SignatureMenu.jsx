// import React from "react";

// const SignatureMenu=()=>{
//     return(
//           <div className="flex flex-col min-h-screen w-screen bg-[#f2edea] ">


            
//             <div className="flex justify-evenly  h-[450px] w-screen ">
//                      <div className="h-[400px] rounded-[30px] w-[400px] bg-[length:100%] bg-[center_5px]  bg-no-repeat   my-auto"
//                             style={{ backgroundImage: "url('/Mixed Berry Ice Cream.png')" }}>
//                                 <div className="flex  pl-5 pt-80 flex-col items-baseline">
//                                     <h3 className="text-sm font-bold text-gray-500 ">Signature Menu</h3>
//                                     <h1 className="font-bold text-3xl text-pink-700">RED BERRY MIX</h1>
//                                 </div>
                                
                    
//                      </div>
                
//                     <div className="flex my-auto flex-col gap-5">
//                         <span>
//                            <h2 className="font-bold text-lg text-pink-800">SALTY BREEZE</h2>
//                            <p className="underline text-sm">Ocean-inspired salt meets creamy sweetness.</p>
//                         </span>
//                         <span>
//                            <h2 className="font-bold text-lg text-pink-800">LATE PUMPKIN</h2>
//                            <p className="underline text-sm">A tardy twist on pumpkin spice.</p>
//                         </span>
//                         <span>
//                            <h2 className="font-bold text-lg text-pink-800">BLACK REAPER</h2>
//                            <p className="underline text-sm">Intensely fiery black reaper peppers ignite.</p>
//                         </span>
//                         <span>
//                            <h2 className="font-bold text-lg text-pink-800">SLIGHT SALTY</h2>
//                            <p className="underline text-sm">Subtly tinged with saltiness.</p>
//                         </span>
                
//                    </div>
//             </div>




//             <div>
//                    <div className="flex justify-evenly  h-[450px] w-screen ">
                     
                
//                     <div className="flex my-auto flex-col gap-5">
//                         <span>
//                            <h2 className="font-bold text-lg text-pink-800">SALTY BREEZE</h2>
//                            <p className="underline text-sm">Ocean-inspired salt meets creamy sweetness.</p>
//                         </span>
//                         <span>
//                            <h2 className="font-bold text-lg text-pink-800">LATE PUMPKIN</h2>
//                            <p className="underline text-sm">A tardy twist on pumpkin spice.</p>
//                         </span>
//                         <span>
//                            <h2 className="font-bold text-lg text-pink-800">BLACK REAPER</h2>
//                            <p className="underline text-sm">Intensely fiery black reaper peppers ignite.</p>
//                         </span>
//                         <span>
//                            <h2 className="font-bold text-lg text-pink-800">SLIGHT SALTY</h2>
//                            <p className="underline text-sm">Subtly tinged with saltiness.</p>
//                         </span>
                
//                    </div>
//                    <div className="h-[400px] rounded-[30px] w-[400px] bg-[length:100%] bg-[center_5px]  bg-no-repeat   my-auto"
//                             style={{ backgroundImage: "url('/creamy-mix.png')" }}>
//                                 <div className="flex  pl-3 pt-80 flex-col items-baseline">
//                                     <h3 className="text-sm font-bold text-gray-500 ">Signature Menu</h3>
//                                     <h1 className="font-bold text-2xl text-pink-700">CREAMY MIX</h1>
//                                 </div>
                                
                    
//                      </div>
//                </div>
//             </div>
            











//          </div>

//     )
// }
// export default SignatureMenu 

import React from "react";

const SignatureMenu = () => {
  const items = [
    { title: "SALTY BREEZE", desc: "Ocean-inspired salt meets creamy sweetness." },
    { title: "LATE PUMPKIN", desc: "A tardy twist on pumpkin spice." },
    { title: "BLACK REAPER", desc: "Intensely fiery black reaper peppers ignite." },
    { title: "SLIGHT SALTY", desc: "Subtly tinged with saltiness." },
  ];

  const ItemsList = () => (
    <div className="flex flex-col gap-5 w-full max-w-[360px] self-center sm:w-auto sm:max-w-none">
      {items.map(({ title, desc }) => (
        <span key={title}>
          <h2 className="font-bold text-base sm:text-lg text-pink-800">{title}</h2>
          <p className="underline text-sm">{desc}</p>
        </span>
      ))}
    </div>
  );

  return (
    <div className="flex flex-col min-h-screen w-screen bg-[#f2edea]">

      {/* Section 1 */}
      <div className="flex flex-col sm:flex-row justify-evenly items-center
                      min-h-[450px] w-full gap-6 px-4 py-6 sm:py-0">
        <div
          className="w-full max-w-[360px] sm:w-[400px] sm:max-w-none
                     h-[280px] sm:h-[400px] rounded-[20px] sm:rounded-[30px]
                     bg-cover bg-no-repeat bg-[center_5px] flex-shrink-0
                     flex flex-col justify-end p-4 sm:p-5"
          style={{ backgroundImage: "url('/Mixed Berry Ice Cream.png')" }}
        >
          <h3 className="text-sm font-bold text-gray-500">Signature Menu</h3>
          <h1 className="font-bold text-2xl sm:text-3xl text-pink-700">RED BERRY MIX</h1>
        </div>
        <ItemsList />
      </div>

      {/* Section 2 */}
      <div className="flex flex-col-reverse sm:flex-row justify-evenly items-center
                      min-h-[450px] w-full gap-6 px-4 py-6 sm:py-0">
        <ItemsList />
        <div
          className="w-full max-w-[360px] sm:w-[400px] sm:max-w-none
                     h-[280px] sm:h-[400px] rounded-[20px] sm:rounded-[30px]
                     bg-cover bg-no-repeat bg-[center_5px] flex-shrink-0
                     flex flex-col justify-end p-3 sm:p-4"
          style={{ backgroundImage: "url('/creamy-mix.png')" }}
        >
          <h3 className="text-sm font-bold text-gray-500">Signature Menu</h3>
          <h1 className="font-bold text-xl sm:text-2xl text-pink-700">CREAMY MIX</h1>
        </div>
      </div>

    </div>
  );
};

export default SignatureMenu;