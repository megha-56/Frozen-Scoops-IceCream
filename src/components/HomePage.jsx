import React from "react";
import Header from "./header";
import Home2 from "./home2";
import Menu from "./Menu";
import SignatureMenu from "./SignatureMenu";
import Banner from "./banner";
import Footer from "./footer";

const HomePage=()=>{
    return(
        <>
      <Header/>
      <Home2/>
      <Menu />
      <SignatureMenu />
      <Banner/>
      <Footer/>
      
    </>
    )
}
export default HomePage