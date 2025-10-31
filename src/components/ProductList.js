import React, { useState } from "react";

function ProductList({ products, updateProduct, deleteProduct }) {
  const [editId, setEditId] = useState(null);
  const [editName, setEditName] = useState("");
  const [editPrice, setEditPrice] = useState("");

  const startEdit = (product) => {
    setEditId(product.id);
    setEditName(product.name);
    setEditPrice(product.price);
  };

  const saveEdit = () => {
    updateProduct({ id: editId, name: editName, price: editPrice });
    setEditId(null);
  };

  return (
    <table className="product-table">
      <thead>
        <tr>
          <th>Nama Produk</th>
          <th>Harga</th>
          <th>Aksi</th>
        </tr>
      </thead>
      <tbody>
        {products.length === 0 ? (
          <tr>
            <td colSpan="3">Belum ada produk</td>
          </tr>
        ) : (
          products.map((p) => (
            <tr key={p.id}>
              <td>
                {editId === p.id ? (
                  <input
                    value={editName}
                    onChange={(e) => setEditName(e.target.value)}
                  />
                ) : (
                  p.name
                )}
              </td>
              <td>
                {editId === p.id ? (
                  <input
                    type="number"
                    value={editPrice}
                    onChange={(e) => setEditPrice(e.target.value)}
                  />
                ) : (
                  `Rp ${p.price}`
                )}
              </td>
              <td>
                {editId === p.id ? (
                  <>
                    <button onClick={saveEdit}>💾 Simpan</button>
                    <button onClick={() => setEditId(null)}>❌ Batal</button>
                  </>
                ) : (
                  <>
                    <button onClick={() => startEdit(p)}>✏️ Edit</button>
                    <button onClick={() => deleteProduct(p.id)}>🗑️ Hapus</button>
                  </>
                )}
              </td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
}

export default ProductList;
