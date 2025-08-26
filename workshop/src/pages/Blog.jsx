import { useState } from 'react'
import { Link } from "react-router-dom";
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const Blog= () => {
    return(
        <>
          <Nav/>
          <section className="blog">
            <div className="bg-[url(https://tz47gb.yourbrand.studio/files/dynamicContent/sites/tz47gb/images/en/webpage_12/m66gvisn/element_243/rwdMode_1/2400x284/blog_header_product_4.webp)] 
              bg-center h-full bg-cover bg-no-repeat bg-fixed flex items-center mb-12">
              <div className="relative text-center text-white px-4 py-40 max-w-4xl mx-auto z-20">
                  <h1 className="lg:text-7xl mb-5 md:text-4xl text-white text-3xl font-bold">
                    Blog
                  </h1>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">

              {/* left content */}
              <div className="space-y-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                  <div className="">
                    <img className="product-image max-w-sm mx-auto my-5 md:mb-5 w-full h-48 sm:h-56 md:h-64 lg:h-80 object-cover rounded-lg shadow-sm"
                      src="https://tz47gb.yourbrand.studio/files/dynamicContent/sites/tz47gb/images/en/newspage_17/m66gvpat/element_328/rwdMode_1/930x500/Workshop_header_blog_A.webp" 
                      alt="" 
                    />
                  </div>

                  <div className="px-6 py-3">
                    <h2 className= "text-lg mt-7 font-bold mb-2">What affects the quality of Ceramic products ?</h2>
                    <p className= "text-gray-500 mb-3  text-sm">17 August 2022</p>
                    <p className= "text-gray-800 mb-4 text-sm">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam fermentum nisi nec massa rhoncus venenatis. 
                      Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Phasellus suscipit...
                    </p>
                    <a 
                      href="https://tz47gb.yourbrand.studio/what-affects-the-quality-of-ceramic-products"
                      className="text-gray-500 cursor-pointer font-medium"
                      target="_blank">
                      Read more
                    </a>
                  </div>

                  <hr className="lg:col-span-2 text-gray-600"/>


                  <div className="">
                    <img className="product-image max-w-sm mx-auto my-5 md:mb-5 w-full h-48 sm:h-56 md:h-48 lg:h-80 object-cover rounded-lg shadow-sm"
                      src="https://tz47gb.yourbrand.studio/files/dynamicContent/sites/tz47gb/images/en/newspage_16/m66gvqb6/element_328/rwdMode_1/930x500/Workshop_3_blog_B.webp" 
                      alt="" 
                    />
                  </div>

                  <div className="px-6 py-3">
                    <h2 className= "text-lg mt-7 font-bold ">How Ceramics are made ?</h2>
                    <p className= "text-gray-500 my-3">17 August 2022</p>
                    <p className= "text-gray-800 mb-3 ">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam fermentum nisi nec massa rhoncus venenatis. 
                      Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Phasellus suscipit...
                    </p>
                    <a 
                      href="https://tz47gb.yourbrand.studio/what-affects-the-quality-of-ceramic-products"
                      className="text-gray-500 cursor-pointer font-medium"
                      target="_blank">
                      Read more
                    </a>
                  </div>

                  <hr className="lg:col-span-2 text-gray-600"/>

                </div>
              </div>


                {/* right content */}
                
                <div className="bg-white p-4 rounded-lg">
                    <div className="space-y-8 text-center">
                      <div>
                        <img className="mb-5 max-w-sm mx-auto md:mb-5 w-full h-50 sm:h-56 md:h-62 lg:h-60 object-cover rounded-lg shadow-sm"
                          src="https://tz47gb.yourbrand.studio/files/dynamicContent/sites/tz47gb/images/en/webpage_12/m66gvisn/element_245/rwdMode_1/300x200/blog_social.webp" 
                          alt="" 
                        />
                              
                        {/* socials */}
                        <h2 className="font-bold text-2xl my-2">Our social media</h2>
                        <div className="socials flex  justify-center gap-4 pb-2 mt-4 mb-10">
                            <i className="fab fa-facebook text-green-300 hover:text-white cursor-pointer text-2xl"></i>
                            <i className="fab fa-twitter text-green-300 hover:text-white cursor-pointer text-2xl"></i>
                            <i className="fab fa-instagram text-green-300 hover:text-white cursor-pointer text-2xl"></i>
                        </div>
                      </div>
                    </div>

                    {/* form */}
                    <h2 className="text-lg mb-6 text-center">Subscribe to our newsletter</h2>

                    <form className="space-y-6 max-w-sm mx-auto">
                        <div className="mb-2">
                            <label for="fname" className="text-gray-700 text-sm font-medium">First Name:</label>
                            <input type="text" 
                                className="block mt-1 w-full px-3 py-2 border border-gray-300 focus:border-teal-500 focus:ring-teal-500" 
                                id="fname" required 
                                placeholder="Emily"
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
                              rows={4} required
                            />
                        </div>

                        <div className="mb-2 flex justify-center">
                          <button type="submit" className="btn text-white px-10 py-3 font-medium text-uppercase border-0">
                            SEND
                          </button>
                        </div>
                    </form>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mt-15">
              <div>
                <img className="product-image max-w-sm mx-auto my-5 md:mb-5 w-full h-48 sm:h-56 md:h-64 lg:h-80 object-cover rounded-lg shadow-sm"
                  src="https://tz47gb.yourbrand.studio/files/dynamicContent/sites/tz47gb/images/en/newspage_18/m66gvobu/element_328/rwdMode_1/930x500/blog_3.webp" 
                  alt=""
                />
                <div className="px-6 py-3">
                  <h2 className= "text-lg mt-7 font-bold mb-2">Ceramics soup bowl</h2>
                  <p className= "text-gray-500 m-3  text-sm">17 August 2022</p>
                  <p className= "text-gray-800 m-2 text-sm lg:text-lg">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam fermentum nisi nec massa rhoncus venenatis. 
                    Vestibulum ante ipsum primis in...
                  </p>
                  <a 
                    href="https://tz47gb.yourbrand.studio/what-affects-the-quality-of-ceramic-products"
                    className="px-3 text-gray-500 cursor-pointer font-medium"
                    target="_blank">
                    Read more
                  </a>
                </div>
              </div>

              {/*  */}
              <div>
                <img className="product-image max-w-sm mx-auto my-5 md:mb-5 w-full h-48 sm:h-56 md:h-64 lg:h-80 object-cover rounded-lg shadow-sm"
                  src="https://tz47gb.yourbrand.studio/files/dynamicContent/sites/tz47gb/images/en/newspage_17/m66gvpat/element_328/rwdMode_1/930x500/Workshop_header_blog_A.webp" 
                  alt=""
                />
                <div className="px-6 py-3">
                  <h2 className= "text-lg mt-7 font-bold mb-2">What affects the quality of Ceramics products</h2>
                  <p className= "text-gray-500 mb-3  text-sm">17 August 2022</p>
                  <p className= "text-gray-800 mb-2 text-smc lg:text-lg">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam fermentum nisi nec massa rhoncus venenatis. 
                    Vestibulum ante ipsum primis in...
                  </p>
                  <a 
                    href="https://tz47gb.yourbrand.studio/what-affects-the-quality-of-ceramic-products"
                    className="text-gray-500 cursor-pointer font-medium"
                    target="_blank">
                    Read more
                  </a>
                </div>
              </div>

              {/*  */}
              <div>
                <img className="product-image max-w-sm mx-auto my-5 md:mb-5 w-full h-48 sm:h-56 md:h-64 lg:h-80 object-cover rounded-lg shadow-sm"
                  src="https://tz47gb.yourbrand.studio/files/dynamicContent/sites/tz47gb/images/en/newspage_16/m66gvqb6/element_328/rwdMode_1/930x500/Workshop_3_blog_B.webp" 
                  alt=""
                />
                <div className="px-6 py-3">
                  <h2 className= "text-lg mt-7 font-bold mb-2">How Ceramics are made</h2>
                  <p className= "text-gray-500 mb-3  text-sm">17 August 2022</p>
                  <p className= "text-gray-800 mb-2 text-sm lg:text-lg">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam fermentum nisi nec massa rhoncus venenatis. 
                    Vestibulum ante ipsum primis in...
                  </p>
                  <a 
                    href="https://tz47gb.yourbrand.studio/what-affects-the-quality-of-ceramic-products"
                    className="text-gray-500 cursor-pointer font-medium"
                    target="_blank">
                    Read more
                  </a>
                </div>
              </div>
            </div>
            <hr className="my-10 max-w-6xl mx-auto text-gray-700"/>
          </section>
          <Footer/>
        </>
    );
}

export default Blog
