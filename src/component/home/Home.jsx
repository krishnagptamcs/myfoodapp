import React from "react";
import { motion } from "framer-motion";
import Founder from "./Founder";
import Menu from "./Menu";

const Home = () => {
  const options = {
    initial: { opacity: 0, x: "-100%" },
    whileInView: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <>
     <section className="home">
      <div>
        <motion.h1 {...options}>MBA BURGER WALA </motion.h1>
        <motion.p {...options} transition={{
          delay:0.2
        }}> Give yourself taste of a real love </motion.p>
      </div>

      <a href="#menu">Explore our delicious menu</a>
    </section>

    <Founder/>
    <Menu/>
    

    </>
   
  );
};

export default Home;
