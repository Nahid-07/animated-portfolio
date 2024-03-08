import "./aboutme.scss";
import { motion } from "framer-motion";

const AboutMe = () => {
  const textVariants = {
    initial: {
      x: 200,
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
  const imageVariants = {
    initial: {
      x: -200,
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
  return (
    <div className="aboutMe">
      <motion.div
        className="imageContainer"
        initial="initial"
        whileInView="animate"
        variants={imageVariants}
      >
        <img src="/output.jpg" alt="" />
      </motion.div>
      <motion.div
        className="textContainer"
        initial="initial"
        whileInView="animate"
        variants={textVariants}
      >
        <motion.h1 variants={textVariants}>About me</motion.h1>
        <motion.p variants={textVariants}>
          Passionate React.js Developer with a 2+ year track record in shaping
          engaging and innovative frontend experiences. Proficient in the
          trifecta of web technologies HTML, CSS, and JavaScript alongside
          mastery in React.js for creating dynamic and responsive interfaces.
          Experienced in the art of design integration, leveraging the
          capabilities of Tailwind CSS and Bootstrap to bring aesthetic
          excellence to every project. Equally adept at server-side development
          with Express.js and seamlessly connecting applications to the cloud
          with Firebase. Excited about contributing expertise to
          forward-thinking projects and taking on challenges that push the
          boundaries of innovation in web development.
        </motion.p>
      </motion.div>
    </div>
  );
};

export default AboutMe;
