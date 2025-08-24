import { useState } from 'react'
import { Link } from "react-router-dom";
import Footer from '../components/Footer';
import Nav from '../components/Nav';

const Contact= () => {
    return(
        <>
            <Nav/>
            <section className="contact-me">
                <div className="bg-[url(https://tz47gb.yourbrand.studio/files/dynamicContent/sites/tz47gb/images/en/webpage_11/m66gvjjz/element_241/rwdMode_1/2400x800/history.webp)] 
                    bg-center h-full bg-cover bg-no-repeat bg-fixed flex items-center">
                    <div className="relative text-center text-white px-4 py-40 max-w-4xl mx-auto z-20">
                        <h1 className="lg:text-7xl mb-5 md:text-4xl text-white text-3xl font-bold">
                        Contact
                        </h1>
                    </div>
                </div>
                <div className="container mx-auto px-4 py-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                        <div className="space-y-8">
                            <div>
                                <h1 className="text-4xl mb-4 py-3 font-medium">Contact us</h1>

                                <div className="space-y-3 font-medium">
                                    <p>02-233 Warszawa</p>
                                    <p>Al. Jerozolimskie 12</p>
                                    <p>email@contact.com</p>
                                    <p>+48 500 500 500</p>
                                </div>
                                
                                {/* socials */}
                                <div className="socials flex gap-4 pb-2 mt-4">
                                    <i className="fab fa-facebook text-green-300 hover:text-white cursor-pointer text-2xl"></i>
                                    <i className="fab fa-twitter text-green-300 hover:text-white cursor-pointer text-2xl"></i>
                                    <i className="fab fa-instagram text-green-300 hover:text-white cursor-pointer text-2xl"></i>
                                </div>
                            </div>
                            <div className="font-medium">
                                <h2 className="text-4xl  text-gray-800 mb-4">Collaboration</h2>
                                <p className="text-lg text-gray-600">m.kowalski@contact.com</p>
                            </div>
                        </div>

                        {/* form */}
                        <div className="bg-white p-4 rounded-lg">
                            <form className="space-y-6">
                                <div className="mb-2">
                                    <label for="fname" className="text-gray-700 text-sm font-medium">First Name:</label>
                                    <input type="text" 
                                        className="block mt-1 w-full px-3 py-2 border border-gray-300 focus:border-teal-500 focus:ring-teal-500" 
                                        id="fname" required 
                                        placeholder="Anna"
                                    />
                                </div>

                                <div className="mb-2">
                                    <label for="mail" className="text-gray-700 text-sm font-medium">Your e-mail:</label>
                                    <input type="email" 
                                        className="block mt-1 w-full px-3 py-2 border border-gray-300 focus:border-teal-500 focus:ring-teal-500" 
                                        id="email" required
                                        placeholder="your@email.pl"
                                    />
                                </div>

                                <div className="mb-2">
                                    <label for="messageInput" className="text-gray-700 text-sm font-medium">Message:</label>
                                    <textarea 
                                        className="mt-1 w-full px-3 py-2 border border-gray-300 focus:border-teal-500 focus:ring-teal-500 resize-none" 
                                        id="messageInput" 
                                        rows={6} required
                                    />
                                </div>

                                <div className="mb-2">
                                    <button type="submit" className="btn text-white px-10 py-3 font-medium text-uppercase border-0">
                                        SEND
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                    
                    {/* Map */}
                    <div className="mt-16 max-w-6xl mx-auto">
                        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                            <iframe
                                src="https://www.google.com/maps/embed/v1/view?key=AIzaSyCJMzPr06tNkQ6l8-Gwv9VxQ3uk_hqAZcY&zoom=13&center=52.2396615932874,21.042228700000037&maptype=roadmap"
                                width="100%"
                                height="400"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="w-full"
                            />
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    );
}

export default Contact
