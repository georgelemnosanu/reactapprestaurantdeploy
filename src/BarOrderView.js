import React, { useEffect, useState } from 'react';

function KitchenCommandView() {
    const [commands, setCommands] = useState([]);

    useEffect(() => {
      fetch('https://restaurantdemo-production.up.railway.app/command/barCommandList')
        .then((response) => response.json())
        .then((data) => {
          setCommands(data);
        })
        .catch((error) => {
          console.error('Error fetching commands:', error);
        });
    }, []);

  return (
    <div>
      <h2>All Commands for Bar</h2>
      <ul>
        {commands.map((command) => (
          <li key={command.id}>
           <div><strong>Command ID:</strong> {command.id}</div>
  <div><strong>Table Number:</strong> {command.table.id}</div>
  <div><strong>Bar Notes:</strong> {command.barAdditionalInformation}</div>
            <h3>Bar Items:</h3>
            <ul>
              {command.menuItemsWithQuantities.map((menuItem) => (
                <li key={menuItem.id}>
                  <div>Name: {menuItem.menuItem.name}</div>
                  <div>Description: {menuItem.menuItem.description}</div>
                  <div>Quantity: {menuItem.quantity}</div>
                  </li>
                ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default KitchenCommandView;