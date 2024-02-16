import "./aboutme.scss";

const AboutMe = () => {
  return (
    <div className="aboutMe">
      <div className="imageContainer">
        <img src="/output.jpg" alt="" />
      </div>
      <div className="textContainer">
        <h1>About me</h1>
        <p>
          Passionate React.js Developer with a 2+ year track record in shaping
          engaging and innovative frontend experiences. Proficient in the
          trifecta of web technologies HTML, CSS, and JavaScript alongside
          mastery in React.js for creating dynamic and responsive interfaces.
          Experienced in the art of design integration, leveraging the
          capabilities of Tailwind CSS and Bootstrap to bring aesthetic
          excellence to every project. Equally adept at server-side development
          with Express.js and seamlessly connecting applications to the cloud
          with Firebase. Excited about contributing expertise to
          forward-thinking projects and taking on challenges that push the
          boundaries of innovation in web development.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
