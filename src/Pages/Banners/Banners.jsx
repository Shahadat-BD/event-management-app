import React from 'react';
import './Banner.css'
const Banners = () => {
    return (
        <div className='banner-added'>
            <div className='flex justify-center items-center lg:h-[600px] h-[350px]'>
                <div className='text-center'>
                    <h1 className='lg:text-8xl md:text-2xl text-3xl text-center text-white font-semibold'>The Best <span  className='text-orange-500'>Social Events</span> <br/>
                        In the world</h1>
                <button className='text-white bg-orange-500 px-12 py-4 mt-5 font-bold text-lg'>Explore Now</button>
                </div>
            </div>
        </div>
    );
};

export default Banners;