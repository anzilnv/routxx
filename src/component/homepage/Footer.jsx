import React from 'react'
import image1 from '../assets/download.jpeg'
import arrow2 from '../assets/right-arrow (2).png'
import arrow3 from '../assets/check.png'
import flight from '../assets/aircraft-airplane-airline-logo-label-journey-air-travel-airliner-symbol-vector-illustration-removebg-preview.png'
import insta from '../assets/instagram.png'
import linkedin from '../assets/linkedin.png'
import facebook from '../assets/15707884-removebg-preview (1).png'

const Footer = () => {
    return (

        <div className='bg-[#123c1c] text-white w-full '>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-12 p-20'>
                <div className=''>
                    <div className='flex flex-col items-center lg:flex-row'>
                        <img src={flight} alt="noImage" width={96} />
                        <p className='text-5xl font-semibold lg:pt-3'>RouteX</p></div>
                    <p className='pt-10  max-w-[300px]'>
                        Cooperate business typically refers to large-scale mansole it enterprises or organite
                    </p>
                    <div className='flex gap-3 pt-5'>
                        <img src={facebook} alt="facebook" className='w-5 h-5' />
                        <img src={insta} alt="insta" className='w-5 h-5' />
               
                        <img src={linkedin} alt="linkedIn" className='w-5 h-5' />
                    </div>
                </div>
                <div className='grid grid-cols-1 space-y-4 lg:space-y-0 lg:grid-cols-2 justify-center'>
                    <div >
                        <div >
                            <p className='text-2xl font-semibold pt-2'>Service Menu</p></div>
                        <div className='pt-5'>
                            <ul className=''>
                                <li className='flex gap-2'><img src={arrow3} width={20}  alt="" /> Mistakes To Avoid </li>
                                <li className='flex gap-2 pt-2'><img src={arrow3} width={20}  alt="" />Your Startup</li>
                                <li className='flex gap-2 pt-2'><img src={arrow3} width={20}  alt="" />Knew About fonts</li>
                                <li className='flex gap-2 pt-2'><img src={arrow3} width={20}  alt="" />Knew About fonts</li>

                            </ul>
                        </div>

                    </div>
                    <div >
                        <div >
                            <p className='text-2xl font-semibold pt-2'>Useful Link</p></div>
                        <div className='pt-5'>
                            <ul className=''>
                                <li className='flex  '> <img src={arrow2} alt="" width={20} className='p-1' />Mistakes To Avoid </li>
                                <li className='pt-2 flex'><img src={arrow2} alt="" width={20} className='p-1' />Your Startup</li>
                                <li className='pt-2 flex'><img src={arrow2} alt="" width={20} className='p-1' />Knew About fonts</li>
                                <li className='pt-2 flex'><img src={arrow2} alt="" width={20} className='p-1' />Knew About fonts</li>

                            </ul>
                        </div>
                    </div>
                </div>
                <div className='flex items-center lg:justify-end'>
                    <div>
                        <p className='text-2xl font-semibold pt-2'>Gallery</p>
                        <div className='pt-10'>
                            <div className='grid grid-cols-3 gap-2 '>
                                <div> <img src={image1} alt="" className='rounded-lg h-20' /></div>
                                <div> <img src={image1} alt="" className='rounded-lg h-20' /></div>
                                <div> <img src={image1} alt="" className='rounded-lg h-20' /></div>

                            </div>
                            <div className='grid grid-cols-3 gap-2 pt-2'>
                                <div> <img src={image1} alt="" className='rounded-lg h-20' /></div>
                                <div> <img src={image1} alt="" className='rounded-lg h-20' /></div>
                                <div> <img src={image1} alt="" className='rounded-lg h-20' /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr className='border-black'></hr>
            <div className='px-2 lg:px-32 flex flex-col lg:flex-row items-center justify-between py-4 lg:py-10'>
                <p>RRDevs2024|All Right Reserved</p>
                <div className='flex space-x-2 lg:space-x-10'>
                    <h3>Terms&condition</h3>
                    <h3>PrivacyPolicy</h3>
                    <h3>ContactUs</h3>
                </div>
            </div>

        </div>
    )
}

export default Footer