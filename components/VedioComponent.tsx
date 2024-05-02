import React from 'react'
import { CiMobile3 } from 'react-icons/ci'
import { IoGameControllerOutline } from 'react-icons/io5'
import { LuMonitor } from 'react-icons/lu'
import YoutubePlayerComponent from './Youtube-player'
import "./Mybackground.css";

const VedioComponent = () => {
  return (
    <div className="background relative overflow-hidden">
    <div className='container relative z-10  mx-auto my-9 max-md:px-4 mb-24'>
      <h3 className='md:text-6xl text-center text-[20px] font-bold text-white'>WHERE EVERY <span className='text-[#25DBA8]'>MATCH</span> COUNTS</h3>
      <div className="my-12 flex justify-center ">
        <YoutubePlayerComponent />
      </div>
      <h3 className='md:text-5xl text-center text-[20px] font-bold text-white '>DOWNLOAD AND LEVEL UP, <br /> ANYTIME, ANYWHERE.</h3>
      <div className="mt-8 flex max-sm:flex-wrap justify-center gap-5 items-center">
         <button  className='border gap-2 text-white font-medium py-[14px] px-[20px] rounded-xl border-[#25DBA8] flex items-center'>
         <LuMonitor className='text-[#25DBA8]' /> COMPUTER
         </button>
         <button  className='border gap-2 text-white font-medium py-[14px] px-[20px] rounded-xl border-[#25DBA8] flex items-center'>
         <CiMobile3 className='text-[#25DBA8]' /> MOBILE
         </button>
         <button  className='border gap-2 text-white font-medium py-[14px] px-[20px] rounded-xl border-[#25DBA8] flex items-center'>
         <IoGameControllerOutline className='text-[#25DBA8]' /> CONSOLE
         </button>
      </div>
    </div>
    <img src="./background/Path 629.png" className='absolute bottom-0 z-0' alt="" />
    <img src="./background/Path 628.png" className='absolute -bottom-[50%] z-0' alt="" />
    </div>
  )
}

export default VedioComponent
