import "./hero.scss";

const Hero = () => {
  return (
    <div className="hero">
      <div className="wraper">
        <div className="textContainer">
          <h2>Nahidul Islam Asif</h2>
          <h1>Frontend and MERN stack developer</h1>
          <div className="buttons">
            <button>See Latest workd</button>
            <button>Contact me</button>
          </div>
          <img src="/scroll.png" alt="" />
        </div>
      </div>
      <div className="slidingTextContainer">
        Frontend Developer MERN stack Developer
      </div>
      <div className="imageContainer">
        <img src="/hero.png" alt="" />
      </div>
    </div>
  );
};

export default Hero;
