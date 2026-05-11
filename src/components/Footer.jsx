import { Link } from "react-router-dom";
import SocialLinks from "./SocialLinks";

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

                <SocialLinks/>
            </section>
        </>
    );
}

export default Footer
