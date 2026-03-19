import React from "react";
import Header from "./header";
import Footer from "./footer";

const MenuPage=()=>{
    return(
        <>
        <Header/>
          
        <div className=" flex flex-col  w-screen min-h-screen">
                <div>
                <h1 className="text-center text-pink-700 font-bold pt-20 text-3xl underline">ICECREAMS</h1>
                </div>
                <div className="flex pt-20 flex-col gap-30 h-screen w-screen ">
                       <div className="flex bg-yellow-150 justify-around"> 
                            <div className="flex justify-between rounded-xl relative h-[150px] w-[300px] border border-gray-300">
                               <div>
                                   <img className="absolute h-full rounded-xl w-[150px]" src='https://i.pinimg.com/1200x/b5/8d/80/b58d80e73aff54d6a4f1ed3397b18a4b.jpg' alt='Vanilla'/>
                               </div>
                               <div className="flex flex-col justify-center gap-3 px-5 py-10">
                                   <h2 className="font-bold pl-3">Vanilla</h2>
                                   <button className="bg-pink-700 px-3 py-2 text-xs mr-2 text-white border rounded-xl border ">Add to cart</button>
                               </div>
                            </div>
                            <div className="flex justify-between rounded-xl relative h-[150px] w-[300px] border border-gray-300">
                                <div>
                                   <img className="absolute h-full rounded-xl w-[150px]" src='https://i.pinimg.com/736x/cb/2c/ac/cb2cacba6d3da5ddce930294370e6c2d.jpg' alt='Chocolate'/>
                                </div>
                                <div className="flex flex-col justify-center gap-3 px-5 py-10">
                                  <h2 className="font-bold pl-3">Chocolate</h2>
                                <button className="bg-pink-700 px-3 py-2 text-xs mr-2 text-white border rounded-xl border  ">Add to cart</button>
                               </div>
                            </div>
                            <div className="flex justify-between rounded-xl relative h-[150px] w-[300px] border  border-gray-300 ">
                                <div>
                                   <img className="absolute h-full rounded-xl w-[150px]" src='https://i.pinimg.com/1200x/62/85/2f/62852febf711ab062c815065e65fb528.jpg' alt='Strawberry'/>
                                </div>
                                 <div className="flex flex-col justify-center gap-3 px-5 py-10">
                                    <h2 className="font-bold pl-3">Strawberry</h2>
                                    <button className="bg-pink-700 px-3 py-2 text-xs mr-2 text-white border rounded-xl border-black">Add to cart</button>
                                 </div>
                             </div>
                </div>

                <div>
                    <div className="flex justify-around"> 
                    <div className="flex justify-between rounded-xl relative h-[150px] w-[300px] border border-gray-300">
                        <div>
                        <img className="absolute h-full rounded-xl w-[150px]" src='https://i.pinimg.com/1200x/f5/a2/d1/f5a2d170437cb753630e61bc5810d897.jpg' alt='Salted Caramel'/>
                        </div>
                        <div className="flex flex-col justify-center gap-3 px-5 py-10">
                            <h2 className="font-bold pl-3">Salted Caramel</h2>
                            <button className="bg-pink-700 ml-4 py-2 text-xs mr-2 text-white border rounded-xl border ">Add to cart</button>
                        </div>
                    </div>
                    <div className="flex justify-between rounded-xl relative h-[150px] w-[300px] border border-gray-300">
                        <div>
                        <img className="absolute h-full rounded-xl w-[150px]" src='https://i.pinimg.com/1200x/c0/5d/d6/c05dd627351f48f2d8fff02c10c3aa48.jpg' alt='Chocolate'/>
                        </div>
                        <div className="flex flex-col justify-center gap-3 px-5 py-10">
                            <h2 className="font-bold pl-3">Rocky Road</h2>
                            <button className="bg-pink-700 px-3 py-2 text-xs mr-2 text-white border rounded-xl border  ">Add to cart</button>
                        </div>
                    </div>
                    <div className="flex justify-between rounded-xl relative h-[150px] w-[300px] border  border-gray-300 ">
                        <div>
                        <img className="absolute h-full rounded-xl w-[150px]" src='https://i.pinimg.com/1200x/8c/6d/f1/8c6df1fd5d581c7f2b2c1f0269c15233.jpg' alt='Butter Pecan'/>
                        </div>
                        <div className="flex flex-col justify-center gap-3 px-5 py-10">
                            <h2 className="font-bold pl-3">Butter Pecan</h2>
                            <button className="bg-pink-700 px-3 py-2 text-xs mr-2 text-white border rounded-xl border-black">Add to cart</button>
                        </div>
                    </div>
                   </div>
                  </div>
                
                <div>
                        <div className="flex justify-around"> 
                    <div className="flex justify-between rounded-xl relative h-[150px] w-[400px] border border-gray-300">
                        <div>
                        <img className="absolute h-full rounded-xl w-[150px]" src='https://i.pinimg.com/736x/bf/ee/f6/bfeef6b541459dd505ac63eb192e9883.jpg' alt='Mint Chocolate Chip'/>
                        </div>
                        <div className="flex flex-col justify-center gap-3 mr-7 px-5 py-10">
                            <h2 className="font-bold pl-3">Mint Chocolate<br/> Chip</h2>
                            <button className="bg-pink-700 ml-4  px-3 py-2 text-xs mr-2 text-white border rounded-xl border ">Add to cart</button>
                        </div>
                    </div>
                    <div className="flex justify-between rounded-xl relative h-[150px] w-[400px] border border-gray-300">
                        <div>
                        <img className="absolute h-full rounded-xl w-[150px]" src='https://i.pinimg.com/1200x/72/bc/c6/72bcc615be132d18680c734d4a596680.jpg' alt='Cookies and Cream'/>
                        </div>
                        <div className="flex flex-col justify-center gap-3 mr-7 px-5 py-10">
                            <h2 className="font-bold pr-5 pl-3">Cookies and<br/> Cream</h2>
                            <button className="bg-pink-700 mx-3 py-2 text-xs mr-2 text-white border rounded-xl border  ">Add to cart</button>
                        </div>
                    </div>
                    
                        </div>
                    </div>
            </div>



            <div  className=" flex flex-col  w-screen h-auto">
                <div>
                <h1 className="text-center mt-20 text-pink-700 font-bold pt-20 text-3xl underline">YOGURT</h1>
                </div>
                <div className="flex mt-20  bg-yellow-150 justify-around"> 
                            <div className="flex justify-between rounded-xl relative h-[150px] w-[300px] border border-gray-300">
                               <div>
                                   <img className="absolute h-full rounded-xl w-[150px]" src='https://i.pinimg.com/736x/ac/17/9c/ac179ceacbcc71e84fe2e103acc147d5.jpg' alt='Vanilla'/>
                               </div>
                               <div className="flex flex-col justify-center gap-3 px-5 py-10">
                                   <h2 className="font-bold text-center pl-3">Vanilla Honey <br/>Greek Yogurt</h2>
                                   <button className="bg-pink-700 px-3 py-2 text-xs mr-2 text-white border ml-3 rounded-xl border ">Add to cart</button>
                               </div>
                            </div>
                            <div className="flex justify-between rounded-xl relative h-[150px] w-[300px] border border-gray-300">
                                <div>
                                   <img className="absolute h-full rounded-xl w-[150px]" src='https://i.pinimg.com/736x/72/ee/b7/72eeb72bb79b1023da79af17a3d02b6c.jpg' alt='Chocolate'/>
                                </div>
                                <div className="flex flex-col justify-center gap-3 px-5 py-10">
                                  <h2 className="font-bold pl-3">Vegan Almond <br/>Milk Yogurt</h2>
                                <button className="bg-pink-700 px-3 py-2 text-xs mr-3 ml-3 text-white border rounded-xl border  ">Add to cart</button>
                               </div>
                            </div>
                            <div className="flex justify-between rounded-xl relative h-[150px] w-[300px] border  border-gray-300 ">
                                <div>
                                   <img className="absolute h-full rounded-xl w-[150px]" src='https://i.pinimg.com/1200x/57/67/f7/5767f7e21122e39db90ce42cfe7fdef4.jpg' alt='Strawberry'/>
                                </div>
                                 <div className="flex flex-col justify-center gap-3 px-5 py-10">
                                    <h2 className="font-bold pl-3">Bluberry Frozen<br/> Yogurt</h2>
                                    <button className="bg-pink-700 px-3 py-2 text-xs mr-4 ml-4 text-white border rounded-xl border-black">Add to cart</button>
                                 </div>
                             </div>
                </div>


            </div>


            <div>
               


            </div>

        </div>

        <Footer/>
        </>
    )
}
export default MenuPage