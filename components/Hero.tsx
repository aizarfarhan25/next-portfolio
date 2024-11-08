import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./ui/MagicButton";
import { BackgroundLines } from "./ui/background-lines";
import { FaLocationArrow, FaArrowDownShortWide } from "react-icons/fa6";
import { RiScrollToBottomLine } from "react-icons/ri";
import { FaArrowDown } from "react-icons/fa";
// import Me from '../'

const Hero = () => {
  return (
    <div className="pb-10 pt-36 md:pt-20">
      {/* <BackgroundLines className="flex items-center justify-center w-full flex-col px-4"> */}
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-10 left-full h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      {/* <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.02] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div> */}

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <img src="./assets/me.jpg" alt="Aizar" className="rounded-full w-48 h-48 mb-1 object-cover md:w-64 md:h-64" />
          

          <TextGenerateEffect
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
            words="Quality Assurance"
          />

          <p className="text-center md:tracking-wider mb-7 text-sm md:text-lg lg:text-2xl">
            Hi, I&apos;m Aizar, a Quality Assurance based in Jakarta
          </p>

          <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 mb-7">
            Final Year Student / QA Internship
          </h2>
          <a href="#about">
            <MagicButton
              title="Show my work"
              icon={<RiScrollToBottomLine className="text-lg" />}
              position="right"
            />
          </a>
        </div>
      </div>
      {/* </BackgroundLines> */}
    </div>
  );
};

export default Hero;
