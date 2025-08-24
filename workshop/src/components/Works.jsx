import { useState } from 'react'
import { Link } from "react-router-dom";

const Works= () => {
  return(
    <>
       <section className="bg-white my-8 md:mt-12 px-4 sm:px-8 md:px-12 lg:px-20 py-8 md:py-12">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-center">
                {/* left column */}
                <div className="grid grid-cols-1 gap-4 md:gap-6 ">
                    <img className="w-full h-150 object-cover rounded-lg shadow-sm"
                        src="https://tz47gb.yourbrand.studio/files/dynamicContent/sites/tz47gb/images/en/webpage_11/m66gvjjz/element_220/rwdMode_1/600x565/Workshop_4.webp" 
                        alt="" 
                    />
                </div>

                {/* Right column : Text content */}
                <div className="text-center lg:text-left">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5">Workshops</h1>
                    <p className="text-base md:text-lg leading-relaxed max-w-md"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elementum sapien ac sapien vestibulum posuere. 
                        Praesent congue dui nec lectus tincidunt elementum. Donec viverra a neque vel egestas. Ut quis urna orci. 
                        Nullam sollicitudin est et quam rhoncus, nec imperdiet sem efficitur. 
                        Etiam aliquam posuere hendrerit. Curabitur egestas sed nisl rhoncus finibus.
                    </p>
                    <Link to="/workshop">
                        <button className="btn px-10 py-3 text-lg mt-9 m-auto text-white">Subscribe</button>
                    </Link>
                </div>
            </div> 
      </section>
    </>
    );
}

export default Works
