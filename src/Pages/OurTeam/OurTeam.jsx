import React from 'react';
import team_1 from '../../assets/images/team-1.jpg'
import team_2 from '../../assets/images/team-2.jpg'
import team_3 from '../../assets/images/team-3.jpg'
import { AiFillFacebook, AiFillInstagram, AiFillLinkedin, AiFillTwitterSquare } from 'react-icons/ai';
const OurTeam = () => {
    return (
       <div>
         <div className='text-center lg:mt-20 mt-8'>
            <h1 className='lg:text-5xl text-2xl font-bold my-3'>Event Management <span className='text-orange-500'>Team</span></h1>
            <p className='text-gray-500 lg:text-base text-sm lg:w-[70%] w-full m-auto mb-3'>We have three crazy team.Their job is to manage our social events services.Our Team is very dedicated and helpful.From the experience of last three years, we can say that our team is very well organized and we have good feedback from people about our team.</p>
        </div>

         <div className='mb-10' data-aos="fade-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000">
             
             <div className='mt-10 flex gap-5 lg:flex-row flex-col shadow-lg lg:border-r-4 border-b-4 lg:border-b-0 border-pink-500'>
                <img className='h-64 lg:w-80 w-full' src={team_1} alt="" srcset="" />
                <div className='lg:p-0 p-3'>
                    <h1 className='text-pink-500 font-semibold text-xl mb-2'>Anniversary and Retirement parties Team</h1>
                    <p className='text-gray-500 '>Our Department of Anniversary and Retirement Parties is a tight-knit team of professionals dedicated to crafting memorable celebrations. With expertise in event planning and decoration, we create beautiful anniversaries and retirement parties that honor milestones and create lasting memories. We're passionate about making your special moments truly exceptional.</p>
                    <div>
                        <p className='my-2 font-semibold'>About More Information</p>
                         <div className='flex items-center gap-3'>
                             <AiFillFacebook className='text-2xl'/>
                             <AiFillLinkedin className='text-2xl'/>
                             <AiFillTwitterSquare className='text-2xl'/>
                             <AiFillInstagram className='text-2xl'/>
                         </div>
                    </div>
                </div>
             </div>
             
         </div>

         <div className='mb-10' data-aos="fade-right"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="1000">
             <div className='flex gap-5 lg:flex-row flex-col shadow-lg lg:border-r-4 border-b-4 lg:border-b-0 border-blue-500'>
                <img className='h-64 lg:w-80 w-full' src={team_2} alt="" srcset="" />
                <div className='lg:p-0 p-3'>
                    <h1 className='text-blue-500 font-semibold text-xl mb-2'>Wedding and Engagement parties Team</h1>
                    <p className='text-gray-500 '>Our Wedding and Engagement Parties team is a dedicated group of professionals passionate about crafting magical celebrations. With expertise in event planning and design, we create unforgettable weddings and engagement parties. Each team member contributes unique skills to ensure every detail is perfect, making your love story truly shine.</p>
                    <div>
                        <p className='my-2 font-semibold'>About More Information</p>
                         <div className='flex items-center gap-3'>
                             <AiFillFacebook className='text-2xl'/>
                             <AiFillLinkedin className='text-2xl'/>
                             <AiFillTwitterSquare className='text-2xl'/>
                             <AiFillInstagram className='text-2xl'/>
                         </div>
                    </div>
                </div>
             </div>
             
         </div>

         <div className='mb-10' data-aos="fade-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000">
             
             <div className='flex gap-5 lg:flex-row flex-col shadow-lg lg:border-r-4 border-b-4 lg:border-b-0  border-orange-500'>
                <img className='h-64 lg:w-80 w-full' src={team_3} alt="" srcset="" />
                <div className='lg:p-0 p-3'>
                    <h1 className='text-orange-500 font-semibold text-xl mb-2'> Baby shower and Birthday parties Team</h1>
                    <p className='text-gray-500 '>Our Baby Shower and Birthday Parties team is a talented group of individuals who excel at creating joyous celebrations. With expertise in planning and decoration, we craft unforgettable events filled with happiness. Each team member adds a special touch, ensuring every party is a memorable and fun-filled experience for all.</p>
                    <div>
                        <p className='my-2 font-semibold'>About More Information</p>
                         <div className='flex items-center gap-3'>
                             <AiFillFacebook className='text-2xl'/>
                             <AiFillLinkedin className='text-2xl'/>
                             <AiFillTwitterSquare className='text-2xl'/>
                             <AiFillInstagram className='text-2xl'/>
                         </div>
                    </div>
                </div>
             </div>
             
         </div>

       </div>
    );
};

export default OurTeam;

// team-3 baby shower and birthday parties
// team-2 wedding and engagement parties
// team-1 anniversary and retirement