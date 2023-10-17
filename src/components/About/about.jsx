import React from "react";
import BackgroundImg from "../../../public/assets/images/user.png";
import Arrow from "../../../public/assets/icons/arrow.svg";

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
            <h1 className="font-semibold px-6 w-[790px] mb-[20px]">
              Abdukarim Mirzayev bilan{" "}
              <span className="text-[#00E689]">storytelling</span> kursi...
            </h1>
            <p className="text-[16px] text-white font-normal w-[430px] px-6">
              Ushbu kurs yordamida jozibali gapirish, sahnada va kamera
              qarshisida hayajonlanmaslik, vizual kompozitsiya va ovozlashtirish
              sirlarini bilib olasiz.
            </p>
            <button className="flex items-center py-[25px] rounded-[3px] mt-[40px] px-[14px] gap-[5px] bg-[#FAA40C] hover:bg-orange-400 text-[16px] mx-6 w-[207px] h-[48px] text-black font-semibold">
              Guruhga qo’shilish
              <img src={Arrow.src} alt="arrow icon" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
