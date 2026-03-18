import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer=()=>{
    return(
        <div className="bg-[#D78698] h-[541px] w-screen">
            <div className="flex justify-around ">
                <h2 className="font-bold mt-6 text-white text-lg">SUBSCRIBE TO OUR NEWS LETTER</h2>
                <h4 className="text-xs mt-8 font-bold text-white">Your Email</h4>
                <button className="border-2 border-black text-xs rounded-full flex  text-pink-800 bg-white px-8 py-4 mt-3">Subscribe</button>
            </div>
            <hr className="border-white mt-2"/>
            <div className="flex justify-around">
                  <div className="">
                      
                      <div className="h-[270px] w-[270px] mt-15 rounded-full overflow-hidden relative shadow">
                               <video  autoPlay  loop  muted playsInline
                                     className="absolute top-0 left-0 w-full h-full scale-178 ]" >
                                     <source src="/icecreamclip.mp4" type="video/mp4" />
                                    
                               </video>   
                      </div>

                      <div>
                           <h2 className="text-white">The best icecream sellers of the<br/>
                            City of Lakes Bhopal</h2>

                      </div>
    
                  </div>

                  <div className="text-white flex flex-col mt-20 gap-10">
                          <h2 className="font-bold text-lg">Get in Touch</h2>
                          <h4 >📍 Sagar High Street, Minal Residency</h4>
                          <h4>📧 frostydelight@gmail.com</h4>
                          <h4>📞 +91(234)567890</h4>
                          <div className="flex gap-6 text-white ">

                            <FaFacebookF className="cursor-pointer text-medium  rounded-full text-[#D78698] bg-white transition  duration-300 hover:text-blue-600 hover:scale-110" />

                            <FaInstagram className="cursor-pointer transition text-white duration-300 hover:text-pink-500 hover:scale-110" />

                            <FaTwitter className="cursor-pointer transition text-white duration-300 hover:text-sky-400 hover:scale-110" />

                            <FaYoutube className="cursor-pointer transition text-white duration-300 hover:text-red-600 hover:scale-110" />
                         </div>
                         

                  </div>

                  <div className="text-white flex gap-6 mt-20 flex-col">
                    <h2 className="font-bold text-lg">Quick Links</h2>
                    <h4>Home</h4>
                    <h4 >About</h4>
                    <h4 >Menu</h4>
                    <h4 >Cart</h4>
                    <h4 >Contact</h4>

                  </div>

                  <div className="text-white flex gap-6 mt-20 flex-col">
                    <h2 className="font-bold text-lg">Opening Hours</h2>
                    <h4>Mon-Fri: 09:00-18:00</h4>
                    <h4 >Saturday: 10:00-17:00</h4>
                    <h4 >Sunday: 10:00-17:00</h4>
                    <button className="bg-pink-200 flex mx-auto my-auto px-6 py-4 rounded-xl text-xl">Shop Now →</button>
                  </div>
            </div>  
            <hr className="mt-10 text-white"/>

            <div className="flex justify-around pt-5 text-white text-sm">
                  <h3>Copyright @2026</h3>
                  <h3>Privacy Policy</h3>
                  <h3>Terms and Conditions</h3>

            </div>

        </div>
    )
}

export default Footer