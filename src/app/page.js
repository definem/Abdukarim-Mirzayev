"use client";
import {useEffect} from "react";
import Image from "next/image";
import About from "@/components/About/about";
import Intro from "@/components/Intro/intro";
import CourseTitle from "@/components/CourseTitle/courseTitle";

const page = () => {
    return (
      <>
        <Intro />
        <About />
        <CourseTitle/>
      </>
    );
};

export default page;
