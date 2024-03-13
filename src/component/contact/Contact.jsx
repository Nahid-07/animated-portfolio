import { useRef, useState } from "react";
import "./contact.scss";
import { motion, useInView } from "framer-motion";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const variants = {
    initial: {
      y: 500,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  };

  const ref = useRef();
  const inView = useInView(ref, { margin: "100px" });


  // sending email \
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_e3920a4', 'template_q8lg3oa', form.current, {
        publicKey: 'QgfKRvDyGdxr1iWcp',
      })
      .then(
        () => {
          
        },
        (error) => {
        
        },
      );
  };
  return (
    <motion.div
      ref={ref}
      className="contact"
      variants={variants}
      initial="initial"
      whileInView="animate"
    >
      <motion.div className="textContainer">
        <motion.h1 variants={variants}>Let's work togerher</motion.h1>
        <motion.div className="item" variants={variants}>
          <h2>Main</h2>
          <span>nahidasif1998@gmail.com</span>
        </motion.div>
        <motion.div className="item" variants={variants}>
          <h2>Address</h2>
          <span>Dhaka, Bangladesh</span>
        </motion.div>
        <motion.div className="item" variants={variants}>
          <h2>Phone</h2>
          <span>+8801686858436</span>
        </motion.div>
      </motion.div>
      <div className="formContainer">
        <motion.form
        ref={form}
        onSubmit={sendEmail}
          variants={variants}
        >
          <input type="text" required placeholder="Name" name="name" />
          <input type="Eamil" required placeholder="Email" name="email"/>
          <textarea rows="8" placeholder="Message" name="message"></textarea>
          <button type="submit">Submit</button>
        </motion.form>
      </div>
    </motion.div>
  );
};

export default Contact;
