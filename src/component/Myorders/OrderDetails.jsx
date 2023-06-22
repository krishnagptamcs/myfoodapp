import React from "react";

const OrderDetails = () => {
  return (
    <section className="orderDetails">
      <main>
        <div>
          <h1>Order Details</h1>
        </div>

        <div>
          <h3>Shipping</h3>
          <p>
            <b>Adress:-</b>
            {"dshjsjs"}
          </p>
        </div>

        <div>
          <h3>Contact</h3>
          <p>
            <b>Name:-</b>
            {"dshjsjs"}
          </p>
          <p>
            <b>Phone no:-</b>
            {"95551"}
          </p>
        </div>

        <div>
          <h3>Status</h3>
          <p>
            <b>Order Status:-</b>
            {"preparing"}
          </p>
          <p>
            <b>Placed at:-</b>
            {"02/02/1998"}
          </p>

          <p>
            <b>dilver at:-</b>
            {"03/03/2050"}
          </p>
        </div>

        <div>
          <h3>Payment</h3>
          <p>
            <b>Payment Method:-</b>
            {"COD"}
          </p>
          <p>
            <b>Payment Refrence:-</b>
            {"dbeajhshjsdn"}
          </p>

          <p>
            <b>Paid at:-</b>
            {"03/03/2050"}
          </p>
        </div>

        <div>
          <h3>Amount</h3>
          <p>
            <b>Items Total:-</b>
            {"555"}
          </p>
          <p>
            <b>Shipping Charges:-</b>
            {"200"}
          </p>

          <p>
            <b>Tax:-</b>
            {"20"}
          </p>

          <p>
            <b>Total:-</b>
            {"2000000"}
          </p>
        </div>


        {/* order data */}

        <article>
          <h1>Ordered Items</h1>
          <div>
            <h4>Cheese Burger</h4>
            <div>
              <span>{12}</span> x <span>{232}</span>
            </div>
          </div>
          <div>
            <h4>Veg Cheese Burger</h4>
            <div>
              <span>{10}</span> x <span>{500}</span>
            </div>
          </div>
          <div>
            <h4>Burger Fries</h4>
            <div>
              <span>{10}</span> x <span>{1800}</span>
            </div>
          </div>

          <div>
            <h4
              style={{
                fontWeight: 800,
              }}
            >
              Sub Total
            </h4>
            <div
              style={{
                fontWeight: 800,
              }}
            >
              ₹{2132}
            </div>
          </div>
        </article>
      </main>
    </section>
  );
};

export default OrderDetails;
