import React from "react";
import burger1 from "../../assets/burger1.png";
import burger2 from "../../assets/burger2.png";
import burger3 from "../../assets/burger3.png";
import { Link } from "react-router-dom";

const CartItem = ({ value, title, image, inc, dec }) => {
  return (
    <div className="cartItem">
      <div>
        <h4>{title}</h4>
        <img src={image} />
      </div>

      <div>
        <button onClick={dec}>-</button>
        <input type="number" readOnly value={value} />
        <button onClick={inc}>+</button>
      </div>
    </div>
  );
};

const Cart = () => {
  function increment(item) {}
  function decrement(item) {}
  return (
    <section className="cart">
      <main>
        <CartItem
          value={0}
          title="chees-burger"
          image={burger1}
          inc={() => increment(1)}
          dec={() => decrement(1)}
        />
        <CartItem
          value={0}
          title="veg-chees-burger"
          image={burger2}
          inc={() => increment(2)}
          dec={() => decrement(2)}
        />
        <CartItem
          value={0}
          title="supreme-chees-burger"
          image={burger3}
          inc={() => increment(3)}
          dec={() => decrement(3)}
        />
        <article>
          <div>
            <h3>Subtotal</h3>
            <p>₹{2000}</p>
          </div>
          <div>
            <h3>Tax</h3>
            <p>₹{2000 * 0.18}</p>
          </div>
          <div>
            <h3>Shipping</h3>
            <p>₹{20}</p>
          </div>
          <div>
            <h3>Total</h3>
            <p>₹{2000 + 2000 * 0.18 + 20}</p>
          </div>
          <Link to="/shipping">CheckOut</Link>
        </article>

        
      </main>
    </section>
  );
};

export default Cart;
