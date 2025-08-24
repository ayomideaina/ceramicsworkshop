import { useState } from 'react'
import { Link } from "react-router-dom";
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const Shop= () => {
  return(
    <>
      <Nav/>
      <section className="shop">
        <div className="bg-[url(https://tz47gb.yourbrand.studio/files/dynamicContent/sites/tz47gb/images/en/webpage_11/m66gvjjz/element_241/rwdMode_1/2400x800/history.webp)] 
          bg-center h-full bg-cover bg-no-repeat bg-fixed flex items-center">
          <div className="relative text-center text-white px-4 py-40 max-w-4xl mx-auto z-20">
            <h1 className="lg:text-7xl mb-5 md:text-4xl text-white text-3xl font-bold">
              Shop
            </h1>
          </div>
        </div>


        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 py-4 md:py-7 mx-4 sm:mx-8 md:mx-12 lg:mx-20 gap-4 sm:gap-6 md:gap-8 lg:gap-10">
          <div className="text-center">
            <img className="product-image mb-3 md:mb-5 w-full h-50 sm:h-56 md:h-64 lg:h-72 object-cover rounded-lg shadow-sm" 
              src="https://tz47gb.yourbrand.studio/files/dynamicContent/sites/tz47gb/images/en/productpage_2/m66gvshu/element_363/rwdMode_1/666x666/product_3.webp" 
              alt="" 
            />
            <p className="text-xl mb-2">Sara Mug</p>
            <p className="text-bold mb-2"> 20 USD</p>
          </div>

          <div className="text-center">
            <img className="product-image mb-3 md:mb-5 w-full h-50 sm:h-56 md:h-64 lg:h-72 object-cover rounded-lg shadow-sm"
              src="https://tz47gb.yourbrand.studio/files/dynamicContent/sites/tz47gb/images/en/productpage_4/m66gvt5h/element_363/rwdMode_1/666x666/product_6.webp" 
              alt="" 
            />
            <p className="text-xl mb-2">Moon Plate</p>
            <p className="text-bold mb-2"> 30 USD</p>
          </div>

          <div className="text-center">
            <img className="product-image mb-3 md:mb-5 w-full h-50 sm:h-56 md:h-64 lg:h-72 object-cover rounded-lg shadow-sm"
                src="https://tz47gb.yourbrand.studio/files/dynamicContent/sites/tz47gb/images/en/productpage_8/m66gvrvb/element_363/rwdMode_1/666x666/product_4C.webp" 
                alt="" 
            />
            <p className="text-xl mb-2">Silver Set</p>
            <p className="text-bold mb-2"> 40 USD</p>
          </div>

          <div className="text-center">
            <img className="product-image mb-3 md:mb-5 w-full h-50 sm:h-56 md:h-64 lg:h-72 object-cover rounded-lg shadow-sm"
                src="https://tz47gb.yourbrand.studio/files/dynamicContent/sites/tz47gb/images/en/productpage_10/m66gvra7/element_363/rwdMode_1/666x666/Workshop_2.webp" 
                alt="" 
            />
            <p className="text-xl mb-2">Workshops for adults</p>
            <p className="text-bold mb-2"> 210 USD</p>
          </div>
        </div> 


         {/* second div */}
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 py-4 md:py-7 mx-4 sm:mx-8 md:mx-12 lg:mx-20 gap-4 sm:gap-6 md:gap-8 lg:gap-10">
          <div className="text-center">
            <img className="product-image mb-3 md:mb-5 w-full h-50 sm:h-56 md:h-64 lg:h-72 object-cover rounded-lg shadow-sm" 
              src="https://tz47gb.yourbrand.studio/files/dynamicContent/sites/tz47gb/images/en/productpage_9/m66gvqwa/element_363/rwdMode_1/666x666/Workshop_1.webp" 
              alt="" 
            />
            <p className="text-xl mb-2 text-bold">Workshop for Children</p>
            <p className="text-bold mb-2"> 200 USD</p>
          </div>

          <div className="text-center">
            <img className="product-image mb-3 md:mb-5 w-full h-50 sm:h-56 md:h-64 lg:h-72 object-cover rounded-lg shadow-sm"
              src="https://tz47gb.yourbrand.studio/files/dynamicContent/sites/tz47gb/images/en/productpage_6/m66gvrhr/element_363/rwdMode_1/666x666/Workshop_4.webp" 
              alt="" 
            />
            <p className="text-xl mb-2">Workshop for Companies</p>
            <p className="text-bold mb-2"> 230 USD</p>
          </div>

          <div className="text-center">
            <img className="product-image mb-3 md:mb-5 w-full h-50 sm:h-56 md:h-64 lg:h-72 object-cover rounded-lg shadow-sm"
              src="https://tz47gb.yourbrand.studio/files/dynamicContent/sites/tz47gb/images/en/productpage_7/m66gvrni/element_363/rwdMode_1/666x666/Workshop_header_blog_A.webp" 
              alt="" 
            />
            <p className="text-xl mb-2">Online Workshop</p>
            <p className="text-bold mb-2"> 150 USD</p>
          </div>

          <div className="text-center">
            <img className="product-image mb-3 md:mb-5 w-full h-50 sm:h-56 md:h-64 lg:h-72 object-cover rounded-lg shadow-sm"
              src="https://tz47gb.yourbrand.studio/files/dynamicContent/sites/tz47gb/images/en/productpage_5/m66gvr20/element_363/rwdMode_1/666x666/product_1.webp" 
              alt="" 
            />
            <p className="text-xl mb-2">Star Set</p>
            <p className="text-bold mb-2"> 80 USD</p>
          </div>
       </div> 
       <Footer/>
      </section>
    </>
    );
}

export default Shop
