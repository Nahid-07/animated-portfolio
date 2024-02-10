import './app.scss'
import Hero from './component/hero/Hero';
import Navbar from './component/navbar/Navbar';
const App = () => {
  return <div>

    <section id='Homepage'>
    <Navbar/>
    <Hero/>
    </section>
    <section id='Services'>services</section>
    <section id='Portfolio'>paralax</section>
    <section id='Contact'>portfolio1</section>
    <section id='About'>portfolio2</section>
    <section>portfolio3</section>
    <section>contact</section>
  </div>;
};

export default App;
