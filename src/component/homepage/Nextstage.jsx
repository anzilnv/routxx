import React from 'react'
import bannerimage from '../assets/pngtree-business-jet-flying-near-a-mountain-in-the-sky-picture-image_2506953.jpg'
import blogimage from '../assets/Screenshot 2024-09-09 133155.png'
import roundedArrow from '../assets/right.png'


const Nextstage = () => {
    return (
        <div style={{ backgroundImage: `url(${bannerimage})` }} className='flex-col w-full h-auto bg-cover item-center shadow text-white  ' >

            <div className='font-semibold text-5xl   flex-col h-full px-4 md:px-36 py-20 text-[#1b3d38]'>

                <div className='flex flex-col md:flex-row justify-between'>
                    <div className=''>
                        <h4 className='text-xl '>OUR SERVICES</h4>
                        <h3 className='text-3xl md:text-5xl max-w-[600px] font-semibold'>Advature Unleashed Discover Your next  </h3>
                    </div>
                    <div className='flex  gap-6 justify-end p-2 md:p-16 pb-0'>
                        <img src={roundedArrow} width={60} alt="" />
                        <img src={roundedArrow} alt="" width={60} className='rotate-180' />
                    </div>
                </div>

                <div className='grid grid-cols-1 lg:grid-cols-3 pt-10 gap-10 ' >
                    <div className='w-full card shadow-lg rounded-2xl flex flex-col items-center p-8 bg-white h-auto'>
                        <img src={blogimage} alt="" className='rounded-full w-20 h-20 mt-6' />
                        <h3 className='text-2xl pt-8 font-semibold'>Food and Wine Tours</h3>
                        <p className='text-lg  text-gray-500  pt-5 text-center font-normal '> Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit repellat quae pariatur doloribus doloremque modi voluptas voluptatibus minima?</p>
                    </div>
                    <div className='w-full card shadow-lg rounded-2xl flex flex-col items-center p-8 bg-white h-auto'>
                        <img src={blogimage} alt="" className='rounded-full w-20 h-20 mt-6' />
                        <h3 className='text-2xl pt-8 font-semibold'>Travel Opportunities</h3>
                        <p className='text-lg  text-gray-500  pt-5 text-center font-normal '> Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit repellat quae pariatur doloribus doloremque modi voluptas voluptatibus minima?</p>
                    </div>
                    <div className='w-full card shadow-lg rounded-2xl flex flex-col items-center p-8 bg-white h-auto'>
                        <img src={blogimage} alt="" className='rounded-full w-20 h-20 mt-6' />
                        <h3 className='text-2xl pt-8 font-semibold'>Solo Travel Planning</h3>
                        <p className='text-lg  text-gray-500  pt-5 text-center font-normal '> Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit repellat quae pariatur doloribus doloremque modi voluptas voluptatibus minima?</p>
                    </div>
                </div>

            </div>


            <div className="mt-4 border-t border-white"></div>
        </div>
    )
}

export default Nextstage