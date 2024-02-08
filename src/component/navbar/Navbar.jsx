import "./navbar.scss";

const Navbar = () => {
  return (
    <nav className="navbar">
        {/* sidebar */}
      <div className="wrapper">
        <span>Developer Nahidul</span>
        <div className="social">
          <img src="../../../public/facebook.png" alt="" />
          <img src="../../../public/instagram.png" alt="" />
          <img src="../../../public/youtube.png" alt="" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
