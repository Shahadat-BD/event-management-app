import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Service = () => {
    const [Service,setService] = useState([])
    useEffect(()=>{
        fetch('Event.json')
        .then(res => res.json())
        .then(data => setService(data))
    },[])
    return (
        <div >
            <div className='text-center my-6'>
            <h1 className='lg:text-5xl text-2xl font-bold'>Social  Event <span className='text-orange-500'>Services</span></h1>
             <p className='lg:w-[80%] w-full m-auto mt-3 lg:text-base text-sm  text-gray-500'>We have a six social event services.We have three teams to organize these social events.So Trust me I will give you a better service.so know more details about our event so please click on the event details button  </p>
            </div>
           <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5'>
           {
            Service.map(eventService => <>
                <div key={eventService.id} className='rounded-lg'>
                   <img className='h-64 w-full rounded-md' src={eventService.image} alt="" srcset="" />
                   <h3 className='text-2xl my-2 font-semibold'>{eventService.name}</h3>
                   <p className='text-lg font-bold text-gray-500'>${eventService.price}</p>
                   <p className='text-gray-500 my-2'>{eventService.description.slice(0,100)} <span className='text-orange-500'>Read More....</span></p>
                   <Link to={`/service/${eventService.id}`}>
                       <button className='bg-orange-500 text-white font-semibold text-lg px-6 py-2 rounded-md'>
                         Event Details
                      </button>
                   </Link>
                </div>
            </>)
           }
           </div>
        </div>
    );
};

export default Service;