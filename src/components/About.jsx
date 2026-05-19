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
      I am a Computer Science & Engineering undergraduate focused on Cybersecurity, Linux systems, DevSecOps, and network security engineering. Over time, I have evolved from core programming and data structures into building practical security-focused systems, exploring vulnerability research, and developing both defensive and offensive cybersecurity solutions.
      My experience includes Linux server hardening, network traffic analysis, intrusion detection systems, security automation, cloud and container-based workflows, and full-stack engineering. I actively work with technologies and tools such as Docker, Kubernetes, Burp Suite, Metasploit, Wireshark, Nmap, GitHub, and SIEM-based environments while continuously practicing real-world attack and defense scenarios through CTF platforms.
      Through hands-on projects, research, and continuous learning, I aim to design scalable, resilient, and security-oriented systems that bridge software engineering, infrastructure security, and DevSecOps practices. I am highly motivated to contribute to production-grade cybersecurity infrastructure, SOC operations, detection engineering, and secure software development environments.
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
