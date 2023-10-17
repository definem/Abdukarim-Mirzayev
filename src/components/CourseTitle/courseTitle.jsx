import React from 'react'
import BackgroundGradient from "../../../public/assets/images/Gradient.png";
import Group from "../../../public/assets/images/group.png";

const CourseTitle = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${BackgroundGradient.src})`,
        width: "100%",
        height: "250px",
        zIndex: "0",
        backgroundSize: "cover",
      }}
    >
      <div className="container flex items-center justify-between ">
        <img className="pt-[70px]" src={Group.src} alt="group image" />
        <img className="pt-[70px]" src={Group.src} alt="group image" />
        <img className="pt-[70px]" src={Group.src} alt="group image" />
      </div>
    </div>
  );
}

export default CourseTitle