import React from 'react';
import {
    AiFillFacebook,
    AiFillInstagram,
    AiFillLinkedin,
    AiFillTwitterSquare,
  } from "react-icons/ai";
import review_1 from '../../assets/images/review/review-1.jpg'
import review_2 from '../../assets/images/review/review-2.jpg'
import review_3 from '../../assets/images/review/review-3.jpg'
import review_4 from '../../assets/images/review/review-4.jpg'
import review_5 from '../../assets/images/review/review-5.jpg'
import review_6 from '../../assets/images/review/review-6.jpg'
const Review = () => {
    return (
        <div className='my-20 lg:w-[85%] w-[90%] m-auto'>
              <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-center gap-5'> 
                 <div className='text-center bg-gray-50 rounded-lg p-5'>
                 <img className='w-16 h-16 rounded-full m-auto absolute -mt-14 ml-32' src={review_1} alt="" srcset="" />
                  <h1 className='text-2xl text-orange-500 font-semibold my-3'>Michel David</h1>
                  <p className=''>Our anniversary was magical, thanks to social event company. Every detail was perfect, and we felt truly cherished. An unforgettable day filled with love and joy.</p>
                  <div className="flex items-center mt-5 justify-center">
                  <AiFillFacebook className="text-4xl font-bold mr-2" />
                  <AiFillInstagram className="text-4xl font-bold mr-2" />
                  <AiFillLinkedin className="text-4xl font-bold mr-2" />
                  <AiFillTwitterSquare className="text-4xl font-bold mr-2" />
                </div>
                 </div>
                 <div className='text-center bg-gray-50 rounded-lg p-5 lg:mt-0 md:mt-0 mt-8'>
                 <img className='w-16 h-16 rounded-full m-auto absolute -mt-14 ml-32' src={review_3} alt="" srcset="" />
                  <h1 className='text-2xl text-orange-500 font-semibold my-3'>Adein Markram</h1>
                  <p className=''>social event company made my retirement party. The planning, decor, and coordination were impeccable. A memorable day celebrating my journey.</p>
                  <div className="flex items-center mt-5 justify-center">
                  <AiFillFacebook className="text-4xl font-bold mr-2" />
                  <AiFillInstagram className="text-4xl font-bold mr-2" />
                  <AiFillLinkedin className="text-4xl font-bold mr-2" />
                  <AiFillTwitterSquare className="text-4xl font-bold mr-2" />
                </div>
                 </div>

                 <div className='text-center bg-gray-50 rounded-lg p-5 lg:mt-0 md:mt-8 mt-8'>
                 <img className='w-16 h-16 rounded-full m-auto absolute -mt-14 ml-32' src={review_2} alt="" srcset="" />
                  <h1 className='text-2xl text-orange-500 font-semibold my-3'>Sophia sing</h1>
                  <p className=''>Our wedding was a dream come true, all thanks to social event company. From breathtaking decor to flawless execution, it was perfect in every way.</p>
                  <div className="flex items-center mt-5 justify-center">
                  <AiFillFacebook className="text-4xl font-bold mr-2" />
                  <AiFillInstagram className="text-4xl font-bold mr-2" />
                  <AiFillLinkedin className="text-4xl font-bold mr-2" />
                  <AiFillTwitterSquare className="text-4xl font-bold mr-2" />
                </div>
                 </div>

                 <div className='text-center bg-gray-50 mt-8 rounded-lg p-5'>
                 <img className='w-16 h-16 rounded-full m-auto absolute -mt-14 ml-32' src={review_4} alt="" srcset="" />
                  <h1 className='text-2xl text-orange-500 font-semibold my-3'>William Henry</h1>
                  <p className=''>An enchanting engagement party thanks to social events company. Their creativity and attention to detail created a night of joy and excitement.</p>
                  <div className="flex items-center mt-5 justify-center">
                  <AiFillFacebook className="text-4xl font-bold mr-2" />
                  <AiFillInstagram className="text-4xl font-bold mr-2" />
                  <AiFillLinkedin className="text-4xl font-bold mr-2" />
                  <AiFillTwitterSquare className="text-4xl font-bold mr-2" />
                </div>
                 </div>
                 <div className='text-center bg-gray-50 mt-8 rounded-lg p-5'>
                 <img className='w-16 h-16 rounded-full m-auto absolute -mt-14 ml-32' src={review_5} alt="" srcset="" />
                  <h1 className='text-2xl text-orange-500 font-semibold my-3'>Olivia Mallik</h1>
                  <p className=''>Our baby shower hosted by social events company was charming and heartwarming. The decorations were adorable, and it was a good day for me </p>
                  <div className="flex items-center mt-5 justify-center">
                  <AiFillFacebook className="text-4xl font-bold mr-2" />
                  <AiFillInstagram className="text-4xl font-bold mr-2" />
                  <AiFillLinkedin className="text-4xl font-bold mr-2" />
                  <AiFillTwitterSquare className="text-4xl font-bold mr-2" />
                </div>
                 </div>
                 <div className='text-center bg-gray-50 mt-8 rounded-lg p-5'>
                 <img className='w-16 h-16 rounded-full m-auto absolute -mt-14 ml-32' src={review_6} alt="" srcset="" />
                  <h1 className='text-2xl text-orange-500 font-semibold my-3'>Samuel Jonson</h1>
                  <p className=''>Thanks to social events company, our child's birthday party was a hit. The team's creativity and organization made it a fun and stress-free day.</p>
                  <div className="flex items-center mt-5 justify-center">
                  <AiFillFacebook className="text-4xl font-bold mr-2" />
                  <AiFillInstagram className="text-4xl font-bold mr-2" />
                  <AiFillLinkedin className="text-4xl font-bold mr-2" />
                  <AiFillTwitterSquare className="text-4xl font-bold mr-2" />
                </div>
                 </div>
              </div>
        </div>
    );
};

export default Review;