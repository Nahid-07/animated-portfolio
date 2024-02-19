import { useRef } from "react";
import "./parallax.scss";
import { motion, useScroll, useTransform } from "framer-motion";
import SkillBar from "react-skillbars";

const Parallax = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const ytext = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
  const yBG = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
    const skills = [
      { type: "Javascript", level: 80 },
      { type: "React.Js", level: 80 },
      { type: "Next.js", level: 70 },
      { type: "Express.js", level: 75 },
      { type: "Tailwind CSS", level: 90 },
      { type: "Bootstrap", level: 70 },
      { type: "HTML", level: 95 },
      { type: "CSS", level: 95 },
      { type: "Firebase", level: 75 },
      { type: "MongoDB", level: 50 },
    ];
  return (
    <motion.div ref={ref} className="parallax">
      <motion.div style={{ y: ytext }} className="wrapper">
        <h1>My skills</h1>
        <SkillBar skills={skills}></SkillBar>
      </motion.div>
      <motion.div className="mountains"></motion.div>
      <motion.div
        style={{
          y: yBG,
          backgroundImage: `url(${"/planets.png"})`,
        }}
        className="planets"
      ></motion.div>
      <motion.div style={{ x: yBG }} className="stars"></motion.div>
    </motion.div>
  );
};

export default Parallax;
