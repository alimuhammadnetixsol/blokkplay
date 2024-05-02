import React from 'react'
import Link from 'next/link';
import "@/app/globals.css";
import SVG3 from './SVG/SVG3';

const Signup = () => {
  return (
    <>
      <div className='grid col-span-1 w-[50%] py-4'>
        <div className='text-[30px] md:text-[45px] lg:text-[60px] font-bold text-center uppercase text-white mb-10'>sign up or login</div>
        <div className='text-center text-white mb-10'>Connect using</div>
        <div className='button2 mb-10'>
            <button className='flex flex-wrap items-center justify-center button1 py-1 gap-4'>
            <img className='w-9' src="/images/Phantom.png" alt="" />
                <div className='text-white text-[1.1rem]'>Phantom</div>
            </button>
            <button className='flex flex-wrap items-center justify-center button1 py-1 gap-4'>
                <SVG3 />
                <div className='text-white text-[1.1rem]'>Google</div>
            </button>
        </div>
        <div className='text-center text-white mb-10'>Or</div>
        <div className='mb-12'>
            <input className='w-full flex items-center rounded-2xl p-[7px] px-[15px] outline-none input' type="email" name="" id="" placeholder='Email' />
        </div>
        <div className='flex flex-wrap items-center gap-7 mb-3 justify-center'>
            <div className='flex items-center space-x-4'>
                <SVG3 />
                <img className='w-[28px] cursor-pointer' src="/socials/Path 188.png" alt="" />
                <img className='w-[28px] cursor-pointer' src="/socials/Path 189.png" alt="" />
                <img className='w-[28px] cursor-pointer' src="/socials/Path 458.png" alt="" />
            </div>
            <button className='uppercase button py-3 text-white text-[8px] md:text-[14px] font-bold tracking-[1px] px-5'>Continue With Email</button>
            <div>
                <div className='text-[13px] text-[#7A86A1]'>Don't have an account? <Link className='underline' href=''>Creat One!</Link></div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Signup
