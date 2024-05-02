import React from 'react'
import { IoIosStar } from 'react-icons/io'
import { CiMobile3 } from 'react-icons/ci'
import { IoGameControllerOutline } from 'react-icons/io5'
import { LuMonitor } from 'react-icons/lu'

const MostPlayedGames = () => {
  const gamesData = [
    {
      title: "FORTNITE",
      genre: "FPS | BATTLE ROYALE",
      imageUrl: "./images/03-fortnite-1.png",
      rating: 4.2,
      playNowLink: "#"
    },
    {
      title: "ROCKET LEAGUE®",
      genre: "RACING | MULTIPLAYER",
      imageUrl: "./images/03-ROCKET-LEAGUE-min.png",
      rating: 4.8,
      playNowLink: "#"
    },
    {
      title: "VALORANT",
      genre: "FPS | MULTIPLAYER",
      imageUrl: "./images/03-VALORANT-min.png",
      rating: 4.2,
      playNowLink: "#"
    },
    {
      title: "GENSHIN IMPACT",
      genre: "ADVENTURE | RPG",
      imageUrl: "./images/03-GENSHIN-IMPACT-min.png",
      rating: 4.8,
      playNowLink: "#"
    },
    {
      title: "EA SPORTS FC™ 24",
      genre: "SPORTS | FOOTBALL",
      imageUrl: "./images/03-EA-SPORTS-FCOao-24-min.png",
      rating: 4.2,
      playNowLink: "#"
    }
  ];

  return (
    <>
      <div className="container mx-auto my-9 max-md:px-4">
        <div className="flex w-full justify-between items-center mb-20 mt-24">
          <h3 className='md:text-6xl text-[20px] font-bold text-white max-md:w-52'><span className='text-[#25DBA8]'>MOST</span> PLAYED GAMES</h3>
          <div className="button">
            <button className='text-[#25DBA8] text-sm md:px-[56px] font-semibold px-[20px] bg-[#37334A] rounded-xl md:py-[10px] py-[15px]'>SEE ALL +</button>
          </div>
        </div>
        <div className="cards">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
            {gamesData.map((data, index) => {
              return <div className=" rounded-t-[36px] shadow bg-gradient-to-b from-[#41499A]">
                <a href="#">
                  <img className="rounded-t-[36px]" src={data.imageUrl} alt="" />
                </a>
                <div className="p-5">
                  <span>
                    <h5 className="mb-2 text-2xl tracking-tight italic text-gray-900 dark:text-white">{data.title}</h5>
                  </span>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{data.genre}</p>
                  <div className='flex justify-between items-center mt-6'>
                    <a href="#" className="inline-flex items-center  text-sm font-medium text-center  bg-[#37334A] text-[#25DBA8] py-3 px-[53px] rounded-lg  focus:ring-4 focus:outline-none  ">
                      PLAY NOW
                    </a>
                    <span className="reating flex gap-1 text-[#25DBA8] items-center">
                      <IoIosStar className='text-[#F0DB3D]' /> <span>{data.rating} / 5</span>
                    </span>
                  </div>
                </div>
              </div>
            })}

          </div>
        </div>
      </div>
    </>
  )
}

export default MostPlayedGames
