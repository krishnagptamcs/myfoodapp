import React from "react";
import { Link } from "react-router-dom";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS ,Tooltip, ArcElement, Legend } from "chart.js";

ChartJS.register(Tooltip,ArcElement,Legend)

const Box = ({ title, value }) => {
  return (
    <>
      <h3>{title}</h3>
      <p>
        {title === "Income" && "₹"}
        {value}
      </p>
    </>
  );
};

const Dashboard = () => {
  const data = {
    labels :["Preparing","Shipped","Diliverd"],

    datasets: [
      {
        label: "# of orders",
        data: [20, 10, 40],
        backgroundColor: [
          "rgba(159,63,176,0.1)",
          "rgba(78,63,176,0.2)",
          "rgba(156,0,60,0.3)",
        ],
        borderColor: ["rgb(159,63,176)", "rgb(78,63,176)", "rgb(156,0,60)"],
        borderWidth: 1,
      },
    ],
  };
  return (
    <section className="dashboard">
      <main>
        <article>
          <div>
            <Box title="Users" value={128} />
          </div>

          <div>
            <Box title="Orders" value={23} />
          </div>

          <div>
            <Box title="Income" value={123000} />
          </div>
        </article>

        <section>
          <div>
            <Link to="/admin/orders">View orders</Link>
            <Link to="/admin/users">View Users</Link>
          </div>

          {/* for chart */}
          <aside>
            <Doughnut data={data} />
          </aside>
        </section>
      </main>
    </section>
  );
};

export default Dashboard;
