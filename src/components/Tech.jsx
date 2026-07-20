import { motion } from 'framer-motion';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { textVariant } from '../utils/motion';

const skillBoxes = [
  {
    title: 'Programming Languages',
    content: 'C • C++ • Python • Java • JavaScript • SQL • HTML • CSS • Bash',
  },

  {
    title: 'Cybersecurity',
    content: 'Network Security • IDS/IPS • Threat Hunting • SOC Operations • Digital Forensics • OSINT • VAPT • Network Traffic Analysis • Web Security Testing • Android Security Testing • Capture The Flag (CTFs)',
  },

  {
    title: 'Tools & Technologies',
    content: 'Git • GitHub • Linux (Kali, Ubuntu, Arch) • Wireshark • Burp Suite • Metasploit • Nmap • Nessus • VS Code • Figma • Anaconda • TensorFlow • Suricata • Palo Alto Panorama',
  },

  {
    title: 'Platforms, Cloud & DevOps',
    content: 'Linux • AWS • Google Cloud Platform • Docker • Kubernetes • GitHub Actions • Computer Networks • Operating Systems • Bash Scripting • CI/CD Pipelines • Data Structures & Algorithms',
  },
];
 
const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="mb-12">
        <p className={styles.sectionSubTextLight}>My Skills</p>
        <h2 className={`${styles.sectionHeadTextLight} text-4xl sm:text-5xl`}>
          Technologies
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-12">
        {skillBoxes.map((box, index) => (
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

export default SectionWrapper(Tech, 'skills');
