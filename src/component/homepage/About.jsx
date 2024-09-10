import React from 'react'
import image from '../assets/download.jpeg'
import arrow from '../assets/right-arrow.png'
import check from '../assets/green-check.png'


function About() {
    return (
        <div className='flex flex-col md:flex-row w-full gap-12 pt-12 md:pt-0 '>
            <div className='hidden md:flex w-full md:w-1/2 flex-wrap gap-6 items-center relative pb-32 pt-10 px-auto justify-center md:justify-start md:pl-24'>
                <img src={image} alt="" className='w-[300px] h-[350px] rounded-3xl ' />
                <img src={image} alt="" className='w-[250px] h-[200px] rounded-3xl' />
                <div className='w-[150px] h-[200px] bg-[#123c1c] rounded-3xl justify-center flex flex-col items-center text-white '>
                    <p className='text-2xl font-semibold flex w-full justify-center '>10+ </p>
                    <p className='text-md flex w-full justify-center px-4 text-center'>years of experience</p>
                </div>
                <img src={image} alt="" className='md:absolute w-[300px] h-[300px] rounded-3xl right-32 bottom-24' />
            </div>
            <div className='w-full md:w-1/2 px-4 md:px-0 md:pr-24 flex justify-center flex-col pb-20 md:pt-20 text-[#123c1c]'>
                <h3 className='font-semibold text-xl'>About us</h3>
                <span className='text-3xl md:text-5xl font-semibold  '>
                    Unknown Wanderlust Your Journey into
                </span>
                <p className='text-md md:text-xl text-gray-400 py-10'>
                    Lorem ipsum dolor sit amet , consectetur adipiscing elit .Sed sit amet rcus.Duis edestas ac ante sed tincidunt.
                </p>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4  md:gap-10  ' >
                    <div className=''>
                        <div className='flex gap-2'>
                            <img src={check} alt="" width={30} />
                            <h3 className=' font-semibold text-xl'>Safety Guides</h3>
                        </div>
                        <h4 className='text-sm md:text-md text-gray-500 py-5'> Lorem ipsum dolor sit amet , consectetur adipiscing elit    </h4>
                    </div>
                    <div className=''>
                        <div className='flex gap-2'>
                            <img src={check} alt="" width={30} />
                            <h3 className=' font-semibold text-xl'>Passport Assistance</h3>
                        </div>
                        <h4 className='text-sm md:text-md text-gray-500 py-5'> Lorem ipsum dolor sit amet , consectetur adipiscing elit    </h4>
                    </div>
                </div>
                <div className='pt-10'>
                    <button className='px-6 p-3 bg-[#123c1c] rounded-full text-lg text-white flex gap-2 items-center justify-center mx-auto'>Read more <img src={arrow} alt="" width={20} className='pt-1' /></button>


                </div>
            </div>

        </div>
    )
}

export default About