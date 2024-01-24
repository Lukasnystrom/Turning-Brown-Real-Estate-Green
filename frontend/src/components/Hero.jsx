import React from 'react';
import Img from '../assets/green-real-estate-2-1.jpg'

const Hero = () => {
  return (
    <div className='w-full text-black bg-zinc-600/90 relative'>
      <div className='absolute top-0 left-0 h-full w-full text-center flex flex-col justify-center text-black'>
        <div className='bg-white mx-auto p-8 rounded-md z-10 shadow-xl'>
        <p className='text-[#00df9a] font-bold p-2 text-2xl'>
          
        </p>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold'>
        Transition your real estate 
        </h1>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
        from brown to green.
        </h1>
        <div className='flex justify-center items-center'>
          <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>
            Easy, Fast and flexible solution to get your real estate eco certifide.
          </p>
        </div>
        <p className='md:text-2xl text-xl font-bold text-gray-500'>Monitor your real estates transition from brown to eco friendly.</p>
        <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black border hover:scale-105 shadow-2xl duration-300 '>Get Started</button>
        </div>
      </div>
      <img className='w-full h-screen object-cover mix-blend-overlay' src={Img} alt="/" />
    </div>
  );
};

export default Hero;