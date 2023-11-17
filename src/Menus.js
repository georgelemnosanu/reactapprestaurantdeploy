import React, { useState, useEffect } from 'react';

const Menus = () => {
  const [menus, setMenus] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [menuToEdit, setMenuToEdit] = useState(null);
  const [newName, setNewName] = useState('');

  useEffect(() => {
    fetchMenus();
  }, []);

  const handleMenuEdit = (menu) => {
    setIsEditing(true);
    setMenuToEdit(menu);

    setNewName(menu.name);
  };

  const handleUpdateMenu = async () => {
    if (!menuToEdit) {
      console.error('No menu selected for update');
      return;
    }
  
    try {
      const response = await fetch(`http://localhost:8080/menu/editMenu/${menuToEdit.id}?newName=${newName}`, {
        method: 'PUT',
      });
  
      if (response.ok) {
        console.log('Menu updated successfully');
        onMenuUpdated();
      } else {
        console.error('Failed to update menu');
      }
    } catch (error) {
      console.error('Error updating menu:', error);
    }
  };

  const onMenuUpdated = () => {
    setIsEditing(false);
    setMenuToEdit(null);
    fetchMenus();
  };

  const handleMenuDelete = async (menuId) => {
    try {
      const response = await fetch(`http://localhost:8080/menu/deleteMenu/${menuId}`, {
        method: 'DELETE',
      });
  
      if (response.status === 204) {
        console.log('Menu deleted successfully');
        fetchMenus();  
      } else {
        console.error('Failed to delete menu');
      }
    } catch (error) {
      console.error('Error deleting menu:', error);
    }
  };

  const fetchMenus = async () => {
    try {
      const response = await fetch('http://localhost:8080/menu/allMenu');
      const data = await response.json();
      setMenus(data);
    } catch (error) {
      console.error('Error fetching menus:', error);
    }
  };

  return (
    <div>
      <h1>Lista de Meniuri</h1>
      <ul>
        {menus.map(menu => (
          <li key={menu.id}>
            {menu.name}
            <button onClick={() => handleMenuEdit(menu)}>Edit</button>
            <button onClick={() => handleMenuDelete(menu.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <li>
        <a href="/createMenu">Create Menu</a>
      </li>

      {isEditing && (
        <div>
          <h2>Editare Meniu</h2>
          <input
            type="text"
            placeholder="Nume meniu"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
          />
          <button onClick={handleUpdateMenu}>Salvează Editarea</button>
        </div>
      )}
    </div>
  );
};

export default Menus;