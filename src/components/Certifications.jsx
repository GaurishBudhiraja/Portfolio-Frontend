import { motion } from 'framer-motion';
import { useRef } from 'react';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { textVariant } from '../utils/motion';

const certBoxes = [
  {
    title: 'Blue Team Junior Analyst – Security Blue Team',
    content: 'DFIR, SOC Operations, OSINT, Threat Hunting, Dark Web Operations, Vulnerability Management, VAPT, Network & Malware Analysis, Traffic Anomaly Detection',
    img: '/certs/sbt.png',
    pdf: '/certs/sbt.pdf',
  },
  {
    title: 'Network Security Professional – Palo Alto Networks',
    content: 'NGFW, Panorama, SASE, CDSS, Enterprise Firewall Architecture, PCAP Forensics, Zero Trust',
    img: '/certs/paloalto.png',
    pdf: '/certs/paloalto.pdf',
  },
  {
    title: 'Oracle Cloud Infrastructure Certified Architect Associate',
    content: 'Oracle Cloud Infrastructure (OCI), Cloud Architecture, Compute, Virtual Cloud Networks (VCN), Networking, Load Balancing, Object Storage, Block Volumes, Identity and Access Management (IAM), Cloud Security, High Availability, Fault Domains, Availability Domains, Infrastructure Architecture',
    img: '/certs/oci.png',
    pdf: '/certs/oci.pdf',
  },
  {
    title: 'Cybersecurity Essentials – IBM',
    content: 'Network Security, Cryptography, Authentication, Threat Management, Risk Management, Information Security',
    img: '/certs/ibm.png',
    pdf: '/certs/ibm.pdf',
  },
  {
    title: 'Cybersecurity Analyst Job Simulation – Forage (Tata)',
    content: 'Identity & Access Management (IAM), Identity Governance, Access Control, Security Architecture, Risk Assessment',
    img: '/certs/tata.png',
    pdf: '/certs/tata.pdf',
  },
  {
    title: 'Cyber Security Operations Job Simulation – Forage (Datacom)',
    content: 'Cyber Security Operations, Risk Assessment, Threat Identification, Security Analysis, Incident Response',
    img: '/certs/datacom.png',
    pdf: '/certs/datacom.pdf',
  },
  {
    title: 'Cybersecurity Job Simulation – Forage (Mastercard)',
    content: 'Phishing Awareness, Email Security, Security Awareness, Risk Assessment, Threat Detection',
    img: '/certs/mastercard.png',
    pdf: '/certs/mastercard.pdf',
  },
  {
    title: 'Career Essentials in Generative AI – Microsoft & LinkedIn',
    content: 'AI Automation, Computer Ethics, Prompt Engineering',
    img: '/certs/aia.png',
    pdf: '/certs/aia.pdf',
  },
  {
    title: 'Career Essentials in Software Development – Microsoft & LinkedIn',
    content: 'Python, Software Development, Programming Concepts',
    img: '/certs/ais.png',
    pdf: '/certs/ais.pdf',
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
              className="bg-jetLight border-2 border-gray-700 rounded-xl w-[320px] min-w-[320px] h-[430px] p-6 flex-shrink-0 text-center flex flex-col justify-between"
            >
              <a href={box.pdf} target="_blank" rel="noopener noreferrer">
              <img src={box.img} className="h-[160px] w-full object-contain mb-4" />
              </a>
              <a href={box.pdf} target="_blank">
                <h3 className="text-timberWolf font-extrabold text-xl mb-2 leading-snug hover:underline line-clamp-2">
                {box.title}
                </h3>
              </a>
              <p className="text-taupe text-sm leading-relaxed line-clamp-2">{box.content}</p>
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
