"use client";
import {useEffect} from "react";
import Image from "next/image";
import About from "@/components/About/about";
import Intro from "@/components/Intro/intro";
import CourseTitle from "@/components/CourseTitle/courseTitle";
import AboutCourse from "@/components/AboutCourse/aboutCourse";

const page = () => {
    return (
      <>
        <Intro />
        <About />
        <CourseTitle/>
        <AboutCourse/>
      </>
    );
};

export default page;
