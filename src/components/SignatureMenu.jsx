import React from "react";

const SignatureMenu=()=>{
    return(
          <div className="flex flex-col min-h-screen w-screen bg-[#f2edea] ">


            
            <div className="flex justify-evenly  h-[450px] w-screen ">
                     <div className="h-[400px] rounded-[30px] w-[400px] bg-[length:100%] bg-[center_5px]  bg-no-repeat   my-auto"
                            style={{ backgroundImage: "url('/Mixed Berry Ice Cream.png')" }}>
                                <div className="flex  pl-5 pt-80 flex-col items-baseline">
                                    <h3 className="text-sm font-bold text-gray-500 ">Signature Menu</h3>
                                    <h1 className="font-bold text-3xl text-pink-700">RED BERRY MIX</h1>
                                </div>
                                
                    
                     </div>
                
                    <div className="flex my-auto flex-col gap-5">
                        <span>
                           <h2 className="font-bold text-lg text-pink-800">SALTY BREEZE</h2>
                           <p className="underline text-sm">Ocean-inspired salt meets creamy sweetness.</p>
                        </span>
                        <span>
                           <h2 className="font-bold text-lg text-pink-800">LATE PUMPKIN</h2>
                           <p className="underline text-sm">A tardy twist on pumpkin spice.</p>
                        </span>
                        <span>
                           <h2 className="font-bold text-lg text-pink-800">BLACK REAPER</h2>
                           <p className="underline text-sm">Intensely fiery black reaper peppers ignite.</p>
                        </span>
                        <span>
                           <h2 className="font-bold text-lg text-pink-800">SLIGHT SALTY</h2>
                           <p className="underline text-sm">Subtly tinged with saltiness.</p>
                        </span>
                
                   </div>
            </div>




            <div>
                   <div className="flex justify-evenly  h-[450px] w-screen ">
                     
                
                    <div className="flex my-auto flex-col gap-5">
                        <span>
                           <h2 className="font-bold text-lg text-pink-800">SALTY BREEZE</h2>
                           <p className="underline text-sm">Ocean-inspired salt meets creamy sweetness.</p>
                        </span>
                        <span>
                           <h2 className="font-bold text-lg text-pink-800">LATE PUMPKIN</h2>
                           <p className="underline text-sm">A tardy twist on pumpkin spice.</p>
                        </span>
                        <span>
                           <h2 className="font-bold text-lg text-pink-800">BLACK REAPER</h2>
                           <p className="underline text-sm">Intensely fiery black reaper peppers ignite.</p>
                        </span>
                        <span>
                           <h2 className="font-bold text-lg text-pink-800">SLIGHT SALTY</h2>
                           <p className="underline text-sm">Subtly tinged with saltiness.</p>
                        </span>
                
                   </div>
                   <div className="h-[400px] rounded-[30px] w-[400px] bg-[length:100%] bg-[center_5px]  bg-no-repeat   my-auto"
                            style={{ backgroundImage: "url('/creamy-mix.png')" }}>
                                <div className="flex  pl-3 pt-80 flex-col items-baseline">
                                    <h3 className="text-sm font-bold text-gray-500 ">Signature Menu</h3>
                                    <h1 className="font-bold text-2xl text-pink-700">CREAMY MIX</h1>
                                </div>
                                
                    
                     </div>
               </div>
            </div>
            











         </div>

    )
}
export default SignatureMenu