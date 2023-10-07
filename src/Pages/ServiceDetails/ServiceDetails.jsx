import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const ServiceDetails = () => {
    const [details,setDetails] = useState([])
    const serviceDetails =  useLoaderData()
    const {id} = useParams()
    const intId = parseInt(id)
    useEffect(()=>{
       const servicesFind = serviceDetails.find(serDetails =>serDetails.id === intId)
               setDetails(servicesFind)
    },[])
 
    const {name,description,image} = details

    return (
        <div>
            <div className='w-[70%] m-auto my-10'>
                <img className='h-[600px] w-full' src={image} alt="" srcset="" />
                <div className='-mt-20 absolute flex justify-center  items-center bg-orange-500 w-[70%] m-auto h-20 text-white'>
                  <h3 className='lg:text-5xl text-2xl font-bold'>{name}</h3>
                </div>
                 <p className='text-2xl font-semibold my-5'>Description Of {name} </p>
                 <p>{description}</p> 
            </div>
        </div>
    );
};

export default ServiceDetails;