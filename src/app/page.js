"use client";
import {useEffect} from "react";
import Image from "next/image";
import About from "@/components/About/about";
import Intro from "@/components/Intro/intro";

const page = () => {
    return (
      <>
        {/* <div className="  border-blue-600 my-5 container mx-auto p-5 px-4 border">
                <h1>HOME PAGE</h1>
            </div> */}
        <Intro />
        <About />
      </>
    );
};

export default page;
