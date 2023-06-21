import "./style/app.scss";
import "./style/header.scss";
import { Routes, Route } from "react-router-dom";
import Home from "./component/home/Home";
import Header from "./component/layout/Header";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
