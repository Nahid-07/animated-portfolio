import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "React App",
    image:
      "https://images.pexels.com/photos/20054923/pexels-photo-20054923/free-photo-of-moody-days.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem architecto explicabo fugit quia laborum? Molestiae laudantium dolor, minima commodi voluptate neque voluptatem perferendis accusamus deserunt dolore libero! Necessitatibus, dolorum blanditiis.",
  },
  {
    id: 1,
    title: "Next.js App",
    image:
      "https://images.pexels.com/photos/19345556/pexels-photo-19345556/free-photo-of-reflection-of-a-person-in-a-window.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem architecto explicabo fugit quia laborum? Molestiae laudantium dolor, minima commodi voluptate neque voluptatem perferendis accusamus deserunt dolore libero! Necessitatibus, dolorum blanditiis.",
  },
  {
    id: 1,
    title: "JavaScript App",
    image:
      "https://images.pexels.com/photos/20142599/pexels-photo-20142599/free-photo-of-two-swans-are-in-the-water-with-their-heads-touching.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem architecto explicabo fugit quia laborum? Molestiae laudantium dolor, minima commodi voluptate neque voluptatem perferendis accusamus deserunt dolore libero! Necessitatibus, dolorum blanditiis.",
  },
  {
    id: 1,
    title: "C++ App",
    image:
      "https://images.pexels.com/photos/19936782/pexels-photo-19936782/free-photo-of-woman-in-white-dress-walking-on-wet-sea-coast-at-sunset.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem architecto explicabo fugit quia laborum? Molestiae laudantium dolor, minima commodi voluptate neque voluptatem perferendis accusamus deserunt dolore libero! Necessitatibus, dolorum blanditiis.",
  },
  {
    id: 1,
    title: "Html App",
    image:
      "https://images.pexels.com/photos/19300588/pexels-photo-19300588/free-photo-of-woman-pouring-water-from-kettle.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem architecto explicabo fugit quia laborum? Molestiae laudantium dolor, minima commodi voluptate neque voluptatem perferendis accusamus deserunt dolore libero! Necessitatibus, dolorum blanditiis.",
  },
];

const Section = ({ item }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    // offset:["start start","end start"]
  });
  const y = useTransform(scrollYProgress,[0,1],[-300,300])
  return (
    <section id="Portfolio">
      <div className="container" >
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.image} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <button>See more</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });
  return (
    <div className="portfolio" ref={ref} id="Portfolio">
      <div className="progress">
        <h1>Featured works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Section item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
