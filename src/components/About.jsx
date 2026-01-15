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
    <div className="-mt-[6rem]">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-taupe text-[18px] max-w-3xl leading-[30px]"
      >
      I am a motivated Computer Science & Engineering undergraduate specializing in Cybersecurity, Linux security infrastructure, and network defense engineering. Over the past year, I have transitioned from core programming and data structures into building real-world security systems, performing vulnerability research, and developing defensive and offensive cybersecurity solutions.
      My work spans ethical hacking, blue team operations, Linux server hardening, network traffic analysis, ML-based intrusion detection, AI-driven automation, and embedded security systems. I actively work with security tools such as Burp Suite, Metasploit, Wireshark, Nmap, and SIEM environments, and regularly practice real-world attack and defense scenarios through CTF platforms.
      Through hands-on projects and applied research, I have developed the ability to translate theoretical security concepts into practical, scalable, and resilient systems. I adapt rapidly to new technologies and am deeply motivated to contribute to production-grade cybersecurity infrastructure, SOC operations, and network security engineering.
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
