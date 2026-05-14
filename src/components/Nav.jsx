import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
        <nav className="nav fixed top-0 w-full z-50 flex justify-between bg-white items-center px-4 md:px-8 lg:px-40 py-2 shadow">
            <div className="logo">
                <img
                    src="https://tz47gb.yourbrand.studio/files/dynamicContent/sites/tz47gb/images/en/layout_2/m66gvf7w/element_203/rwdMode_1/118x94/logo.webp"
                    alt="logo"
                    className="rounded h-8 md:h-12"
                />
            </div>

            <div className="navlinks hidden md:flex gap-6 space-x-6 uppercase font-semibold text-sm">
                <Link to="/">Home</Link>
                <Link to="/shop">Shop</Link>
                <Link to="/blog">Blog</Link>
                <Link to="/ceramicworkshop">Workshop</Link>
                <Link to="/contact">Contact</Link>
            </div>

            <button
                className="md:hidden flex items-center justify-center p-2"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
                >
                {isMenuOpen ? <RiCloseLine size={28} /> : <RiMenu3Line size={28} />}
            </button>
        </nav>

        <div
            className={`fixed top-16 left-0 w-full bg-white shadow-lg z-40 md:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen
                ? "opacity-100 translate-y-0 pointer-events-auto"
                : "opacity-0 -translate-y-2 pointer-events-none"
            }`}
        >
            <div className="flex flex-col py-4 px-4 space-y-4 uppercase font-semibold">
                <Link
                    to="/"
                    className="mt-4 pt-4 pb-2 border-b border-gray-100"
                    onClick={() => setIsMenuOpen(false)}
                >
                    Home
                </Link>

                <Link
                    to="/shop"
                    className="py-2 border-b border-gray-100"
                    onClick={() => setIsMenuOpen(false)}
                >
                Shop
                </Link>

                <Link
                    to="/blog"
                    className="py-2 border-b border-gray-100"
                    onClick={() => setIsMenuOpen(false)}
                >
                    Blog
                </Link>

                <Link
                    to="/ceramicworkshop"
                    className="py-2 border-b border-gray-100"
                    onClick={() => setIsMenuOpen(false)}
                >
                    Workshop
                </Link>

                <Link to="/contact" className="py-2" onClick={() => setIsMenuOpen(false)}>
                    Contact
                </Link>
            </div>
        </div>
    </>
  );
};

export default Nav;
