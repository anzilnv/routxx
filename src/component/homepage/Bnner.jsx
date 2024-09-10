import React from 'react'
import bannerimage from '../assets/pngtree-business-jet-flying-near-a-mountain-in-the-sky-picture-image_2506953.jpg'
import arrow from '../assets/right-arrow.png'

function Bnner() {
    return (
        <div>
            <div style={{ backgroundImage: `url(${bannerimage})` }} className='flex w-full h-[650px] bg-cover text-white  items-center'>
                <div className='font-semibold  w-full flex-col justify-center items-center text-center px-6 md:px-0'>
                    <h3 className='text-3xl font-bold md:text-6xl max-w-[900px] mx-auto text-center'>Journey with Confidence <span className='text-[#123c1c]'>Migrate</span> with Us  </h3>
                    <p className='text-md md:text-xl pt-16 mx-auto text-center pb-6 max-w-[700px]'>
                        Lorem ipsum dolor sit amet , consectetur adipiscing elit .Sed sit amet rcus.Duis edestas ac ante sed tincidunt.
                    </p>
                    <button className='px-8 p-3 bg-[#123c1c] rounded-full text-lg text-white flex gap-2 items-center justify-center mx-auto'>learn more <img src={arrow} alt="" width={20} className='pt-1' /></button>
                </div>

            </div>
        </div>
    )
}

export default Bnner