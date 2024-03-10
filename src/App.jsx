import "./app.scss";
import AboutMe from "./component/aboutme/AboutMe";
import Contact from "./component/contact/Contact";
import Hero from "./component/hero/Hero";
import MySkills from "./component/mySkills/MySkills";
import Navbar from "./component/navbar/Navbar";
import Portfolio from "./component/portfolio/Portfolio";
const App = () => {
  return (
    <div>
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
      <section id="About">
        <AboutMe />
      </section>
      <section id="Skills">
        <MySkills />
      </section>
      <Portfolio />
      <section id="Contact">
        {/* <Contact /> */}
      </section>
    </div>
  );
};

export default App;
