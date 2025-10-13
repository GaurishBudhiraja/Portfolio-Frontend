import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon, link }) => {
  const CardContent = (
    <div className="bg-jetLight rounded-[20px] py-5 px-8 min-h-[240px] flex justify-evenly items-center flex-col">
      <img src={icon} alt={title} className="w-16 h-16 object-contain" />
      <h3 className="text-taupe text-[18px] font-bold text-center mt-4">
        {title}
      </h3>
    </div>
  );

  return (
    <motion.div
      variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
      className="xs:w-[250px] w-full card-gradient p-[1px] rounded-[20px] shadow-card"
    >
      {link ? (
        <a href={link} target="_blank" rel="noopener noreferrer">
          {CardContent}
        </a>
      ) : (
        CardContent
      )}
    </motion.div>
  );
};

const About = () => {
  return (
    <div className="-mt-[6rem]">
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center sm:text-left`}>Introduction</p>
        <h2 className={`${styles.sectionHeadText} text-center sm:text-left`}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-taupe text-[18px] max-w-3xl leading-[30px] mx-auto sm:mx-0 text-center sm:text-left"
      >
        I am a passionate and driven 2nd-year Computer Science & Engineering student with strong interests in Cybersecurity, Linux systems, AI/ML, and IoT. Over the past year, I have actively transitioned from learning fundamental programming and data structures to building real-world projects that demonstrate practical problem-solving and technical expertise. I have hands-on experience in ethical hacking, ML-based intrusion detection, AI-driven personal assistants, and embedded systems. Through my projects, I have developed a strong ability to apply theoretical knowledge to real-world scenarios, adapt to new technologies quickly, and deliver solutions that are both innovative and effective.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-6 justify-center sm:justify-start">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(About, 'about');
