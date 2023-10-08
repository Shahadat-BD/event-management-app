import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const ServiceDetails = () => {
  const [details, setDetails] = useState([]);
  const serviceDetails = useLoaderData();
  const { id } = useParams();
  const intId = parseInt(id);
  useEffect(() => {
    const servicesFind = serviceDetails.find(
      (serDetails) => serDetails.id === intId
    );
    setDetails(servicesFind);
  }, []);

  const { name, description, image } = details;

  return (
    <div>
      <div className="lg:w-[70%] w-[95%] m-auto my-10">
        <img className="lg:h-[600px] md:h-[500px] h-[350px] w-full" src={image} alt="" srcset="" />
        <div className="-mt-20 absolute flex justify-center  items-center bg-orange-500 lg:w-[70%] w-[95%] m-auto h-20  text-white">
          <h3 className="lg:text-5xl text-2xl font-bold">{name}</h3>
        </div>
        <div className="flex lg:flex-row md:flex-row flex-col gap-5 my-6">
          <div className="flex-1">
            <p className="text-2xl font-semibold my-5">
              Description Of {name}{" "}
            </p>
            <p>{description}</p>
          </div>
          <div className="flex-1">
            <div className="bg-gray-50">
              <div className="">
                <div className="pt-2">
                  <h1 className="text-3xl font-semibold text-center mt-3 text-orange-500">
                    Event Booking
                  </h1>
                  <form className="pb-4 px-4">
                    <div className="form-control w-full">
                      <label className="label">
                        <span className="label-text">Name</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        placeholder="write your name"
                        className="input input-bordered w-full"
                        required
                      />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Email</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        placeholder="write your email"
                        className="input input-bordered"
                        required
                      />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Event Name</span>
                      </label>
                      <input
                        type="text"
                        name="event"
                        placeholder="white event name"
                        className="input input-bordered"
                        required
                      />
                    </div>

                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Phone Number</span>
                      </label>
                      <input
                        type="number"
                        name="number"
                        placeholder="write your phone number"
                        className="input input-bordered"
                        required
                      />
                    </div>

                    <div className="form-control mt-6">
                      <input
                        className="text-white border-none cursor-pointer bg-orange-500 py-3 text-lg font-semibold rounded-md"
                        type="submit"
                        value={"Booking"}
                      ></input>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
