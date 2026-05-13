import React from 'react';
import BestSeller from '../components/BestSeller';
import New from '../components/New';
import Work from '../components/Works';
import Works from '../components/Works';
import Employee from '../components/Employee';
import OurStory from '../components/OurStory';
import Hero from '../components/Hero';


const Home = () => {
    return(
        <>
            <Hero/> 
           <BestSeller/>
           <New/>
           <Works/>
           <Employee/>
           <OurStory/>
        </>
    );
}










export default Home;