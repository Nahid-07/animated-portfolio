import './app.scss'
import Contact from './component/contact/Contact';
import Hero from './component/hero/Hero';
import Navbar from './component/navbar/Navbar';
import Parallax from './component/parallax/Parallax';
import Portfolio from './component/portfolio/Portfolio';
const App = () => {
  return <div>

    <section id='Homepage'>
    <Navbar/>
    <Hero/>
    </section>
    <section id='Services'><Parallax type='services'/></section>
    <section id='Portfolio'>paralax</section>
    <section id='Contact'><Parallax type="portfolio"/></section>
    <section id='About'>portfolio2</section>
    <Portfolio/>
    <section><Contact/></section>
  </div>;
};

export default App;
