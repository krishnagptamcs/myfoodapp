import React from "react";
import { IoFastFood } from "react-icons/io5";
import { Link } from "react-router-dom";
import { FiShoppingCart, FiLogIn } from "react-icons/fi";
import { FaUser } from "react-icons/fa";
import { motion } from "framer-motion";

const Header = ({ isAuthenticate = false }) => {
  return (
    <nav>
      <motion.div initial={{ x: "-100%" }} whileInView={{ x: 0 }}>
        <IoFastFood />
      </motion.div>

      <div>
        <Link to="/"> Home</Link>
        <Link to="/contactus"> Contactus</Link>
        <Link to="/about"> About</Link>
        <Link to="/cart">
          {" "}
          <FiShoppingCart />
        </Link>
        <Link to={isAuthenticate ? "/me" : "/login"}>
          {isAuthenticate ? <FaUser /> : <FiLogIn />}
        </Link>
      </div>
    </nav>
  );
};

export default Header;
