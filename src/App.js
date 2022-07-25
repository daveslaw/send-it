import "./App.css";
import Home from "./routes/Home/Home";
import NavBar from "./routes/NavBar/NavBar";
import Shop from "../src/routes/Shop/Shop";
import Authentication from "./routes/Authentication/Authentication";
import { Route, Routes } from "react-router-dom";
import Checkout from "./routes/Checkout/Checkout";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<NavBar />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;
