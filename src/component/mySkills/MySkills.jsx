import SkillBar from "react-skillbars";
import "./myskilss.scss";
import { motion } from "framer-motion";

const MySkills = () => {
  const skills = [
    { type: 'HTML', level: 100 },
    { type: 'CSS', level: 95 },
    { type: 'TailwindCSS', level: 90 },
    { type: 'React.Js', level: 85 },
    { type: 'Javascript', level: 80 },
    { type: 'Bootstrap', level: 75 },
    { type: 'Next.Js', level: 70 },
    { type: 'Express.Js', level: 65 },
  ];
  const colors = {
    bar: "#cacaca",
    title: {
      text: "#fff",
      background: "#663399"
    }
  };
  return (
    <div className="skillSection">
      <h1 className="skillSectionHeader">Technology i work with</h1>
      <div className="skillBars">
      <SkillBar skills={skills} colors={colors} height={20}></SkillBar>
      </div>
    </div>
  );
};

export default MySkills;
