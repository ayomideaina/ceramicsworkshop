import { useState } from 'react'
import { Link } from "react-router-dom";
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const Ceramicworkshop = () => {
    return(
        <>
            <Nav/>
           <section class="py-10 bg-gray-100">
                <div className="bg-[url(https://tz47gb.yourbrand.studio/files/dynamicContent/sites/tz47gb/images/en/webpage_13/m66gvlqq/element_256/rwdMode_1/2400x284/Workshop_header_blog_A.webp)] 
                    bg-center h-full bg-cover bg-no-repeat bg-fixed flex items-center">
                    <div className="relative text-center text-white px-4 py-40 max-w-4xl mx-auto z-20">
                        <h1 className="lg:text-7xl mb-5 md:text-4xl text-white text-3xl font-bold">
                            Workshop
                        </h1>
                    </div>
                </div>

                <div class="container mx-auto bg-white my-10 p-10 max-w-6xl">
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-5 flex justify-center items-center">
                        <div>
                            <img 
                            src="https://tz47gb.yourbrand.studio/files/dynamicContent/sites/tz47gb/images/en/productpage_9/m66gvqwa/element_363/rwdMode_1/666x666/Workshop_1.webp" 
                            alt="Workshop image" 
                            class="rounded-lg shadow-lg w-full max-w-md h-[70vh] object-cover"
                            />
                        </div>

                
                        <div class="bg-white p-6 lg:w-[500px]">
                            <h2 class="lg:text-4xl font-bold mb-4 text-gray-900">Online workshops</h2>
                            <p class=" mb-6">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elementum sapien ac sapien vestibulum posuere. 
                                Praesent congue dui nec lectus tincidunt elementum. Donec viverra a neque vel egestas. Ut quis urna orci. 
                                Nullam sollicitudin est et quam rhoncus, nec imperdiet sem efficitur. Etiam aliquam posuere hendrerit. 
                                Curabitur egestas sed nisl rhoncus finibus.
                            </p>
                            
                            <div class="flex items-center gap-8 pt-10">
                                <a href="#" class="subscribe-btn px-10 py-3 hover:bg-[#7a3b3b] transition">Subscribe</a>
                                <a href="#" class="show-btn text-[#7a3b3b] border-[#7a3b3b] border-b-2 px-8 py-3 hover:text-[#5a2b2b] transition">Show more</a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* section two */}
                <div class="container mx-auto bg-white my-10 p-10 max-w-6xl">
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-5 flex justify-center items-center">
                        
                        <div class="bg-white p-6 lg:w-[500px]">
                            <h2 class="lg:text-4xl font-bold mb-4 text-gray-900">Workshops for adults</h2>
                            <p class=" mb-6">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Aenean elementum sapien ac sapien vestibulum posuere. Praesent congue dui nec lectus tincidunt elementum. 
                                Donec viverra a neque vel egestas. Ut quis urna orci. Nullam sollicitudin est et quam rhoncus, 
                                nec imperdiet sem efficitur. Etiam aliquam posuere hendrerit. 
                            </p>
                            
                            <div class="flex items-center gap-8 pt-10">
                                <a href="#" class="subscribe-btn px-10 py-3 hover:bg-[#7a3b3b] transition">Subscribe</a>
                                <a href="#" class="show-btn text-[#7a3b3b] border-[#7a3b3b] border-b-2 px-8 py-3 hover:text-[#5a2b2b] transition">Show more</a>
                            </div>
                        </div>


                        <div>
                            <img 
                            src="https://tz47gb.yourbrand.studio/files/dynamicContent/sites/tz47gb/images/en/productpage_10/m66gvra7/element_363/rwdMode_1/666x666/Workshop_2.webp" 
                            alt="Workshop image" 
                            class="rounded-lg shadow-lg w-full max-w-md h-[70vh] object-cover"
                            />
                        </div>
                    </div>
                </div>

                {/* section 3 */}
                <div class="container mx-auto bg-white my-10 p-10 max-w-6xl">
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-5 flex justify-center items-center">
                        <div>
                            <img 
                            src="https://tz47gb.yourbrand.studio/files/dynamicContent/sites/tz47gb/images/en/newspage_16/m66gvqb6/element_328/rwdMode_1/930x500/Workshop_3_blog_B.webp" 
                            alt="Workshop image" 
                            class="rounded-lg shadow-lg w-full max-w-md h-[70vh] object-cover"
                            />
                        </div>

                
                        <div class="bg-white p-6 lg:w-[500px]">
                            <h2 class="lg:text-4xl font-bold mb-4 text-gray-900">Workshops for Children</h2>
                            <p class=" mb-6">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elementum sapien ac sapien vestibulum posuere. 
                                Praesent congue dui nec lectus tincidunt elementum. Donec viverra a neque vel egestas. Ut quis urna orci. 
                                Nullam sollicitudin est et quam rhoncus, nec imperdiet sem efficitur. Etiam aliquam posuere hendrerit. 
                                Curabitur egestas sed nisl rhoncus finibus.
                            </p>
                            
                            <div class="flex items-center gap-8 pt-10">
                                <a href="#" class="subscribe-btn px-10 py-3 hover:bg-[#7a3b3b] transition">Subscribe</a>
                                <a href="#" class="show-btn text-[#7a3b3b] border-[#7a3b3b] border-b-2 px-10 py-3 hover:text-[#5a2b2b] transition">Show more</a>
                            </div>
                        </div>
                    </div>
                </div>

               
                {/* section 4 */}
                <div class="container mx-auto bg-white my-10 p-10 max-w-6xl">
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-5 flex justify-center items-center">
                        
                        <div class="bg-white p-6 lg:w-[500px]">
                            <h2 class="lg:text-4xl font-bold mb-4 text-gray-900">Workshops for Companies</h2>
                            <p class=" mb-6">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elementum sapien ac sapien vestibulum posuere. 
                                Praesent congue dui nec lectus tincidunt elementum. Donec viverra a neque vel egestas. Ut quis urna orci. 
                                Nullam sollicitudin est et quam rhoncus, nec imperdiet sem efficitur. Etiam aliquam posuere hendrerit. 
                                Curabitur egestas sed nisl rhoncus finibus.
                            </p>
                            
                            <div class="flex items-center gap-8 pt-10">
                                <a href="#" class="subscribe-btn px-10 py-3 hover:bg-[#7a3b3b] transition">Subscribe</a>
                                <a href="#" class="show-btn text-[#7a3b3b] border-[#7a3b3b] border-b-2 px-10 py-3 hover:text-[#5a2b2b] transition">Show more</a>
                            </div>
                        </div>

                        <div>
                            <img 
                            src="https://tz47gb.yourbrand.studio/files/dynamicContent/sites/tz47gb/images/en/productpage_6/m66gvrhr/element_363/rwdMode_1/666x666/Workshop_4.webp" 
                            alt="Workshop image" 
                            class="rounded-lg shadow-lg w-full max-w-md h-[70vh] object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    );
}

export default Ceramicworkshop 
