import React from "react";
import me from "../../assets/founder.webp";
import { Link } from "react-router-dom";
import { MdDashboard } from "react-icons/md";

const Profile = () => {
  return (
    <section className="profile">
      <main>
        <img src={me} />
        <h3>Krishna</h3>

        <div>
          <Link to="/admin/dashboard" style={{borderRadius:0,
          backgroundColor:"rgb(40,40,40)"}}> <MdDashboard />Dashboard</Link>
        </div>

        <div>
          <Link to="/myorder">Orders</Link>
        </div>

        <button>Logout</button>
      </main>
    </section>
  );
};

export default Profile;
