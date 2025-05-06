import '../Style/SecondAboutSection.css';
import contexticon from '/Images/Home/Titles Logo.png';
import { motion } from 'framer-motion';

export default function SecondAboutSection() {

  const headingVariant = {
    hidden: { y: -50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8 } },
  };

  const paragraphVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: (i) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: i * 0.2 + 0.5, // يبدأ بعد العنوان مباشرة
        duration: 0.8,
      },
    }),
  };

  const texts = [
    "Proven Results: Our strategies are built on performance data to deliver measurable success and return on investment (ROI).",
    "Innovative Approach: We stay ahead of the curve with the latest tools, trends, and technologies in the advertising world.",
    "Tailored Solutions: We don’t believe in one-size-fits-all –, So every campaign is custom-designed to meet your unique business needs.",
    "Transparent Communication: We provide regular updates, insights, and reports to keep you in the loop throughout the process.",
  ];

  return (
    <div className="About">
      <div className="overlay-content2">
        <motion.div
          className="Abouttitle"
          variants={headingVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <h1>
            <img src={contexticon} alt="decor" className="decor4" /> Why Choose Us?
          </h1>
        </motion.div>

        {texts.map((text, index) => (
          <motion.p
            key={index}
            custom={index}
            variants={paragraphVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            {text}
          </motion.p>
        ))}
      </div>
    </div>
  );
}
