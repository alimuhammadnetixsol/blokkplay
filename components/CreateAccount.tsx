import React from 'react';
import "@/app/globals.css";
import Link from 'next/link';

const CreateAccount = () => {
  return (
    <>
          <div className='w-full min-h-screen flex flex-col items-center back py-5'>
          <div className='w-[50%] grid col-span-1'>
            <div className='flex items-center justify-center'>
              <img className='w-[300px] mb-14' src="/navbar-assets/03-logo.png" alt="" />
            </div>
              <div className='text-white text-center text-[30px] md:text-[45px] font-bold mb-2'>CREATE ACCOUNT</div>
              <div className='text-center mb-10'>
                <div className='text-[13px] text-[#7A86A1]'>Already have an account? <Link className='underline' href='/login'>Login Now!</Link></div>
               </div> 
               <div className='mb-3'>
                    <input className='w-full flex items-center rounded-2xl p-[7px] px-[15px] outline-none input' type="text" name="" id="" placeholder='Name' />
                </div>
                <div className='mb-3'>
                    <input className='w-full flex items-center rounded-2xl p-[7px] px-[15px] outline-none input' type="email" name="" id="" placeholder='Email' />
                </div>
                <div className='mb-10 flex gap-2'>
                    <input className='inline-block w-full rounded-2xl p-[7px] px-[15px] outline-none input' type="password" name="" id="" placeholder='Password' />
                    <input className='inline-block w-full rounded-2xl p-[7px] px-[15px] outline-none input' type="password" name="" id="" placeholder='Confirm Password' />
                </div>
                <div className='flex flex-wrap items-center mb-5 justify-start gap-3 md:justify-end md:gap-20'>
                    <button className='uppercase button py-3 text-white text-[8px] md:text-[14px] font-bold tracking-[1px] px-5 place-items-center'>Create account</button>
                    <div>
                        <div className='text-[11px] md:text-[13px] text-[#7A86A1] text-center'>Privacy Policy | Terms of Use</div>
                    </div>
                </div>
            </div>
        </div>  
    </>
  )
}

export default CreateAccount;