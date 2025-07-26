import { useState } from 'react'
import { Link } from "react-router-dom";

const BestSeller= () => {
  return(
    <>
       <section className="bg-white my-8 md:mt-12 px-4 sm:px-8 md:px-12 lg:px-20 py-8 md:py-12">
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-center mb-5">BestSeller</h1>
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
      </section>
    </>
    );
}

export default BestSeller
