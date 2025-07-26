import { useState } from 'react'
import { Link } from "react-router-dom";
import Nav from '../components/Nav';

const Blog= () => {
    return(
        <>
          <Nav/>
          <h1 className='text-red-500 bg-sky-500'>it is Blog Page</h1>
        </>
    );
}

export default Blog
