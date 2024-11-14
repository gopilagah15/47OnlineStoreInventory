import React, { useState } from 'react';

const ProductList = ({ inventory, markAsSold }) => {
  const [sellQuantity, setSellQuantity] = useState({});

  const handleSell = (id) => {
    const quantity = parseInt(sellQuantity[id]) || 0;
    markAsSold(id, quantity);
    setSellQuantity({ ...sellQuantity, [id]: '' });
  };

  return (
    <div className="product-list">
      <h2>Product Inventory</h2>
      {inventory.length > 0 ? (
        <ul>
          {inventory.map((product) => (
            <li key={product.id}>
              {product.name}: {product.stock} in stock
              {product.stock <= product.restockThreshold && (
                <span style={{ color: 'red' }}> (Restock Needed)</span>
              )}
              <div>
                <input
                  type="number"
                  value={sellQuantity[product.id] || ''}
                  onChange={(e) =>
                    setSellQuantity({ ...sellQuantity, [product.id]: e.target.value })
                  }
                  placeholder="Quantity to sell"
                />
                <button onClick={() => handleSell(product.id)}>Sell</button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No products in inventory</p>
      )}
    </div>
  );
};

export default ProductList;
