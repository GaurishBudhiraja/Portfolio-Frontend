import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

// Updated ServiceCard to support clickable links
const ServiceCard = ({ index, title, icon, link }) => {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
      className="xs:w-[250px] w-full card-gradient p-[1px] rounded-[20px] shadow-card cursor-pointer hover:scale-105 transition-transform duration-200"
    >
      <div
        className="bg-jetLight rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img src={icon} alt={title} className="w-16 h-16 object-contain" />
        <h3 className="text-taupe text-[18px] font-bold text-center mt-4">
          {title}
        </h3>
      </div>
    </motion.a>
  );
};

const About = () => {
  return (
    <div className="-mt-[6rem] px-4 sm:px-0">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-secondary sm:text-[17px] text-[15px] max-w-3xl leading-[30px] sm:text-left text-center px-1 sm:px-0 break-words"
      >
      I am a Computer Science undergraduate at VIT Chennai with a strong interest in Software Engineering, Cybersecurity, Cloud Computing, DevOps, and Network Security. I enjoy solving complex problems by building practical systems, exploring security challenges, and continuously learning modern technologies.
      Over the past two years, I have worked on projects including an AI-powered virtual assistant, a Machine Learning-based Intrusion Detection System (IDS) for submarine optical fiber networks, a DAS-based physical threat detection framework for submarine cables, a Remote Command Execution & Endpoint Telemetry Framework, VIT SkillMatch, Android security research, and IoT-based automation systems. I have also gained hands-on security engineering experience through my work with DigitalBulwark, while actively participating in Capture The Flag (CTF) competitions and designing and developing cybersecurity challenges and practice environments for college events involving hundreds of teams. 
      Alongside academics, I continuously strengthen my software engineering fundamentals through Data Structures & Algorithms while expanding my knowledge of cloud technologies, Linux systems, networking, DevOps, backend development, and system design. My goal is to build secure, scalable, and high-performance software systems that combine software engineering, infrastructure, automation, and cybersecurity to solve real-world problems.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(About, 'about');
