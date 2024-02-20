import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Developer Nahidul
        </motion.span>
        <motion.div
          className="social"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <a
            href="https://www.facebook.com/nahidul.islam.106902/"
            target="_blank"
          >
            <img src="/facebook.png" alt="facebook" />
          </a>
          <a href="https://www.instagram.com/mr.asif_07_08/" target="_blank">
            <img src="instagram.png" alt="" />
          </a>
          <a
            href="https://www.linkedin.com/in/nahidul-asif-islam/"
            target="_blank"
          >
            <img src="public/linkedin.png" alt="" />
          </a>
          <a
            href="https://www.fiverr.com/nahidul1998?up_rollout=true"
            target="_blank"
          >
            <img src="public/fiverr-logo.png" alt="fiverr" />
          </a>
          <a href="https://github.com/Nahid-07" target="_blank">
            <img src="public/gitHub.png" alt="" />
          </a>
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar;
