import React from "react";

const PlayerOne = () => {
  return (
    <div>
      <div
        className="flex flex-col bg-cover"
        style={{ backgroundImage: "url('./Path643.png')" }}
        // data-id="9482c8b"
        // data-element_type="container"
        // data-settings='{"background_background":"classic","shape_divider_top":"tilt"}'
      >
        <div className="overflow-hidden">
          {/* <div className="absolute top-0 left-0 w-full h-16"></div> */}
          <div className="py-10">
            <h3 className="text-5xl text-center mb-8 animate-fadeInUp">
              PLAYER ONE
            </h3>
            <h3
              className="text-6xl text-center pb-20 animate-fadeInUp"
              style={{ color: "#25DBA8" }}
            >
              LET’S PLAY
            </h3>

            <div className="flex flex-row w-full">
              <div className="w-full  bg-classic flex flex-col items-center">
                <img
                  src="./03-level-Up-remove.png"
                  alt=""
                  className="w-40 h-auto animate-fadeInUp"
                />
                <h2 className="text-4xl text-center mt-12 animate-fadeInUp">
                  LEVEL UP{" "}
                  <sup className="text-4xl" style={{ color: "#25DBA8" }}>
                    +
                  </sup>
                </h2>

                <p className=" font-sans text-center my-6 animate-fadeInUp text-xl font-helvetica">
                  Play the games you love with Blokkplay,
                  <br /> anywhere, anytime, on pc, console and mobile.
                </p>

                <a
                  href="#"
                  className="btn btn-primary animate-fadeInUp bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 px-16 py-3 rounded-lg text-base font-bold"
                >
                  SIGN UP
                </a>
              </div>
              <img src="./line.png" className="h-21rem mt-8" />
              <div className="w-full  bg-classic flex flex-col items-center">
                <img
                  src="./03-play-and-earn-remove.png"
                  alt=""
                  className="w-40 h-auto animate-fadeInUp"
                />
                <h2 className="text-4xl text-center mt-5 animate-fadeInUp">
                  PLAY AND EARN{" "}
                  <sup className="text-4xl" style={{ color: "#25DBA8" }}>
                    $
                  </sup>
                </h2>
                <p className="text-center my-6 animate-fadeInUp">
                  The better you play, the more you earn.
                  <br /> Earn points, rewards and tokens.
                </p>
                <a
                  href="#"
                  className="btn btn-primary animate-fadeInUp bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 px-10 py-3 rounded-lg text-base font-bold"
                >
                  DISCOVER MORE
                </a>
              </div>
            </div>
            <h3 className="text-5xl text-center mt-10 animate-fadeInUp">
              REDEEM AT THE
            </h3>
          </div>
        </div>
        <div
          className="flex flex-col bg-contain bg-no-repeat"
          style={{ backgroundImage: "url('./linear.png')" }}
        >
          <div className="overflow-hidden flex flex-col justify-center items-center">
            {/* <div className="absolute top-0 left-0 w-full h-16 bg-white transform -skew-y-12"></div>
          <div className="absolute bottom-0 left-0 w-full h-16"></div> */}
            {/* <h3 className="text-5xl text-center mb-8 animate-fadeInUp">
              REDEEM AT THE
            </h3> */}
            <h3
              className="text-6xl text-center pb-20 animate-fadeInUp"
              style={{ color: "#25DBA8" }}
            >
              MARKETPLACE
            </h3>
            <img
              src="./Group464.png"
              alt=""
              className="w-80 h-auto animate-fadeInUp"
            />
            <p className="text-center mb-4 animate-fadeInUp">
              Redeem your Loot for real-life Items—gift cards, gaming gear,
              keys, or spend it on what you like!
            </p>
          </div>
          {/* </div> */}
        </div>
      </div>
      {/* Second section */}
    </div>
  );
};
export default PlayerOne;
