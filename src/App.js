import React, { useState, useEffect } from "react";
import ProductForm from "./components/ProductForm";
import ProductList from "./components/ProductList";
import "./index.css";

function App() {
  const [products, setProducts] = useState([
    { id: 1, name: "Kopi Arabica", price: 25000, stock: 10 },
    { id: 2, name: "Teh Hijau", price: 15000, stock: 5 }
  ]);


  useEffect(() => {
    const savedProducts = JSON.parse(localStorage.getItem("products")) || [];
    setProducts(savedProducts);
  }, []);

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  const addProduct = (product) => setProducts([...products, product]);

  const updateProduct = (updatedProduct) =>
    setProducts(
      products.map((p) => (p.id === updatedProduct.id ? updatedProduct : p))
    );

  const deleteProduct = (id) =>
    setProducts(products.filter((p) => p.id !== id));

  return (
    <div className="container">
      <h1>📦 CRUD Produk React</h1>
      <ProductForm addProduct={addProduct} />
      <ProductList
        products={products}
        updateProduct={updateProduct}
        deleteProduct={deleteProduct}
      />
    </div>
  );
}

export default App;
