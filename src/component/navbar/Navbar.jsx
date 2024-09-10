import React, { useState } from 'react';
import logo from '../assets/aircraft-airplane-airline-logo-label-journey-air-travel-airliner-symbol-vector-illustration-removebg-preview.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openMenu = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className=" container w-full h-20 bg-white px-6 flex justify-between items-center relative">
      <div className="flex items-center space-x-4">
        <div>
          <img src={logo} width={50} alt="Logo" className="w-12 h-12" />
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold text-[#123c1c]">ROUTE X</h1>
      </div>

      <div className="hidden md:flex md:space-x-10 text-[#123c1c] font-semibold">
        <div>HOME</div>
        <div>ABOUT US</div>
        <div>STORY</div>
        <div>VISA</div>
        <div>BLOG</div>
        <div>PAGE</div>
        <div>CONTACT</div>
      </div>

      <div className='hidden md:flex font-semibold text-[#123c1c] md:justify-end'>
        Need help
      </div>


      <div className="md:hidden">
        <button onClick={openMenu} className="text-[#2d474d] transition ease-in-out delay-150   hover:scale-125 duration-500">

          {isOpen ? (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">

              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>
      </div>



      {
        isOpen && (
          <div className="flex flex-col items-center space-y-4 py-4">
            <div className='block text-[#2d474d] font-medium'>HOME</div>
            <div className='block text-[#2d474d] font-medium '>ABOUT US</div>
            <div className='block text-[#2d474d] font-medium'>STORY</div>
            <div className='block text-[#2d474d] font-medium'>VISA</div>
            <div className='block text-[#2d474d] font-medium'>BLOG</div>
            <div className='block text-[#2d474d] font-medium'>PAGE</div>
            <div className='block text-[#2d474d] font-medium'>CONTACT</div>
            <div className='block text-[#2d474d] font-medium'>NEED HELP</div>
          </div>
        )
      }




    </div >

  );
};

export default Navbar;
