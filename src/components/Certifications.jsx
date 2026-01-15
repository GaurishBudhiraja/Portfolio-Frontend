import { motion } from 'framer-motion';
import { useRef } from 'react';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { textVariant } from '../utils/motion';

const certBoxes = [
  {
    title: 'Blue Team Junior Analyst – Security Blue Team',
    content: 'DFIR, OSINT, Threat Hunting, Dark Web Operations, Vulnerability Management, Network Analysis, Wireshark, Traffic Anomaly Detection',
    img: '/assets/certs/sbt.png',
    pdf: '/assets/certs/sbt.pdf',
  },
  {
    title: 'Network Security Professional – Palo Alto Networks',
    content: 'NGFW, Panorama, SASE, CDSS, Enterprise Firewall Architecture, PCAP Forensics',
    img: '/assets/certs/paloalto.png',
    pdf: '/assets/certs/paloalto.pdf',
  },
  {
    title: 'Cybersecurity Essentials – IBM',
    content: 'Security Operations, Threat Modeling, Vulnerability Management',
    img: '/assets/certs/ibm.png',
    pdf: '/assets/certs/ibm.pdf',
  },
  {
    title: 'Career Essentials in Generative AI – Microsoft & LinkedIn',
    content: 'AI Automation, Computer Ethics, Prompt Engineering',
    img: '/assets/certs/aia.png',
    pdf: '/assets/certs/aia.pdf',
  },
  {
    title: 'Career Essentials in Software Development – Microsoft & LinkedIn',
    content: 'Python, Software Development, Programming Concepts',
    img: '/assets/certs/ais.png',
    pdf: '/assets/certs/ais.pdf',
  },
];

const Certifications = () => {
  const slider = useRef(null);

  const slide = (dir) => {
    slider.current.scrollLeft += dir * 350;
  };

  return (
    <>
      <motion.div variants={textVariant()} className="mb-12">
        <p className={styles.sectionSubTextLight}>My Certifications</p>
        <h2 className={`${styles.sectionHeadTextLight} text-4xl sm:text-5xl`}>
          Professional Credentials
        </h2>
      </motion.div>

      <div className="relative">

        {/* LEFT */}
        <button onClick={() => slide(-1)} className="slider-btn left">‹</button>

        {/* SLIDER */}
        <div ref={slider} className="flex overflow-x-auto gap-8 scroll-smooth no-scrollbar">

          {certBoxes.map((box, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, boxShadow: '0 0 35px rgba(0,255,255,.6)' }}
              className="bg-jetLight border-2 border-gray-700 rounded-xl min-w-[320px] p-6 flex-shrink-0 text-center"
            >
              <a href={box.pdf} target="_blank">
                <img src={box.img} className="h-40 mx-auto mb-4 object-contain" />
              </a>
              <a href={box.pdf} target="_blank">
                <h3 className="text-timberWolf font-extrabold text-xl mb-2 hover:underline">
                  {box.title}
                </h3>
              </a>
              <p className="text-taupe text-sm leading-relaxed">{box.content}</p>
            </motion.div>
          ))}

        </div>

        {/* RIGHT */}
        <button onClick={() => slide(1)} className="slider-btn right">›</button>
      </div>
    </>
  );
};

export default SectionWrapper(Certifications, 'certifications');
