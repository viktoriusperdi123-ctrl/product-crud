<input
  type="text"
  placeholder="Nama Produk, misal: Laptop"
  value={name}
  onChange={(e) => setName(e.target.value)}
  required
/>
<input
  type="number"
  placeholder="Harga Produk, misal: 5000000"
  value={price}
  onChange={(e) => setPrice(e.target.value)}
  required
/>
