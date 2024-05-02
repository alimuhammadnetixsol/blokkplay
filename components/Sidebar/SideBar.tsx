import React from "react";

const SideBar: React.FC = () => {
  const onLoginHandler = () => {
    console.log("side bar");
  };
  return (
    <div className={`side_bar flex flex-col gap-14 text-white pt-8`}>
      <button className="b-none hover_bg_none text-start w-full px-16">
        GAMES
      </button>
      <button
        className={"desktop-link b-none hover_bg_none text-start w-full px-16"}
      >
        BLOKK+
      </button>
      <button
        className={"desktop-link b-none hover_bg_none text-start w-full px-16"}
      >
        DOWNLOAD
      </button>
      <button
        className={"desktop-link b-none hover_bg_none text-start w-full px-16"}
      >
        FAQs
      </button>
      <button className="login_button" onClick={onLoginHandler}>
        Login
      </button>
    </div>
  );
};

export default SideBar;
