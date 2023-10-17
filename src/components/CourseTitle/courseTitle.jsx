import React from 'react'
import BackgroundGradient from "../../../public/assets/images/Gradient.png";

const CourseTitle = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${BackgroundGradient.src})`,
        width: "100%",
        height: "200px",
        zIndex: "0",
        backgroundSize: "cover",
      }}
      
    ></div>
  );
}

export default CourseTitle