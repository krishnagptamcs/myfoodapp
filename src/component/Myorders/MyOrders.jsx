import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineEye } from "react-icons/ai";

const MyOrders = () => {

    const arr= [1,2,3,4]
  return (
    // creatoinga table
    <section className="tableClass">
      <main>
        <table>
          <thead>
            <tr>
              <th>Order Id</th>
              <th>Status</th>
              <th>Item Qty</th>
              <th>Payment Method</th>
              <th>Amount</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>

          {
            arr.map((item)=>(
                <tr>
              <td>123ABCD</td>
              <td>Processing</td>
              <td>4</td>
              <td> COD</td>
              <td>555</td>
              <td>
                <Link to={`/order/${"123ABCD"}`}><AiOutlineEye/></Link>
              </td>
            </tr>


            ))
          }
           
          </tbody>
        </table>
      </main>
    </section> 
  );
};

export default MyOrders;
