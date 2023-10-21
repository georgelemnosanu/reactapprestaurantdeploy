import React, { useEffect, useState } from 'react';
import './BarOrderView.css'; 

function KitchenOrderView() {
  const [commands, setCommands] = useState([]);

  useEffect(() => {
    fetch('https://restaurantdemo-production.up.railway.app/command/viewAllCommand')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        const filteredCommands = data.filter((command) =>
          command.menuItemsWithQuantities.some(
            (menuItem) => menuItem.menuItem.speciality.specialityClass.id === 2
          )
        );
        setCommands(filteredCommands);
      })
      .catch((error) => {
        console.error('Error fetching commands:', error);
      });
  }, []);

  return (
    <div className="bar-order-view">
      <h2 className="title">Kitchen Orders</h2>
      <div className="notes-container">
  
        {commands.map((command) => (
          <li className="note" key={command.id}>
            <div><strong>Command ID:</strong> {command.id}</div>
            {command.table && (
              <div><strong>Table Number:</strong> {command.table.id}</div>
            )}
            <div><strong>Kitchen Notes:</strong> {command.kitchenAdditionalInformation}</div>
            <h4>Kitchen Items:</h4>
        
              {command.menuItemsWithQuantities
                .filter((menuItem) => menuItem.menuItem.speciality.specialityClass.id === 2)
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

export default KitchenOrderView;