import React, { useState, useEffect } from "react";

function ProductForm({ addProduct, updateProduct, editingProduct }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  useEffect(() => {
    if (editingProduct) {
      setName(editingProduct.name);
      setPrice(editingProduct.price);
    }
  }, [editingProduct]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingProduct) {
      updateProduct({ ...editingProduct, name, price });
    } else {
      addProduct({ name, price });
    }
    setName("");
    setPrice("");
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        type="text"
        placeholder="Nama Produk"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Harga"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        required
      />
      <button type="submit">{editingProduct ? "Update" : "Tambah"}</button>
    </form>
  );
}

export default ProductForm;
