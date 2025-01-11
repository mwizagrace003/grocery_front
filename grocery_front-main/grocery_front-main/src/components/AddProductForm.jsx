import React, { useState } from 'react';
import axios from "axios";

const AddProductForm = ({ sellerId, refreshProducts }) => {
  const [form, setForm] = useState({
    name: '',
    description: '',
    price: '',
    category: 'OTHER',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axiosInstance.post('/seller/products', {
        ...form,
        sellerId,
      });
      refreshProducts();
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Name" onChange={handleChange} />
      <textarea name="description" placeholder="Description" onChange={handleChange}></textarea>
      <input type="number" name="price" placeholder="Price" onChange={handleChange} />
      <select name="category" onChange={handleChange}>
        <option value="FRUITS">Fruits</option>
        <option value="VEGETABLES">Vegetables</option>
        <option value="OTHER">Other</option>
      </select>
      <button type="submit">Add Product</button>
    </form>
  );
};

export default AddProductForm;
