import "./hero.scss";
import { motion } from "framer-motion";

const textVariants = {
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
  scrollButton:{
    opacity:0,
    y:10,
    transition:{
      duration:2,
      repeat:Infinity
    }
  }
};
const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      duration: 20,
      repeatType:"mirror",
      repeat : Infinity
    },
  },
};

const Hero = () => {
  return (
    <div className="hero">
      <motion.div className="wraper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          whileInView="animate"
        >
          <motion.h2 variants={textVariants}>Nahidul Islam Asif</motion.h2>
          <motion.h1 variants={textVariants}>
            Frontend and MERN stack developer
          </motion.h1>
          <motion.div variants={textVariants} className="buttons">
            <motion.button variants={textVariants}>
              <a href="https://drive.usercontent.google.com/u/1/uc?id=1sTCmXeqmhSXrEmfRKJs0NaIPG749wOOv&export=download">Download resume</a>
            </motion.button>
            <motion.button variants={textVariants}> <a href="https://wa.me/message/PCEO3PWW4PLIK1" target="_blank">Contact me</a> </motion.button>
          </motion.div>
          <motion.img variants={textVariants} animate="scrollButton" src="/scroll.png" alt="" />
        </motion.div>
      </motion.div>
      <motion.div variants={sliderVariants} initial="initial" animate="animate" className="slidingTextContainer">
        Frontend Developer MERN stack Developer
      </motion.div>
      <div className="imageContainer">
        <img src="/Group2.png" alt="" />
      </div>
    </div>
  );
};

export default Hero;
