import React from "react";
import MenuCard from "./MenuCard";
import burger1 from "../../assets/burger1.png";
import burger2 from "../../assets/burger2.png";
import burger3 from "../../assets/burger3.png";

const Menu = () => {

  const addToCart = (itemNum)=>{

  }
  return (
    <section id="menu">
      <h1>Menu</h1>
      <div>
        <MenuCard
          itemNum={1}
          price={200}
          burgerSrc={burger1}
          title="cheese burger"
          handler ={addToCart}
        />
        <MenuCard
          itemNum={2}
          price={400}
          burgerSrc={burger2}
          title="Veg-cheese burger"
          handler= {addToCart}
        />
        <MenuCard
          itemNum={3}
          price={800}
          burgerSrc={burger3}
          title="cheese burger-with-coke"
          handler ={ addToCart}
        />
      </div>
    </section>
  );
};

export default Menu;
