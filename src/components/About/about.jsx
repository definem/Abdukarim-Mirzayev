import React from "react";
import BackgroundImg from "../../../public/assets/images/user.png";

const About = () => {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${BackgroundImg.src})`,
          width: "100vw",
          height: "100vh",
          zIndex: "0",
          backgroundSize: "cover",
        }}
      >
        <div className="container">
          <div
            style={{ paddingTop: "324px" }}
            className="text-[64px] text-white text-bold max-w-[580px]"
          >
            <h1 className="font-semibold px-6 w-[790px]">
              Abdukarim Mirzayev bilan{" "}
              <span className="text-[#00E689]">storytelling</span> kursi...
            </h1>
            <h4 className="text-[16px] text-white font-normal w-[430px] px-6">
              Ushbu kurs yordamida jozibali gapirish, sahnada va kamera
              qarshisida hayajonlanmaslik, vizual kompozitsiya va ovozlashtirish
              sirlarini bilib olasiz.
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
