import React from 'react';

const InventoryReport = ({ inventory }) => {
  const totalSales = inventory.reduce((sum, product) => sum + product.sold, 0);

  return (
    <div className="inventory-report">
      <h2>Inventory Report</h2>
      <h3>Total Sales: {totalSales} items</h3>
      <ul>
        {inventory.map((product) => (
          <li key={product.id}>
            {product.name} - Sold: {product.sold}, Stock Remaining: {product.stock}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InventoryReport;
