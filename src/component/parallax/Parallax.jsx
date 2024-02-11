import { useRef } from "react";
import "./parallax.scss";
import {motion, useScroll, useTransform} from 'framer-motion'

const Parallax = ({ type }) => {
    const ref = useRef()
    const {scrollYProgress} = useScroll({
        target:ref,
        offset:["start start", "end start"]
    })

    const ytext = useTransform(scrollYProgress,[0,1], ["0%", "500%"])
    const yBG = useTransform(scrollYProgress,[0,1], ["0%", "100%"])
  return (
    <motion.div
    ref={ref}
      className="parallax"
      style={{
        background:
          type === "services"
            ? "linear-gradient(180deg, #111132, #0c0c1d)"
            : "linear-gradient(180deg, #111132, #505064)",
      }}
    >
      <motion.h1 style={{y:ytext}}>{type === "services" ? "What we do" : "what we did"}</motion.h1>
      <motion.div className="mountains"></motion.div>
      <motion.div style={{y:yBG, backgroundImage:`url(${type === "services" ? '/planets.png': '/sun.png'})`}} className="planets" ></motion.div>
      <motion.div style={{x:yBG}} className="stars"></motion.div>
    </motion.div>
  );
};

export default Parallax;
