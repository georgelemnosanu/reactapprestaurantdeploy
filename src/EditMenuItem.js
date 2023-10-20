// import React, { useState } from 'react';

// function EditMenuItem({ menuItem, onMenuItemUpdated }) {
//   const [newName, setNewName] = useState(menuItem.name);
//   const [newDescription, setNewDescription] = useState(menuItem.description);
//   const [newPrice, setNewPrice] = useState(menuItem.price);

//   const handleUpdateMenuItem = async () => {
//     try {
//       const response = await fetch(`http://localhost:8080/menuItem/editMenuItem/${menuItem.id}`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           newName,
//           newDescription,
//           newPrice,
//         }),
//       });

//       if (response.ok) {
      
//         console.log('Menu item updated successfully');
//         onMenuItemUpdated();
//       } else {
     
//         console.error('Failed to update menu item');
//       }
//     } catch (error) {
//       console.error('Error updating menu item:', error);
//     }
//   };

//   return (
//     <div>
//       <h2>Edit Menu Item</h2>
//       <label>Name:</label>
//       <input type="text" value={newName} onChange={(e) => setNewName(e.target.value)} />
//       <label>Description:</label>
//       <input type="text" value={newDescription} onChange={(e) => setNewDescription(e.target.value)} />
//       <label>Price:</label>
//       <input type="number" value={newPrice} onChange={(e) => setNewPrice(e.target.value)} />
//       <button onClick={handleUpdateMenuItem}>Save Changes</button>
//     </div>
//   );
// }

// export default EditMenuItem;