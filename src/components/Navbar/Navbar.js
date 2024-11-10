"use client";
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { HiOutlineMenu, HiX } from 'react-icons/hi';
import imglogo from './../../../public/image/logo.png';
import AuthPopup from './../AuthPopup/AuthPopup';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [popupType, setPopupType] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-[#FFFFFF33]'}`}>
      <div className="flex justify-between items-center px-8 lg:px-[250px] py-4 lg:py-[61.5px]">
        <div>
          <Link href="/">
            <Image src={imglogo} alt="Logo" className='lg:w-[133px] w-[80px]' />
          </Link>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className={`focus:outline-none ${scrolled ? 'text-orange-500' : 'text-white'}`}>
            {isOpen ? (
              <HiX className="h-6 w-6" />
            ) : (
              <HiOutlineMenu className="h-10 w-10" />
            )}
          </button>
        </div>

        <div className={`${isOpen ? 'fixed inset-0 bg-white flex flex-col items-center justify-center z-40 space-y-4' : 'hidden'} md:flex md:flex-row items-center`}>
          <button onClick={() => setIsOpen(false)} className="absolute top-4 right-4 md:hidden">
            <HiX className="h-8 w-8 text-black" />
          </button>

          <Link href="/" className={`${isOpen ? 'text-black text-lg mr-0' : scrolled ? 'text-orange-500' : 'text-white'} mr-6 lg:mr-10 font-open-sans`} onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/about" className={`${isOpen ? 'text-black text-lg mr-0' : scrolled ? 'text-orange-500' : 'text-white'} mr-6 lg:mr-10 font-open-sans`} onClick={() => setIsOpen(false)}>About Us</Link>
          <Link href="/tours" className={`${isOpen ? 'text-black text-lg mr-0' : scrolled ? 'text-orange-500' : 'text-white'} mr-6 lg:mr-10 font-open-sans`} onClick={() => setIsOpen(false)}>Tour Packages</Link>
          <Link href="/contact" className={`${isOpen ? 'text-black text-lg' : scrolled ? 'text-orange-500' : 'text-white'} font-open-sans`} onClick={() => setIsOpen(false)}>Contact Us</Link>

          <div className={`${isOpen ? 'flex flex-col items-center space-y-4 mt-4' : 'flex flex-col md:flex-row space-y-4 md:space-y-0 mt-4 md:mt-0'}`}>
            <select className={`${isOpen ? 'text-black text-lg' : scrolled ? 'text-orange-500' : 'text-white '} md:ms-4 lg:ms-[167px] lg:me-[46px] bg-transparent focus:outline-none font-open-sans`}>
              <option value="en">Eng</option>
              <option value="ar">arb</option>
            </select>
            <button className={`${isOpen ? 'text-black text-lg mr-0' : scrolled ? 'text-orange-500' : 'text-white'} me-[22px] font-open-sans`} onClick={() => setPopupType('logIn')}>Log In</button>
            <button className="rounded-[50px] text-xl text-white px-6 py-2.5 bg-[#FA8B02] font-open-sans" onClick={() => setPopupType('signUp')}>Sign Up</button>
          </div>
        </div>
      </div>
      <AuthPopup isOpen={popupType !== null} onClose={() => setPopupType(null)} type={popupType} />
    </nav>
  );
}

export default Navbar;
