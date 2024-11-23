import React, { useEffect, useState } from 'react';
import './BarOrderView.css'; 

function BarOrderView() {
  const [commands, setCommands] = useState([]);

  useEffect(() => {
    fetch('https://lmncheap.store/command/viewAllCommand')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setCommands(data);
      })
      .catch((error) => {
        console.error('Error fetching commands:', error);
      });
  }, []);

  return (
    <div className="bar-order-view"> 
      <h2 className="title">View All Orders</h2>
      <div className="notes-container">
     
        {commands.map((command) => (
          <li className="note" key={command.id}> 
            <div><strong>Command ID:</strong> {command.id}</div>
            {command.table && (
              <div><strong>Table Number:</strong> {command.table.id}</div>
            )}
            <div><strong>Bar Notes:</strong> {command.barAdditionalInformation}</div>
            <div><strong>Kitchen Notes:</strong> {command.kitchenAdditionalInformation}</div>
            <h4>Order Items:</h4>
              {command.menuItemsWithQuantities &&
                command.menuItemsWithQuantities
                  .map((filteredMenuItem) => (
                    <li key={filteredMenuItem.id}>
                      <div>Name: {filteredMenuItem.menuItem.name}</div>
                      <div>Description: {filteredMenuItem.menuItem.description}</div>
                      <div>Quantity: {filteredMenuItem.quantity}</div>
                    </li>
                  ))
              }
          </li>
        ))}
      </div>
    </div>
  );
}
export default BarOrderView;