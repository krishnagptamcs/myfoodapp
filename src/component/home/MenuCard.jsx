import React from "react";
import { motion } from "framer-motion";

const MenuCard = ({ itemNum, burgerSrc, price, title, handler }) => {
  return (
    <motion.div className="menuCard">
      <div>{itemNum}</div>
      <main>
        <img src={burgerSrc} />
        <h4> ₹{price}</h4>
        <p>{title}</p>

        <button onClick={() => handler(itemNum)}>Buy Now</button>
      </main>
    </motion.div>
  );
};

export default MenuCard;
