import React from 'react';
import wedding_2 from '../../assets/images/wedding/weeding-2.jpg'
import wedding_3 from '../../assets/images/wedding/wedding-3.jpg'
import wedding_4 from '../../assets/images/wedding/wedding-4.jpg'
import wedding_5 from '../../assets/images/wedding/wedding-5.jpg'

import birthday_2 from '../../assets/images/birthday/birthday-1.jpg'
import birthday_3 from '../../assets/images/birthday/birthday-2.jpg'
import birthday_4 from '../../assets/images/birthday/birthday-3.jpeg'
import birthday_5 from '../../assets/images/birthday/birtday-4.jpg'

import anniversary_2 from '../../assets/images/anniversary/anniversary-1.jpg'
import anniversary_3 from '../../assets/images/anniversary/anniversary-2.jpg'
import anniversary_4 from '../../assets/images/anniversary/anniversary-3.jpg'
import anniversary_5 from '../../assets/images/anniversary/anninersary-4.jpeg'

import retirement_2 from '../../assets/images/retirement/retirement-1.jpg'
import retirement_3 from '../../assets/images/retirement/retirement-2.jpeg'
import retirement_4 from '../../assets/images/retirement/retirement-3.jpeg'
import retirement_5 from '../../assets/images/retirement/retirement-4.jpg'

import engagement_2 from '../../assets/images/engagement/engagement-1.jpeg'
import engagement_3 from '../../assets/images/engagement/engagement-2.jpeg'
import engagement_4 from '../../assets/images/engagement/engagement-3.jpeg'
import engagement_5 from '../../assets/images/engagement/engagement-4.jpg'

import baby_2 from '../../assets/images/babay-shower/babay-1.jpg'
import baby_3 from '../../assets/images/babay-shower/babay-2.jpeg'
import baby_4 from '../../assets/images/babay-shower/baby-3.jpeg'
import baby_5 from '../../assets/images/babay-shower/babay-4.jpg'


const Gallery = () => {
    return (
        <div className='my-10 w-[85%] m-auto'>
            {/* Recent Our wedding event management gallery */}
            <h1 className='lg:text-4xl md:text-3xl text-lg font-bold my-2 text-center'>Our Recent event management Work </h1>
             <div>
                <h1 className='text-pink-500 text-3xl font-bold my-2 text-center'>Wedding Event</h1>
                <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-2'>
                    <img className='w-full h-64 rounded-md' src={wedding_2} alt="" srcset="" />
                    <img className='w-full h-64 rounded-md' src={wedding_3} alt="" srcset="" />
                    <img className='w-full h-64 rounded-md' src={wedding_4} alt="" srcset="" />
                    <img className='w-full h-64 rounded-md' src={wedding_5} alt="" srcset="" />
                </div>
             </div>

             <div>
                <h1 className='text-pink-500 text-3xl font-bold my-5 text-center'> Birthday Parties Event</h1>
                <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-2'>
                    <img className='w-full h-64 rounded-md' src={birthday_2} alt="" srcset="" />
                    <img className='w-full h-64 rounded-md' src={birthday_3} alt="" srcset="" />
                    <img className='w-full h-64 rounded-md' src={birthday_4} alt="" srcset="" />
                    <img className='w-full h-64 rounded-md' src={birthday_5} alt="" srcset="" />
                </div>
             </div>
             <div>
                <h1 className='text-pink-500 text-3xl font-bold my-5 text-center'>Anniversary Event</h1>
                <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-2'>
                    <img className='w-full h-64 rounded-md' src={anniversary_2} alt="" srcset="" />
                    <img className='w-full h-64 rounded-md' src={anniversary_3} alt="" srcset="" />
                    <img className='w-full h-64 rounded-md' src={anniversary_4} alt="" srcset="" />
                    <img className='w-full h-64 rounded-md' src={anniversary_5} alt="" srcset="" />
                </div>
             </div>
             <div>
                <h1 className='text-pink-500 text-3xl font-bold my-5 text-center'> Retirement Event</h1>
                <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-2'>
                    <img className='w-full h-64 rounded-md' src={retirement_2} alt="" srcset="" />
                    <img className='w-full h-64 rounded-md' src={retirement_3} alt="" srcset="" />
                    <img className='w-full h-64 rounded-md' src={retirement_4} alt="" srcset="" />
                    <img className='w-full h-64 rounded-md' src={retirement_5} alt="" srcset="" />
                </div>
             </div>
             <div>
                <h1 className='text-pink-500 text-3xl font-bold my-5 text-center'> Baby shower Event</h1>
                <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-2'>
                    <img className='w-full h-64 rounded-md' src={baby_2} alt="" srcset="" />
                    <img className='w-full h-64 rounded-md' src={baby_3} alt="" srcset="" />
                    <img className='w-full h-64 rounded-md' src={baby_4} alt="" srcset="" />
                    <img className='w-full h-64 rounded-md' src={baby_5} alt="" srcset="" />
                </div>
             </div>
             <div>
                <h1 className='text-pink-500 text-3xl font-bold my-5 text-center'> Engagement Wedding Event</h1>
                <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-2'>
                    <img className='w-full h-64 rounded-md' src={engagement_2} alt="" srcset="" />
                    <img className='w-full h-64 rounded-md' src={engagement_3} alt="" srcset="" />
                    <img className='w-full h-64 rounded-md' src={engagement_4} alt="" srcset="" />
                    <img className='w-full h-64 rounded-md' src={engagement_5} alt="" srcset="" />
                </div>
             </div>
        </div>
    );
};

export default Gallery;