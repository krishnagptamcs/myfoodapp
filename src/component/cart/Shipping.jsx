import React from "react";
import { Country, State } from "country-state-city";

const Shipping = () => {
  return (
    <section className="shipping">
      <main>
        <h1>Shipping details</h1>
        <form>
          <div>
            <label>House NO.</label>
            <input type="text" placeholder="enter house no" />
          </div>
          <div>
            <label>City</label>
            <input type="text" placeholder="enter city name" />
          </div>

          <div>
            <label>Country</label>
            <select>
              <option value="">Slect Country</option>
              {Country &&
                Country.getAllCountries().map((item, index) => (
                  <option key={index} value={item.isoCode}>
                    {item.name}
                  </option>
                ))}
            </select>
          </div>
          <div>
            <label>State</label>
            <select>
              <option value="">Select State</option>
              {
                State && State.getStatesOfCountry("IN").map((item,index)=>(
                    <option key={index} value={item.isoCode}>{item.name}</option>   
                ))
              }
            </select>
          </div>

          <div>
            <label>Pin-Code</label>
            <input type="number" placeholder="enter pin code" />
          </div>
          <div>
            <label>Phone-No</label>
            <input type="number" placeholder="enter phone no" />
          </div>

          <button type="button">Place Order</button>
        </form>
      </main>
    </section>
  );
};

export default Shipping;
