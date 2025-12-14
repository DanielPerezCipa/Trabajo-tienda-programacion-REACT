import { useState } from "react";
import ProductList from "./ProductList";
import CartItem from "./CartItem";
import AboutUs from "./AboutUs";
import "./App.css";

function App() {
  const [page, setPage] = useState("home");

  return (
    <>
      <nav>
        <button onClick={() => setPage("home")}>Inicio</button>
        <button onClick={() => setPage("products")}>Productos</button>
        <button onClick={() => setPage("cart")}>Carrito</button>
      </nav>

      {page === "home" && <AboutUs />}
      {page === "products" && <ProductList />}
      {page === "cart" && <CartItem />}
    </>
  );
}

export default App;



