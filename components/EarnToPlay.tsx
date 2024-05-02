import React from 'react';
import "@/app/globals.css";
import Link from 'next/link';


const EarnToPlay = () => {
  return (
    <>
        <div className='w-full h-screen flex flex-col items-center back py-5'>
          <div className='w-[50%] grid col-span-1'>
            <div className='flex items-center justify-center'>
              <img className='w-[300px] mb-14' src="/navbar-assets/03-logo.png" alt="" />
            </div>
              <div className='text-[#25DBA8] text-center text-[30px] md:text-[45px] font-bold'>EARN TO PLAY</div>
              <div className='text-white text-center text-[30px] md:text-[45px] font-bold mb-1'>THE GAMES YOU LOVE!</div>
              <div className='text-white text-center mb-16'>And level up anywhere, anytime, in any game!</div>
              <div className='button2 mb-4'>
              <Link href="/createaccount" className='flex items-center justify-center button1 py-2'>
                  <div className='text-white uppercase text-center'>Create Account</div>
              </Link>
              <Link href="/login" className='flex items-center justify-center button1 py-2'>
                  <div className='text-white uppercase text-center'>Login</div>
              </Link>
            </div>
            <div className='text-[#7A86A1] text-center text-[12px]'>Privacy Policy | Terms of Use</div>
          </div>
        </div>  
    </>
  )
}

export default EarnToPlay;
