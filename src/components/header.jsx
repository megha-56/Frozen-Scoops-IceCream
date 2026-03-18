import React from "react";
import HomePage from "./HomePage";
import {Link,NavLink} from 'react-router-dom'
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";


const Header=()=>{
    return(
        
       
    <div
          className="h-64 w-screen bg-cover bg-[center_-25px]   justify-center "
          style={{ backgroundImage: `url("/logo.png")` }} >
           <div className="flex ">
            <div className="flex justify-center pt-6 pl-130 text-white gap-15">
                <button className="flex border rounded-full  px-3 py-2"><NavLink to='/' className={({isActive})=>isActive?"text-pink-700":""}>Home</NavLink></button>
                <button className="flex border rounded-full  px-3 py-2"><NavLink to='/about' className={({isActive})=>isActive?"text-pink-700":""}>About</NavLink></button>
                <button className="flex border rounded-full  px-3 py-2"><NavLink to='/menu' className={({isActive})=>isActive?"text-pink-700":""}>Menu</NavLink></button>
                <button className="flex border rounded-full  px-4 py-2"><NavLink to='cart' className={({isActive})=>isActive?"text-pink-700":""}>Cart</NavLink></button>
                <button className="flex border rounded-full  px-3 py-2"><NavLink to='contact' className={({isActive})=>isActive?"text-pink-700":""}>Contact</NavLink></button>
                <div className="flex  ml-30 gap-6 pt-3 text-white ">
                
                     <FaFacebookF className="cursor-pointer text-medium  rounded-full text-[#D78698] bg-white transition  duration-300 hover:text-pink-600 hover:scale-110" />
        
                     <FaTwitter className="cursor-pointer transition text-white duration-300 hover:text-pink-600 hover:scale-110" />
                
                     <FaYoutube className="cursor-pointer transition text-white duration-300 hover:text-pink-600 hover:scale-110" />
                </div>
            </div>
                                                
        
      </div>
      </div>





    )

}
export default Header