import React from 'react'
import Link from 'next/link';
import "@/app/globals.css";
import SVG3 from './SVG/SVG3';

const Login = () => {
  return (
    <>
     <div className='w-full min-h-screen flex flex-col items-center back py-5'>
     <div className='grid col-span-1 w-[50%]'>
         <div className='flex items-center justify-center'>
            <img className='w-[300px] mb-4' src="/navbar-assets/03-logo.png" alt="" />
          </div>
        <div className='text-[30px] md:text-[45px] font-bold text-center uppercase text-white mb-8'>login</div>
        <div className='text-center text-white mb-8'>Connect using</div>
        <div className='button2 mb-6'>
            <button className='flex flex-wrap items-center justify-center button1 py-1 gap-4'>
                <img className='w-10' src="/images/Phantom.png" alt="" />
                <div className='text-white text-[1.1rem]'>Phantom</div>
            </button>
            <button className='flex flex-wrap items-center justify-center button1 py-1 gap-4'>
                <SVG3 />  
                <div className='text-white text-[1.1rem]'>Google</div>
            </button>
        </div>
        <div className='text-center text-white mb-6'>Or</div>
        <div className='mb-12'>
            <input className='w-full flex items-center rounded-2xl p-[7px] px-[15px] outline-none input' type="email" name="" id="" placeholder='Email' />
        </div>
        <div className='flex flex-wrap items-center gap-7 mb-4 justify-center'>
            <div className='flex items-center space-x-4'>
                <SVG3 />
                <img className='w-[28px] cursor-pointer' src="/socials/Path 188.png" alt="" />
                <img className='w-[28px] cursor-pointer' src="/socials/Path 189.png" alt="" />
                <img className='w-[28px] cursor-pointer' src="/socials/Path 458.png" alt="" />
            </div>
            <button className='uppercase button py-3 text-white text-[8px] md:text-[14px] font-bold tracking-[1px] px-5'>Continue With Email</button>
            <div>
                <div className='text-[13px] text-[#7A86A1]'>Don't have an account? <Link className='underline' href='/createaccount'>Creat One!</Link></div>
            </div>
        </div>
      </div>
     </div>
    </>
  )
}

export default Login;
