import React from "react";
import chooseUs from "../../assets/images/chooseUs.jpg";
const ChooseUs = () => {
  return (
    <div className="lg:my-20 my-8">
      <div className="flex lg:flex-row flex-col">
        <img
         data-aos="fade-right"
         data-aos-easing="ease-out-cubic"
         data-aos-duration="1000"
         className="lg:w-[400px] w-full" src={chooseUs} alt="" srcset="" />
        <div
           data-aos="fade-left"
           data-aos-easing="ease-out-cubic"
           data-aos-duration="1000"
         className="lg:ml-10 ml-2">
          <h1 className="lg:text-5xl text-2xl font-bold mb-4 mt-2">Why Choose <span className="text-orange-500">Us ?</span> </h1>
            <p className='text-gray-500 mb-2'>
             <span className="text-orange-500 font-semibold text-lg"> Diverse Expertise:</span>: our company specializes in a wide array of events, including anniversaries, retirement parties, weddings, engagements, baby showers, and birthdays.
            </p>
            <p className='text-gray-500 mb-2'>
           
              <span className="text-orange-500 font-semibold text-lg">Personalized Approach:</span> We understand the uniqueness of each celebration and tailor every detail to match your style and preferences.
            </p>
            <p className='text-gray-500 mb-2'>
            <span className="text-orange-500 font-semibold text-lg">Experienced Professionals:</span>  Our seasoned professionals bring creativity, meticulous planning, and design expertise to ensure your event is a success.
            </p>
            <p className='text-gray-500 mb-2'>
            <span className="text-orange-500 font-semibold text-lg">Stress-Free Celebrations:</span> When you choose [Your Company Name], you can relax and savor the moment. We take care of everything, from elegant decorations to seamless coordination, leaving you stress-free and able to enjoy the occasion.
            </p>
            <p className='text-gray-500 mb-2'>
           <span className="text-orange-500 font-semibold text-lg"> Memorable Moments:</span>  handle everything, from decorations to coordination, leaving you to enjoy stress-free, unforgettable moments.
            </p>
            <p className='text-gray-500 mb-2'>
            <span className="text-orange-500 font-semibold text-lg">Trusted Partner:</span> With our company, your special occasions become cherished memories that last a lifetime.
            </p>
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
