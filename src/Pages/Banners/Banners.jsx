import React from 'react';
import './Banner.css'
import {AiOutlineArrowRight} from 'react-icons/ai'
const Banners = () => {
    return (
        <div className='banner-added'>
            <div className='flex justify-center items-center lg:h-[600px] h-[350px]'>
                <div className='text-center '>
                    <h1 className='lg:text-8xl md:text-2xl text-3xl text-center text-white font-semibold'>The Best <span  className='text-orange-500'>Social Events</span> <br/>
                        In the world</h1>
                <button className='text-white bg-orange-500 lg:px-12 lg:py-4 px-4 py-2  lg:mt-10 mt-5 font-bold lg:text-lg text-md items-center '>Explore Now <AiOutlineArrowRight className='float-right lg:mt-[3px] mt-1 ml-2 lg:text-2xl'/> </button>
                </div>
            </div>
        </div>
    );
};

export default Banners;