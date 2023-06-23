import "./style/app.scss";
import "./style/header.scss";
import "./style/home.scss";
import "./style/footer.scss";
import "./style/founder.scss";
import "./style/menu.scss";
import "./style/contact.scss";
import "./style/cart.scss";
import "./style/shipping.scss";
import "./style/confirmorder.scss";
import "./style/paymentsuccess.scss";
import "./style/login.scss";
import "./style/profile.scss";
import "./style/myorder.scss";
import "./style/orderdetails.scss";
import "./style/dashboard.scss";
import "./style/about.scss";

import { Routes, Route } from "react-router-dom";
import Home from "./component/home/Home";
import Header from "./component/layout/Header";
import Footer from "./component/layout/Footer";
import Contact from "./component/contact/Contact";
import Cart from "./component/cart/Cart";
import About from "./component/about/About";
import Shipping from "./component/cart/Shipping";
import ConfirmOrder from "./component/cart/ConfirmOrder";
import PaymentSuccess from "./component/cart/PaymentSuccess";
import Login from "./component/login/Login";
import Profile from "./component/profile/Profile";
import MyOrders from "./component/Myorders/MyOrders";
import OrderDetails from "./component/Myorders/OrderDetails";
import Dashboard from "./component/admin/Dashboard";
import ViewUsers from "./component/admin/ViewUsers";
import ViewOrders from "./component/admin/ViewOrders";
import NotFound from "./component/layout/NotFound";

function App() {
  return (
    <div>
      <Header isAuthenticate={true} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contactus" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/shipping" element={<Shipping />} />
        <Route path="/confirmorder" element={<ConfirmOrder />} />
        <Route path="/paymentsuccess" element={<PaymentSuccess />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/myorder" element={<MyOrders />} />
        <Route path="/order/:id" element={<OrderDetails />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/users" element={<ViewUsers />} />
        <Route path="/admin/orders" element={<ViewOrders />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
