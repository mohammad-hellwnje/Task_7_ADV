import Image from 'next/image';
import React from 'react';
import imglogo from './../../../public/image/logo.png';
import { FaTwitter, FaFacebookF, FaInstagram, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import { sections, contacts, socialMedia } from '../../Data/Footer';

const iconComponents = {
  twitter: FaTwitter,
  facebook: FaFacebookF,
  instagram: FaInstagram,
  map: FaMapMarkerAlt,
  phone: FaPhone,
  envelope: FaEnvelope,
};

const Footer = () => {
  return (
    <footer className="bg-[#333333] text-white py-10 px-8 lg:px-[250px]">
      <Image src={imglogo} alt="Logo" className='lg:w-[133px] w-[80px] mb-[33px]' />
      <div className="">
        <div className="flex flex-wrap justify-between  py-[33px] border-y border-[#FFFFFF]">
          

          {sections.map((section, index) => (
            <div key={index} className="mb-6 lg:mb-0">
              <h3 className="text-xl font-extrabold mb-5 font-open-sans">{section.title}</h3>
              <ul className=''>
                {section.items.map((item, idx) => (
                  <li key={idx} className="my-2.5 text-lg font-semibold font-open-sans">
                    <a href="#">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="mb-6 lg:mb-0 ">
            <h3 className="text-xl font-extrabold mb-5 font-open-sans">Contacts</h3>
            <ul>
              {contacts.map((contact, idx) => {
                const IconComponent = iconComponents[contact.icon];
                return (
                  <li key={idx} className="text-lg font-semibold my-2.5 font-open-sans">
                    <IconComponent className="inline text-orange-500 mr-2 " /> {contact.text}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="">
            <h3 className="text-xl font-extrabold mb-5 font-open-sans">Social Media</h3>
            <div className="flex space-x-4">
              {socialMedia.map((social, idx) => {
                const IconComponent = iconComponents[social.icon];
                return (
                  <a key={idx} href={social.link} className='w-[50px] h-[50px] bg-[#FA8B02] rounded-full flex items-center justify-center'>
                    <IconComponent className=" text-3xl text-[#333333]" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
        <div className="text-center  mt-[33px] font-open-sans">
          © Copyright © 2022. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
