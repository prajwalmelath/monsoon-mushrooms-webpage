import React from 'react';
import background from '../assets/background.png';
import Navbar from './Nabar';
import { Team } from './Team';
import { AboutUs } from './AboutUs'
import { OurServices } from './OurServices';
import { Contact } from './Contact'

export const LandingPage = () => {
  return (
    <div className='bg-gray-100'>
    <Navbar></Navbar>
    <img src={background} alt='' className='object-cover h-screen w-screen brightness-50'>
    </img>
    <div className="w-full absolute top-0 left-0 text-center mt-28 ">
    <h1 className="text-xl font-bold tracking-tight text-white font-sans uppercase sm:text-4xl ">
       monsoon<br className='hidden sm:flex'/> mushrooms
    </h1>
    </div>
    <div className="w-full absolute top-0 left-0 text-center mt-72">
    <h1 className="text-4xl tracking-tight text-white sm:text-8xl font-thin font-serif">
     Fresh & Organic <br/> Mushrooms
    </h1>
    </div>
    <AboutUs/>
    <div className="bg-white ">
    <OurServices/>
    </div>
    <div className='bg-gray-100'>
    <Team/>
    </div>
    <div className='bg-gray-700 bg-blend-darken'>
     <Contact/>
    </div>
    </div>
  );
};
