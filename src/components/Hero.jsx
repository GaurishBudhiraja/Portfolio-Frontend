import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { navLinks } from '../constants';
import { shaq, bwmap, worldmap } from '../assets';
import MainImg from "../assets/Main.jpg";
 
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
        className="relative flex sm:flex-row flex-col w-full h-screen mx-auto 
        sm:bg-hero bg-hero-mobile overflow-hidden"
      >
        <div
          className={`absolute inset-0 sm:top-[170px] top-[90px] 
          lg:top-[110px] xl:top-[160px] ${styles.paddingX} 
          max-w-7xl mx-auto flex flex-row items-start justify-between gap-6`}
        >
          {/* Left line (optional design element) */}
          <div className="flex flex-col justify-center items-center mt-5 ml-3">
            <div className="w-5 h-5 rounded-full bg-[#0a0a0a] sm:hidden" />
            <div className="w-1 sm:h-80 h-40 bw-gradient sm:hidden" />
          </div>

          {/* Text + Image container */}
          <div className="flex-1 flex flex-col sm:flex-row items-start sm:items-center gap-6 mt-10">
            {/* Text section */}
            <div className="flex-1 flex flex-col justify-center items-start gap-3">
              <h1 className="text-eerieBlack font-mova font-bold uppercase sm:text-[40px] text-[28px]">
                Hi, I'm
              </h1>

              <h1 className="text-eerieBlack font-mova font-extrabold uppercase sm:text-[55px] text-[35px] leading-tight">
                Gaurish Budhiraja
              </h1>

              <p className="mt-4 text-eerieBlack text-[16px] sm:text-[18px] leading-relaxed max-w-lg">
                I am a motivated and versatile individual, always eager to take on new challenges. With a passion for learning I am dedicated to delivering high-quality results. With a positive attitude and a growth mindset, I am ready to make a meaningful contribution and achieve great things.
              </p>
            </div>

            {/* Profile image on the right */}
            <div className="flex-shrink-0 mt-6 sm:mt-0 -ml-6">
              <img
                src={MainImg}
                alt="profile"
                className="w-72 h-72 rounded-full object-cover border-4 border-gray-300 shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center"
        >
          <a href="#about">
            <div className="w-[35px] h-[64px] rounded-3xl border-4 border-french border-dim flex
            justify-center items-start p-2">
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
