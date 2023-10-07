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
            <h1 className='my-8 text-center lg:text-5xl text-2xl font-bold'>Our Social Event  <span className='text-orange-500'>Services</span></h1>
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