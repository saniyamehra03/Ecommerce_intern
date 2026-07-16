import React ,{useState,useEffect, use}from 'react'
import { FaArrowUp } from "react-icons/fa";
const ScrollToTop = () => {
    const[showButton,setShowButton] =useState(false);
    useEffect(() => {
        const handleScroll =() =>{
            if(window.scrollY >300) {
                setShowButton(true);
            }else{
                setShowButton(false);
            }
        };
    window.addEventListener("scroll",handleScroll);
    return()=>{
        window.removeEventListener("scroll",handleScroll);
    };
    },[]);

    const scrollToTop=()=>{
        window.scrollTo({
           top:0,
           behavior:"smooth" ,
        });
    };

  return (
    <>
    {showButton && (
        <button 
        onClick={scrollToTop}
        className="btn btn-primary rounded-circle shadow"
          style={{
            position: "fixed",
            bottom: "30px",
            right: "30px",
            width: "55px",
            height: "55px",
            zIndex: 1000,
          }}>
             <FaArrowUp  size={18} />
        </button>
    )}
    </>
   
  )
}

export default ScrollToTop