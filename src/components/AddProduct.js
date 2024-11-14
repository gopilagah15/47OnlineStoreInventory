import React, { useState } from 'react';

const AddProduct = ({ addProduct }) => {
  const [name, setName] = useState('');
  const [stock, setStock] = useState('');
  const [restockThreshold, setRestockThreshold] = useState('');

  const handleAdd = () => {
    if (name && stock && restockThreshold) {
      addProduct(name, stock, restockThreshold);
      setName('');
      setStock('');
      setRestockThreshold('');
    }
  };

  return (
    <div className="add-product-form">
      <h2>Add Product</h2>
      <label>
        Product Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter product name"
        />
      </label>
      <label>
        Stock Level:
        <input
          type="number"
          value={stock}
          onChange={(e) => setStock(e.target.value)}
          placeholder="Enter initial stock"
        />
      </label>
      <label>
        Restock Threshold:
        <input
          type="number"
          value={restockThreshold}
          onChange={(e) => setRestockThreshold(e.target.value)}
          placeholder="Enter restock threshold"
        />
      </label>
      <button onClick={handleAdd}>Add Product</button>
    </div>
  );
};

export default AddProduct;
