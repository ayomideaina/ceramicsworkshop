import React from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav";

const Header = () => {
    return(
        <>
            <Nav/>
           <header 
                className="header 
                bg-[url(https://tz47gb.yourbrand.studio/files/dynamicContent/sites/tz47gb/images/en/webpage_11/m66gvjjz/element_210/rwdMode_1/2400x836/main.webp)] 
                bg-center h-screen bg-cover bg-no-repeat bg-fixed flex items-center justify-center text-center"
            >
                
                
                {/* <div className="absolute  inset-0 bg-opacity-60 z-10"></div> */}

                <div className="hero relative texts-center  text-White px-6 py-40 max-w-4xl mx-auto z-20">
                    <h1 className=" lg:text-7xl mb-5 md:text-4xl text-white text-3xl font-bold">
                        Ceramics studio
                    </h1>
                    <p className="lg:text-xl  text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec orci massa, dapibus quis molestie sit amet, pharetra vitae dolor. Praesent auctor, dui id maximus sagittis, 
                        lectus enim pharetra quam, ut laoreet tortor metus ut ipsum.
                    </p>
                    <Link to="/shop">
                        <button className="btn px-12 py-3 text-lg mt-16 m-auto text-white  block flex justify-center items-center">Show More</button>
                    </Link>
                </div>
            </header>
        </>
    )
}

export default Header;
