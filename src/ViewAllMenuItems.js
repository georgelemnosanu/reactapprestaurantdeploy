import React, { useState, useEffect } from 'react';
import EditMenuItem from './EditMenuItem';

function ViewAllMenuItems() {
  const [menuItems, setMenuItems] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [menuItemToEdit, setMenuItemToEdit] = useState(null);
  const [newName, setNewName] = useState('');
  const [newDescription, setNewDescription] = useState('');
  const [newPrice, setNewPrice] = useState(0);

  const fetchMenuItems = async () => {
    try {
      const response = await fetch('https://lmncheap.store/menuItem/viewAllMenuItems');
      if (response.ok) {
        const data = await response.json();
        setMenuItems(data);
      } else {
        console.error('Failed to fetch menu items');
      }
    } catch (error) {
      console.error('Error fetching menu items:', error);
    }
  };

  useEffect(() => {
    fetchMenuItems();
  }, []);

  const handleMenuItemEdit = (menuItem) => {
    setIsEditing(true);
    setMenuItemToEdit(menuItem);
   
    setNewName(menuItem.name);
    setNewDescription(menuItem.description);
    setNewPrice(menuItem.price);
  };

  const handleUpdateMenuItem = async () => {
    try {
      const response = await fetch(`http://192.168.1.240:8080/menuItem/editMenuItem/${menuItemToEdit.id}?newName=${newName}&newDescription=${newDescription}&newPrice=${newPrice}`, {
        method: 'PUT',
      });

      if (response.ok) {
      
        console.log('Menu item updated successfully');
        onMenuItemUpdated();
      } else {
     
        console.error('Failed to update menu item');
      }
    } catch (error) {
      console.error('Error updating menu item:', error);
    }
  };

  const onMenuItemUpdated = () => {
    setIsEditing(false);
    setMenuItemToEdit(null);
   
    fetchMenuItems();
  };

  const handleMenuItemDelete = async (menuItemId) => {
    try {
        const response = await fetch(`http://192.168.1.240:8080/menuItem/deleteMenuItem/${menuItemId}`, {
            method: 'DELETE',
          });
          
          if (response.status === 204) {
            
            console.log('Menu item deleted successfully');
           
            fetchMenuItems();
          } 
    } catch (error) {
      console.error('Error deleting menu item:', error);
    }
  };

  return (
    <div>
      <h1>All Menu Items</h1>
      <ul>
        {menuItems.map((menuItem) => (
          <li key={menuItem.id}>
            {menuItem.name}
            {menuItem.description}
            {menuItem.price}
            <button onClick={() => handleMenuItemEdit(menuItem)}>Edit</button>
            <button onClick={() => handleMenuItemDelete(menuItem.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <li>
        <a href="/createMenuItem">Create Menu Item</a>
      </li>

      {isEditing && menuItemToEdit && (
        <div>
          <h2>Edit Menu Item</h2>
          <label>Name:</label>
          <input type="text" value={newName} onChange={(e) => setNewName(e.target.value)} />
          <label>Description:</label>
          <input type="text" value={newDescription} onChange={(e) => setNewDescription(e.target.value)} />
          <label>Price:</label>
          <input type="number" value={newPrice} onChange={(e) => setNewPrice(e.target.value)} />
          <button onClick={handleUpdateMenuItem}>Save Changes</button>
        </div>
      )}
    </div>
  );
}

export default ViewAllMenuItems;