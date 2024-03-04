import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Bistro-Boss Restaurant",
    image: "./bistroBoss.png",
    description:
      "This is a restaurant based project. In this project user can order foopds on their demand. Before order user must be signed in. For authentication I used google firebase auth. There is a user dashbord and Admin dashbord. From user dashbord user can cancel food order. Can see there ordered food.How much should they for food. In admin dashbord user can delete a user, add a food items, delete food items. Many more just explore the project.",
    codelink: "https://github.com/Nahid-07/Bistro-boss-client",
    backendCode: "https://github.com/Nahid-07/bistro-boss-server",
    liveLink: "https://bistro-boss-a90cb.web.app/",
  },
  {
    id: 2,
    title: "Travelog",
    image:
      "./travelog.png",
    description:
      "This is a Travel guide based project.. where visitor can see the details of a tourist spot. Visitor can give their review. also they can edit and delete there review from a separete section.",
      liveLink: "https://a-11-firebase-authantication.web.app/",
      codelink:'https://github.com/Nahid-07/Travelog-client',
      backendCode: "https://github.com/Nahid-07/Travelog-server"
  },
  {
    id: 3,
    title: "TechBD",
    liveLink: "https://a10-learning-client-side.web.app/",
    codelink:"https://github.com/Nahid-07/TechBD-client?tab=readme-ov-file",
    backendCode:"https://github.com/Nahid-07/techBD-server",
    image:
      "./techbd.png",
    description:
      "This is a course selling project. Privet route.User log in and log out method used. blog section added. FAQ section. and many more!!!! just expolre the project..",
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
  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);
  return (
    <section id="Portfolio">
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.image} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <div className="buttons">
              <a href={item.liveLink} target="_blank">
                <button>Live link</button>
              </a>
              <a href={item.codelink} target="_blank">
                <button>Client code </button>
              </a>
              <a href={item.backendCode} target="_blank">
                <button>Backend code</button>
              </a>
            </div>
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
