import './app.scss'
import AboutMe from './component/aboutme/AboutMe';
import Contact from './component/contact/Contact';
import Hero from './component/hero/Hero';
import MySkills from './component/mySkills/MySkills';
import Navbar from './component/navbar/Navbar';
import Parallax from './component/parallax/Parallax';
import Portfolio from './component/portfolio/Portfolio';
const App = () => {
  return <div>

    <section id='Homepage'>
    <Navbar/>
    <Hero/>
    </section>
    {/* <section id='Services'><Parallax/></section> */}
    <section id='Portfolio'>
      <AboutMe/>
    </section>
    {/* <section id='Contact'><Parallax type="portfolio"/></section> */}
    <section id='skill'><MySkills/></section>
    <Portfolio/>
    <section><Contact/></section>
  </div>;
};

export default App;
