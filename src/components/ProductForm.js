import React, { useState } from "react";

function ProductForm({ addProduct }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !price) return alert("Isi semua kolom!");
    addProduct({ id: Date.now(), name, price });
    setName("");
    setPrice("");
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nama Produk (contoh: Laptop)"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Harga Produk (contoh: 5000000)"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <button type="submit">Tambah</button>
    </form>
  );
}

export default ProductForm;
