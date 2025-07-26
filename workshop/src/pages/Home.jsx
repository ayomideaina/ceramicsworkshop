import React from 'react';
import Header from '../components/Header';
import BestSeller from '../components/BestSeller';
import New from '../components/New';
import Work from '../components/Works';
import Works from '../components/Works';
import Employee from '../components/Employee';


const Home = () => {
    return(
        <>
           <Header/>
           <BestSeller/>
           <New/>
           <Works/>
           <Employee/>
        </>
    );
}










export default Home;