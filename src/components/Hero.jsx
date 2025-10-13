import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { bwmap, worldmap } from '../assets';
import MainImg from '../assets/Main.jpg';

const Hero = () => {
  return (
    <>
      {/* Background maps */}
      <div className="absolute top-0 left-0 z-0 h-[100vh] w-screen">
        <img
          src={bwmap}
          alt="world map"
          className="w-full h-full sm:block hidden object-cover"
        />
      </div>

      <div className="absolute top-0 left-0 z-0 h-[100vh] w-screen">
        <img
          src={worldmap}
          alt="world map"
          className="w-full h-full sm:hidden block object-cover"
        />
      </div>

      <section
        className="relative flex sm:flex-row flex-col w-full h-screen mx-auto sm:bg-hero bg-hero-mobile overflow-hidden"
      >
        <div
          className={`${styles.paddingX} max-w-7xl mx-auto w-full flex sm:flex-row flex-col items-center sm:items-start justify-between gap-6 py-12 sm:py-28`}
        >
          {/* Text column */}
          <div className="flex-1 flex flex-col items-center sm:items-start text-center sm:text-left">
            <h1 className="text-eerieBlack font-mova font-bold uppercase sm:text-[40px] text-[28px]">
              Hi, I'm
            </h1>

            <h1 className="text-eerieBlack font-mova font-extrabold uppercase sm:text-[55px] text-[35px] leading-tight mt-2">
              Gaurish Budhiraja
            </h1>

            <p className="mt-4 text-eerieBlack text-[16px] sm:text-[18px] leading-relaxed max-w-lg">
              I am a motivated and versatile individual, always eager to take on new challenges. With a passion for learning I am dedicated to delivering high-quality results. With a positive attitude and a growth mindset, I am ready to make a meaningful contribution and achieve great things.
            </p>

            {/* Social / quick links — centered on small screens, left on large */}
            <div className="mt-6 w-full flex justify-center sm:justify-start">
              <div className="flex flex-row gap-3 items-center">
                <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="px-3 py-2 rounded-md text-sm bg-night text-timberWolf">LinkedIn</a>
                <a href="https://github.com/" target="_blank" rel="noreferrer" className="px-3 py-2 rounded-md text-sm bg-night text-timberWolf">GitHub</a>
                <a href="/resume.pdf" target="_blank" rel="noreferrer" className="px-3 py-2 rounded-md text-sm bg-night text-timberWolf">Resume</a>
                <a href="https://leetcode.com/" target="_blank" rel="noreferrer" className="px-3 py-2 rounded-md text-sm bg-night text-timberWolf">LeetCode</a>
              </div>
            </div>
          </div>

          {/* Profile circle: large on desktop, small on mobile */}
          <div className="flex-shrink-0 flex items-center justify-center mt-8 sm:mt-0">
            {/* Desktop large */}
            <div className="hidden sm:block">
              <div className="w-[300px] h-[300px] rounded-full overflow-hidden border-4 border-gray-300 shadow-2xl transform -translate-x-6">
                <img src={MainImg} alt="profile" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Mobile small */}
            <div className="sm:hidden">
              <div className="w-[120px] h-[120px] rounded-full overflow-hidden border-4 border-gray-300 shadow-lg">
                <img src={MainImg} alt="profile" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className="absolute xs:bottom-10 bottom-28 w-full flex justify-center items-center"
        >
          <a href="#about">
            <div
              className="w-[35px] h-[64px] rounded-3xl border-4 border-french border-dim flex
            justify-center items-start p-2"
            >
              <motion.div
                animate={{ y: [0, 24, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, repeatType: 'loop' }}
                className="w-3 h-3 rounded-full bg-taupe mb-1"
              />
            </div>
          </a>
        </div>
      </section>
    </>
  );
};

export default Hero;
