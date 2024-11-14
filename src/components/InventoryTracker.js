import React, { useState } from 'react';
import AddProduct from './AddProduct';
import ProductList from './ProductList';
import InventoryReport from './InventoryReport';

const InventoryTracker = () => {
  const [inventory, setInventory] = useState([]);

  // Function to add a new product to the inventory
  const addProduct = (name, stock, restockThreshold) => {
    const newProduct = {
      id: inventory.length + 1,
      name,
      stock: parseInt(stock),
      restockThreshold: parseInt(restockThreshold),
      sold: 0,
    };
    setInventory([...inventory, newProduct]);
  };

  // Function to mark a product as sold
  const markAsSold = (id, quantity) => {
    setInventory(
      inventory.map((product) =>
        product.id === id && product.stock >= quantity
          ? { ...product, stock: product.stock - quantity, sold: product.sold + quantity }
          : product
      )
    );
  };

  return (
    <div className="inventory-container">
      <h1>Online Store Inventory Tracker</h1>
      <AddProduct addProduct={addProduct} />
      <ProductList inventory={inventory} markAsSold={markAsSold} />
      <InventoryReport inventory={inventory} />
    </div>
  );
};

export default InventoryTracker;
