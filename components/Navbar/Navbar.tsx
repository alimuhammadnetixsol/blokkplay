"use client";
import React, { useState, useEffect } from "react";
import logo from "@/public/navbar-assets/03-logo.png";
import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";
import Link from "next/link";
import SideBar from "../Sidebar/SideBar";

function Navbar() {
  const [showSideBar, setSideBar] = useState<Boolean>(false);
  const [isScrolled, setIsScrolled] = useState<Boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const onToggleSideBar = () => {
    setSideBar((prev) => !prev);
    document.body.style.overflowY = showSideBar ? "auto" : "hidden";
  };
  const onLoginHandler = () => {
    console.log("side bar");
  };

  return (
    <>
      <div
        className={`nav_wrapper ${
          isScrolled ? "bg_nav" : "bg_none"
        } xl:h-[90px] max-w-screen-lg`}
      >
        <div className="nav_logo" style={{ cursor: "pointer" }}>
          <Link href={"/"}>
            <Image
              className="h-[26px] w-[140px] sm:h-[45px] sm:w-[232px] md:h-[60px] md:w-[310px] lg:w-[390px] lg:h-[70px] xl:w-[398px] xl:h-[80px]"
              src={logo}
              alt="navbar logo"
              height={75}
            />
          </Link>
        </div>
        <div className="nav_list">
          <div
            onClick={onToggleSideBar}
            style={{ cursor: "pointer" }}
            className="ham h-[35px] w-[35px] rounded-md bg-[#2cb08b] flex justify-center items-center"
          >
            <GiHamburgerMenu className="text-white" />
          </div>

          <ul>
            <ul>
              <button className="b-none hover_bg_none">
                <Link href={"/games"}>GAMES</Link>
              </button>
              <button className={"desktop-link b-none hover_bg_none"}>
                <Link href={"/blokk-plus"}>BLOKK+</Link>
              </button>
              <button className={"desktop-link b-none hover_bg_none"}>
                <Link href={"/download"}>DOWNLOAD</Link>
              </button>
              <button className={"desktop-link b-none hover_bg_none"}>
                <Link href={"/faqs"}>FAQs</Link>
              </button>
              <button className="login_button" onClick={onLoginHandler}>
                Login
              </button>
            </ul>
          </ul>
        </div>
      </div>
      {showSideBar && <SideBar />}
    </>
  );
}

export default Navbar;
