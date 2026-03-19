import React from "react";
import Header from "./header";
import Footer from "./footer";
import { toast } from "sonner";

const ContactPage=()=>{
    
        return(
        <>
        <Header/>
        <div className="w-screen flex justify-center items-center h-200 ">
            <div className="w-326 h-170 justify-between flex  border border-1">
                
                <div className="bg-white-50 flex flex-col gap-5 mt-5  h-150 w-163">   
                    <label className="ml-10 mt-10" for="Name">Name:</label>
                    <input className="border border-2 py-2 pl-3 mx-10 rounded-lg" id="Name" placeholder="Enter your name " />
                    <label className="ml-10" for="Email">Email:</label>
                    <input className="border border-2 py-2 mx-10 pl-3 rounded-lg" id="Email" placeholder="Enter your Email address " />
                    <label className="ml-10" for="phone">Phone no:</label>
                    <input className="border  border-2 py-2 mx-10 pl-3 rounded-lg" id="phone" placeholder="Enter your mobile number " />
                    <label className="ml-10" for="address">Address:</label>
                    <input className="border border-1 py-10  mx-10 pl-3 rounded-lg" id="address" placeholder="Enter your Address details ..." />
                    <button className="bg-white text-pink-800 border border-2 border-black px-2 py-2 mx-65 my-5 rounded-xl " onClick={()=>{toast.success("Info saved successfully ")}}>Submit</button>
                </div>

                <div>
                    <img className="h-170" src="https://i.pinimg.com/1200x/21/f3/64/21f364c4284f97dbd5adb6c4b267629d.jpg" alt='icecream'/>
                </div>
                



            </div>

        </div>
        <Footer/>
        </>
    )
}
export default ContactPage 