import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    category: "",
    quantity: "",
    price: "",
  });

  const API = "http://127.0.0.1:8000";

  const fetchProducts = async () => {
    try {
      const res = await axios.get(`${API}/products`);
      setProducts(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const addProduct = async (e) => {
    e.preventDefault();

    try {
      await axios.post(`${API}/products`, {
        name: formData.name,
        category: formData.category,
        quantity: Number(formData.quantity),
        price: Number(formData.price),
      });

      setFormData({
        name: "",
        category: "",
        quantity: "",
        price: "",
      });

      fetchProducts();
    } catch (error) {
      console.log(error);
    }
  };

  const deleteProduct = async (id) => {
    try {
      await axios.delete(`${API}/products/${id}`);
      fetchProducts();
    } catch (error) {
      console.log(error);
    }
  };

  const filteredProducts = products.filter(
    (item) =>
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.category.toLowerCase().includes(search.toLowerCase())
  );

  const totalProducts = products.length;

  const totalQuantity = products.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  const totalValue = products.reduce(
    (sum, item) => sum + item.quantity * item.price,
    0
  );

  return (
    <div className="dashboard">
      <h1>📦 Inventory Management Dashboard</h1>

      <div className="stats">
        <div className="card">
          <h3>Total Products</h3>
          <p>{totalProducts}</p>
        </div>

        <div className="card">
          <h3>Total Quantity</h3>
          <p>{totalQuantity}</p>
        </div>

        <div className="card">
          <h3>Total Value</h3>
          <p>₹{totalValue.toLocaleString()}</p>
        </div>
      </div>

      <form className="form" onSubmit={addProduct}>
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="category"
          placeholder="Category"
          value={formData.category}
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="quantity"
          placeholder="Quantity"
          value={formData.quantity}
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="price"
          placeholder="Price"
          value={formData.price}
          onChange={handleChange}
          required
        />

        <button type="submit">Add Product</button>
      </form>

      <input
        className="search"
        type="text"
        placeholder="🔍 Search Product..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Category</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Total</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {filteredProducts.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.category}</td>
              <td>{product.quantity}</td>
              <td>₹{product.price}</td>
              <td>₹{product.quantity * product.price}</td>

              <td>
                <button
                  className="delete-btn"
                  onClick={() => deleteProduct(product.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;