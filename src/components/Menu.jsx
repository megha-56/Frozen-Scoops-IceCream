import React from "react";
const Menu=()=>{
    return(

        <div className="flex flex-col h-auto bg-white w-screen">
            <div className="pl-70 flex justify-around gap-x-100 h-50 pt-10 w-30">
                <div className="flex flex-col gap-y-10">
                    <div>
                    <h2 className="font-bold text-lg text-pink-800">Vanilla</h2>
                    <p className="underline text-sm whitespace-nowrap">Classic creamy goodness.</p></div>
                     <div>
                    <h2 className="font-bold text-lg text-pink-800">Chocolate</h2>
                    <p className="underline text-sm whitespace-nowrap">Rich and indulgent delight.</p></div>
                    <div>
                    <h2 className="font-bold text-lg text-pink-800">Strawberry</h2>
                    <p className="underline text-sm whitespace-nowrap">Fresh and fruity sensation.</p></div>
                    <div>
                    <h2 className="font-bold text-lg text-pink-800 whitespace-nowrap">Mint Chocolate Chip</h2>
                    <p className="underline text-sm whitespace-nowrap">Cool and refreshing with chocolate crunch.</p></div>
                </div>

                <div className="flex flex-col gap-y-10">
                    <div>
                    <h2 className="font-bold text-lg text-pink-800">Cookies and Cream</h2>
                    <p className="underline text-sm whitespace-nowrap">Crunchy, creamy cookie bliss.</p></div>
                     <div>
                    <h2 className="font-bold text-lg text-pink-800">Rocky Road</h2>
                    <p className="underline text-sm whitespace-nowrap">Chocolaty, nutty, marshmallow dream.</p></div>
                    <div>
                    <h2 className="font-bold text-lg text-pink-800">Butter Pecan</h2>
                    <p className="underline text-sm whitespace-nowrap">Rich buttery flavor with crunchy pecans.</p></div>
                    <div>
                    <h2 className="font-bold text-lg text-pink-800 whitespace-nowrap">Salted Caramel</h2>
                    <p className="underline text-sm whitespace-nowrap">Sweet and salty perfection.</p></div>
                </div>

                
            </div>


            <div className="bg-white mt-55 flex justify-center  ">
                <h1 className="font-extrabold text-pink-700   text-center text-4xl">Today's Special</h1>
            </div>


            <div className="flex bg-white h-77 mt-7 justify-center gap-10">
                <div className="  h-[350px] w-[300px]">
                    <img className="h-[200px] w-250px " src="bluberry.png" alt="blueberry" />
                    <h3 className="text-center font-bold pr-20 text-pink-800" >Blueberry</h3>
                    <p className="text-center whitespace-nowrap text-sm pr-15 text-black">creamy sweetness with tangy bursts of fruit</p>
                    <h4 className="text-center pr-15 text-sm font-bold text-black">₹ 154</h4>
                </div>
                <div className="  h-[350px] w-[300px]">
                    <img className="h-[200px] w-250px " src="cappucino.png" alt="cappucino" />
                    <h3 className="text-center font-bold pr-20 text-yellow-700" >Cappuccino</h3>
                    <p className=" text-sm   text-black">a rich blend of coffee and creaminess</p>
                    <h4 className="text-center text-sm pr-15 font-bold text-black">₹ 176</h4>
                </div>

                <div className=" pr-10 h-[250px] w-[250px]">
                    <img className="h-[200px] w-250px " src="mango.png" alt="mango"  />
                    <h3 className="text-center font-bold text-yellow-500" >Mango
                     </h3>
                    <p className=" whitespace-nowrap text-sm  text-black">tropical sweetness in a creamy frozen treat</p>
                    <h4 className="text-center text-sm font-bold text-black">₹ 140</h4>
                </div>
                 
                 <div className="  h-[250px] w-[250px]">
                    <img className="h-[200px] w-250px " src="pistachio.png" alt="pistachio"  />
                    <h3 className="text-center font-bold text-green-600" >Pistachio
                    </h3>
                    <p className="text-center text-sm  text-black">nutty richness in creamy indulgence</p>
                    <h4 className="text-center text-sm font-bold text-black">₹ 120</h4>
                </div>
                 

            </div>



        </div>

    )
}
export default Menu