import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SlSocialFacebook } from "react-icons/sl";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <div className=" bg-black text-white min-h-auto py-10">
      <div className="flex flex-col gap-10">
        <div className="flex justify-around items-start">
          <div>
            <h1 className=" mb-2 text-xl">GROW</h1>
            <p>
              Have a question? We’re here to help.
              <br />
              Call us at 415-614-4474
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <h1 className=" mb-2 text-xl">PRODUCT</h1>
            <p className=" hover:text-green-400 cursor-pointer">Features</p>
            <p className=" hover:text-green-400 cursor-pointer">Data Connections</p>
            <p className=" hover:text-green-400 cursor-pointer">Visualizations</p>
            <p className=" hover:text-green-400 cursor-pointer">App Status</p>
            <p className=" hover:text-green-400 cursor-pointer">New Release Notes</p>
          </div>
          <div className="flex flex-col gap-3">
            <h1 className=" mb-2 text-xl">LEARN</h1>
            <p className=" hover:text-green-400 cursor-pointer">Blog</p>
            <p className=" hover:text-green-400 cursor-pointer">Help Center</p>
            <p className=" hover:text-green-400 cursor-pointer">Resources</p>
            <p className=" hover:text-green-400 cursor-pointer">Dashboards We ❤️</p>
            <p className=" hover:text-green-400 cursor-pointer">Success Stories</p>
          </div>
          <div className="flex flex-col gap-3">
            <h1 className=" mb-2 text-xl">COMPANY</h1>
            <p className=" hover:text-green-400 cursor-pointer">About Us</p>
            <p className=" hover:text-green-400 cursor-pointer">Careers</p>
            <p className=" hover:text-green-400 cursor-pointer">Newsroom</p>
            <p className=" hover:text-green-400 cursor-pointer">Contact Us</p>
            <p className=" hover:text-green-400 cursor-pointer">Cookie Settings</p>
          </div>
        </div>
        <div className="flex justify-around items-center">
          <div>
            <p>Ⓒ 2024 Grow | All Rights Reserved</p>
          </div>
          <div className="flex gap-6">
            <p>Privacy</p>
            <p>Terms</p>
            <p>Security</p>
          </div>
          <div className="flex gap-6">
            <div>
              <FaInstagram />
            </div>
            <div>
              <FaXTwitter />
            </div>
            <div>
              <SlSocialFacebook />
            </div>
            <div>
              <FaWhatsapp />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
