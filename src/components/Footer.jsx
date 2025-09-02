import { useState } from 'react'
import { Link } from "react-router-dom";

const Footer= () => {
    return(
        <>
            <section className="footer  text-center mx-auto bg-[#171717] text-white flex flex-col md:flex-row justify-evenly items-center py-10">
                <div className="my-4 cursor-pointer">
                    <p>02-233 Warszawa</p>
                    <p>Al.Jerozolimskie 12</p>
                </div>
                
                <div className="my-4 cursor-pointer">
                    <p>email@contact.com</p>
                    <p>+48 500 500 500</p>
                </div>

                <div className="my-4 cursor-pointer">
                    <p className="hover:underline hover:text-green-300">Store Regulations</p>
                    <p className="hover:underline hover:text-green-300">Privacy policy</p>
                </div>

                <div className="my-4 cursor-pointer">
                    <p className="hover:underline hover:text-green-300">Delivery</p>
                    <p className="hover:underline hover:text-green-300">Returns & exhanges</p>
                </div>

                {/* socials */}
                <div className="socials flex gap-4 pb-2 mt-4">
                    <i className="fab fa-facebook text-green-300 hover:text-white cursor-pointer text-2xl"></i>
                    <i className="fab fa-twitter text-green-300 hover:text-white cursor-pointer text-2xl"></i>
                    <i className="fab fa-instagram text-green-300 hover:text-white cursor-pointer text-2xl"></i>
                </div>
            </section>
        </>
    );
}

export default Footer
