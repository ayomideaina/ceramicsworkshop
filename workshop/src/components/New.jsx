import { useState } from 'react'
import { Link } from "react-router-dom";

const New= () => {
  return(
    <>
       <section className="bg-gray-100 my-8 md:mt-12 px-4 sm:px-8 md:px-12 lg:px-20 py-8 md:py-12 h-auto">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                {/* Left column : Text content */}
                <div className="text-center lg:text-left">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5">New</h1>
                    <p className="text-base md:text-lg leading-relaxed max-w-md"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elementum sapien ac sapien vestibulum posuere. 
                        Praesent congue dui nec lectus tincidunt elementum. Donec viverra a neque vel egestas. Ut quis urna orci. 
                        Nullam sollicitudin est et quam rhoncus, nec imperdiet sem efficitur. 
                        Etiam aliquam posuere hendrerit. Curabitur egestas sed nisl rhoncus finibus.
                    </p>
                    <Link to="/shop">
                        <button className="btn px-15 py-3 text-lg mt-9 m-auto text-white">More</button>
                    </Link>
                </div>
                {/* Right column: 2 columns with 3 images  */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 ">
                    <div className="flex flex-row md:flex-col md:flex-cols-2 gap-4 md:gap-6 order-2 md:order-1">
                        <img className="w-1/2 mx:auto md:w-full aspect-square object-cover rounded-lg shadow-sm" 
                            src="https://tz47gb.yourbrand.studio/files/dynamicContent/sites/tz47gb/images/en/productpage_2/m66gvshu/element_363/rwdMode_1/666x666/product_3.webp" 
                            alt="" 
                        />
                        <img className=" w-1/2 md:w-full h-full aspect-square object-cover rounded-lg shadow-sm"
                            src="https://tz47gb.yourbrand.studio/files/dynamicContent/sites/tz47gb/images/en/productpage_2/m66gvshu/element_363/rwdMode_1/666x666/product_3.webp" 
                            alt="" 
                        />
                    </div>
                
                    <div className="order-1 md:row-span-2 md:order-2">
                        <img className="w-full h-full object-cover rounded-lg shadow-sm"
                            src="https://tz47gb.yourbrand.studio/files/dynamicContent/sites/tz47gb/images/en/productpage_2/m66gvshu/element_363/rwdMode_1/666x666/product_3.webp" 
                            alt="" 
                        />
                    </div>
                </div>
            </div> 
      </section>
    </>
    );
}

export default New
