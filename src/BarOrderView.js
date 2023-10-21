// import React, { useEffect, useState } from 'react';

// function BarOrderView() {
//   const [commands, setCommands] = useState([]);

//   useEffect(() => {
//     fetch('http://localhost:8080/command/viewAllCommand')
//       .then((response) => response.json())
//       .then((data) => {
//         console.log(data);
//         setCommands(data);
//       })
//       .catch((error) => {
//         console.error('Error fetching commands:', error);
//       });
//   }, []);

//   return (
//     <div>
//       <h2>All Commands for Bar</h2>
//       <ul>
//         {commands.map((command) => (
//           <li key={command.id}>
//             <div><strong>Command ID:</strong> {command.id}</div>
//             {command.table && (
//               <div><strong>Table Number:</strong> {command.table.id}</div>
//             )}
//             <div><strong>Bar Notes:</strong> {command.barAdditionalInformation}</div>
//             <h3>Bar Items:</h3>
//   <ul>
//     {command.menuItemsWithQuantities &&
//       command.menuItemsWithQuantities
//         .filter((menuItem) => menuItem.menuItem.speciality.specialityClass.id === 1)
//         .map((filteredMenuItem) => (
//           <li key={filteredMenuItem.id}>
//             <div>Name: {filteredMenuItem.menuItem.name}</div>
//             <div>Description: {filteredMenuItem.menuItem.description}</div>
//             <div>Quantity: {filteredMenuItem.quantity}</div>
//           </li>
//         ))
//     }
//   </ul>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default BarOrderView;



import React, { useEffect, useState } from 'react';
import './BarOrderView.css'; 

function BarOrderView() {
  const [commands, setCommands] = useState([]);

  useEffect(() => {
    fetch('https://restaurantdemo-production.up.railway.app/command/viewAllCommand')
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
      <h2 className="title">Bar Orders</h2>
      <div className="notes-container">
     
        {commands.map((command) => (
          <li className="note" key={command.id}> 
            <div><strong>Command ID:</strong> {command.id}</div>
            {command.table && (
              <div><strong>Table Number:</strong> {command.table.id}</div>
            )}
            <div><strong>Bar Notes:</strong> {command.barAdditionalInformation}</div>
            <h4>Bar Items:</h4>
            
              {command.menuItemsWithQuantities &&
                command.menuItemsWithQuantities
                  .filter((menuItem) => menuItem.menuItem.speciality.specialityClass.id === 1)
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