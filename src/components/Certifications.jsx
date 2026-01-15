import { motion } from 'framer-motion';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { textVariant } from '../utils/motion';

const certBoxes = [
  {
    title: 'Blue Team Junior Analyst – Security Blue Team',
    content: 'DFIR, OSINT, Threat Hunting, Dark Web Operations, SOC Operations',
  },
  {
    title: 'Network Security Professional – Palo Alto Networks',
    content: 'NGFW, Panorama, SASE, CDSS, Enterprise Firewall Architecture',
  },
  {
    title: 'Cybersecurity Essentials – IBM',
    content: 'Security Operations, Threat Modeling, Vulnerability Management',
  },
  {
    title: 'Career Essentials in AI – Microsoft & LinkedIn',
    content: 'AI Automation, ML Concepts, Security Analytics',
  },
  {
    title: 'Network Analysis – Security Blue Team',
    content: 'PCAP Forensics, Wireshark, Traffic Anomaly Detection',
  },
];

const Certifications = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="mb-12">
        <p className={styles.sectionSubTextLight}>My Certifications</p>
        <h2 className={`${styles.sectionHeadTextLight} text-4xl sm:text-5xl`}>
          Professional Credentials
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-12">
        {certBoxes.map((box, index) => (
          <motion.div
            key={index}
            whileHover={{
              rotateX: 10,
              rotateY: 10,
              scale: 1.05,
              boxShadow: '0 15px 30px rgba(0,255,255,0.4)',
            }}
            transition={{ type: 'spring', stiffness: 250, damping: 20 }}
            className="bg-jetLight border-2 border-gray-700 rounded-xl p-8 min-h-[180px] flex items-center justify-center cursor-pointer"
          >
            <div className="text-center">
              <h3 className="text-timberWolf font-extrabold text-2xl sm:text-3xl mb-3">
                {box.title}
              </h3>
              <p className="text-taupe text-sm sm:text-base leading-relaxed">
                {box.content}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Certifications, 'certifications');
