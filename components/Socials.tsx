import React from "react";

const Socials = () => {
    return (
      <>
        <img className='block z-50 absolute lg:top-[54px] left-1/2 transform -translate-x-1/2 w-[90px] md:top-[46px] top-[34px] rotate-2' src="/socials/blokkplay.png" alt="BlokkPlay" />
        <div className='w-full grid col-span-1 gradient relative pt-[130px] pb-[130px]'>
          <div className='uppercase text-center text-[30px] md:text-[45px] lg:text-[60px] text-white font-bold mt-10'>You're not playing alone.</div>
          <div className='uppercase text-center text-[30px] md:text-[45px] lg:text-[60px] text-white font-bold mb-5'>Join us on socials</div>
          <div className='flex flex-wrap items-center justify-center mb-6'>
            <div className="flex flex-wrap items-center gap-5">
                <img className="inline-block w-[35px] cursor-pointer" src="socials/insta.png" alt="Instagram" />
                <img className="inline-block w-[35px] cursor-pointer" src="socials/Path 188.png" alt="Instagram" />
                <img className="inline-block w-[35px] cursor-pointer" src="socials/Path 189.png" alt="Instagram" />
                <img className="inline-block w-[35px] cursor-pointer" src="socials/Path 458.png" alt="Instagram" />
                <img className="inline-block w-[35px] cursor-pointer" src="socials/Path 459.png" alt="Instagram" />
            </div>
          </div>
        </div>
      </>
    )
  }
  
  export default Socials;
  