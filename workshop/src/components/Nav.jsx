import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
    return(
        <>
            <nav className="nav fixed top-0 w-full z-50 flex justify-between items-center text-black px-30 py-4 shadow">
                <div className="logo">
                    <img
                    src="https://tz47gb.yourbrand.studio/files/dynamicContent/sites/tz47gb/images/en/layout_2/m66gvf7w/element_203/rwdMode_1/118x94/logo.webp"
                    alt="logo"
                    className="rounded h-12"
                    />
                </div>
                <div className="navlinks flex space-x-6">
                    <Link to="/">Home</Link>
                    <Link to="/shop">Shop</Link>
                    <Link to="/blog">Blog</Link>
                    <Link to="/ceramicworkshop">Workshop</Link>
                    <Link to="/contact">Contact</Link>
                </div>
            </nav>
        </>
    );
}

export default Nav;
