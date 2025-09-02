import { useState } from 'react'
import { Link } from "react-router-dom";

const OurStory= () => {
    return(
        <>
            <section
                className="header 
                bg-[url(https://tz47gb.yourbrand.studio/files/dynamicContent/sites/tz47gb/images/en/webpage_11/m66gvjjz/element_241/rwdMode_1/2400x800/history.webp)] 
                bg-center h-full bg-cover bg-no-repeat bg-fixed flex items-center"
            >

                <div className="relative md:text-left  text-white px-4 py-40 md:max-w-xl md:mx-30 z-20 text-center">
                    <h1 className=" lg:text-7xl mb-5 md:text-4xl text-white text-3xl font-bold">
                        Our Story
                    </h1>
                    <p className="lg:text-xl md:text-lg  text-white">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elementum sapien ac sapien vestibulum posuere. 
                        Praesent congue dui nec lectus tincidunt elementum. Donec viverra a neque vel egestas. Ut quis urna orci. 
                        Nullam sollicitudin est et quam rhoncus, nec imperdiet sem efficitur. Etiam aliquam posuere hendrerit. 
                        Curabitur egestas sed nisl rhoncus finibus.
                    </p>
                </div>
            </section>
        </>
    );
}

export default OurStory
