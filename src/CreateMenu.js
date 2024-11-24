import React, { useState } from 'react';

const CreateMenu = () => {
  const [newName, setNewName] = useState('');

  const handleCreateMenu = async () => {
    try {
      const response = await fetch('https://lmncheap.store/menu/submitCreateMenu', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: newName }),
      });

      if (response.ok) {
        console.log('Menu created successfully');
        // Redirect to view all menus
        window.location.href = '/menu';
      } else {
        console.error('Failed to create menu');
      }
    } catch (error) {
      console.error('Error creating menu:', error);
    }
  };

  return (
    <div>
      <h1>Create Menu</h1>
      <label>Name:</label>
      <input type="text" value={newName} onChange={(e) => setNewName(e.target.value)} />
      <button onClick={handleCreateMenu}>Create Menu</button>
    </div>
  );
};

export default CreateMenu;