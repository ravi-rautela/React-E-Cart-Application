import Navbar from "./Components/Navbar";
import ProductDetails from "./Components/ProductDetails";
import Products from "./Components/Products";
import SearchItem from "./Components/SearchItem";
import Cart from "./Components/Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { items } from "./Components/Data";
import { useState } from "react";

function App() {
  const [data, setData] = useState([...items]);
  const [cart, setCart] = useState([]);
  return (
    <>
      <BrowserRouter>
        <Navbar cart={cart} setData={setData} />
        <Routes>
          <Route
            path="/"
            element={<Products items={data} cart={cart} setCart={setCart} />}
          />
          <Route
            path="/product/:id"
            element={
              <ProductDetails items={data} cart={cart} setCart={setCart} />
            }
          />
          <Route path="/search/:term" element={<SearchItem />} />
          <Route
            path="/cart"
            element={<Cart cart={cart} setCart={setCart} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
