import "./myskilss.scss";
import { motion } from "framer-motion";

const MySkills = () => {
  const skillVariant = {
    initial: {
      x: -500,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      },
    },
  };
  const hrVariants = {
    initial: {
      width: "0%",
      opacity: 0,
    },
    animate: {
      opacity: 1,
      width: "100%",
      transition: {
        delay: 1,
        duration: 3,
      },
    },
  };
  return (
    <div className="skillSection">
      <motion.div
        className="myskills"
        variants={skillVariant}
        initial="initial"
        whileInView="animate"
      >
        <div className="skills">Technology I, use for my work</div>
        <div className="beside">
          <motion.h1 variants={skillVariant}>React.Js</motion.h1>{" "}
          <motion.hr
            variants={hrVariants}
            initial="initial"
            whileInView="animate"
          />
        </div>
        <div className="beside">
          <motion.h1 variants={skillVariant}>JavaScript</motion.h1>{" "}
          <motion.hr
            variants={hrVariants}
            initial="initial"
            whileInView="animate"
          />{" "}
        </div>
        <div className="beside">
          <motion.h1 variants={skillVariant}>Next.Js</motion.h1>{" "}
          <motion.hr
            variants={hrVariants}
            initial="initial"
            whileInView="animate"
          />
        </div>
        <div className="beside">
          <motion.h1 variants={skillVariant}>HTML</motion.h1>{" "}
          <motion.hr
            variants={hrVariants}
            initial="initial"
            whileInView="animate"
          />
        </div>
        <div className="beside">
          <motion.h1 variants={skillVariant}>CSS</motion.h1>{" "}
          <motion.hr
            variants={hrVariants}
            initial="initial"
            whileInView="animate"
          />
        </div>
        <div className="beside">
          <motion.h1 variants={skillVariant}>Tailwind CSS</motion.h1>{" "}
          <motion.hr
            variants={hrVariants}
            initial="initial"
            whileInView="animate"
          />
        </div>
        <div className="beside">
          <motion.h1 variants={skillVariant}>Bootstrap</motion.h1>{" "}
          <motion.hr
            variants={hrVariants}
            initial="initial"
            whileInView="animate"
          />
        </div>
        <div className="beside">
          <motion.h1 variants={skillVariant}>Express.Js</motion.h1>{" "}
          <motion.hr
            variants={hrVariants}
            initial="initial"
            whileInView="animate"
          />
        </div>
        <div className="beside">
          <motion.h1 variants={skillVariant}>Node.Js</motion.h1>{" "}
          <motion.hr
            variants={hrVariants}
            initial="initial"
            whileInView="animate"
          />
        </div>
        <div className="beside">
          <motion.h1 variants={skillVariant}>MongoDB</motion.h1>{" "}
          <motion.hr
            variants={hrVariants}
            initial="initial"
            whileInView="animate"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default MySkills;
