import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephoneForward } from "react-icons/bs";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterSquare,
} from "react-icons/ai";
const Footer = () => {
  return (
    <div className="bg-[#0B162A]">
      <footer className="footer p-12 text-base-content ">
        <aside>
          <p className="text-orange-500 text-4xl font-bold">
            Social <span className="text-white font-bold">Events</span>
          </p>
          <div className="text-white">
            <div className="flex items-center gap-3 mt-3">
              <CiLocationOn className="text-2xl font-bold" />
              <p>
                
                21,Sheik Mujib Road Agrabad
                <br />
                chittagong,BD
              </p>
            </div>
            <div className="flex items-center gap-3 mt-3">
              <BsTelephoneForward className="text-2xl font-bold" />
              <p>+88033462332</p>
            </div>
            <div className="flex items-center gap-3 mt-3">
              <AiOutlineMail className="text-2xl  font-bold" />
              <p>socialEvent34@gmail.com</p>
            </div>
          </div>
        </aside>
        <nav className="text-white">
          <header className=" text-orange-500 font-bold text-xl">
            Services
          </header>
          <a className="link link-hover">Weeding and Anniversary</a>
          <a className="link link-hover">Birthday Parties</a>
          <a className="link link-hover">Engagement Parties</a>
          <a className="link link-hover">Retirement Parties</a>
          <a className="link link-hover">Baby Shower</a>
        </nav>
        <nav className="text-white">
          <header className="text-orange-500 font-bold text-xl">Company</header>
          <a className="link link-hover">Why Choose Us</a>
          <a className="link link-hover">Contact Us</a>
          <a className="link link-hover">Services</a>
          <a className="link link-hover">Our Team</a>
          <a className="link link-hover">Our Gallery</a>
        </nav>
        <nav className="text-white">
          <form>
            <header className="text-orange-500 font-bold text-xl ">
              Contact Us
            </header>
            <fieldset className="form-control w-80">
              <label className="label">
                <span className="text-white ">Enter your email address</span>
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="username@site.com"
                  className="input input-bordered w-full pr-16"
                />
                <button className="bg-orange-500 h-12 px-4 rounded-r-md font-bold text-white absolute top-0 right-0">
                  Subscribe
                </button>
                <div className="flex items-center mt-5">
                  <AiFillFacebook className="text-4xl font-bold mr-2" />
                  <AiFillInstagram className="text-4xl font-bold mr-2" />
                  <AiFillLinkedin className="text-4xl font-bold mr-2" />
                  <AiFillTwitterSquare className="text-4xl font-bold mr-2" />
                </div>
              </div>
            </fieldset>
          </form>
        </nav>
      </footer>
      <h1 className="text-white text-center pb-3">All right reserved.created by <span className="text-orange-500 font-semibold"> @shahadat</span></h1>
    </div>
  );
};

export default Footer;
