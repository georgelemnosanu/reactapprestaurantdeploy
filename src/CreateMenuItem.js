import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';


function CreateMenuItem({ onCreateMenuItem }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [selectedSpeciality, setSelectedSpeciality] = useState('');
  const [specialities, setSpecialities] = useState([]);

  useEffect(() => {
    fetchSpecialities();
  }, []);

  const fetchSpecialities = async () => {
    
    try {
      const response = await fetch(`https://lmncheap.store/speciality/allSpeciality`);
      if (response.ok) {
        const data = await response.json();
        setSpecialities(data);
      } else {
        console.error('Failed to fetch specialities');
      }
    } catch (error) {
      console.error('Error fetching specialities:', error);
    }
  };

  const handleCreateMenuItem = async () => {
    try {
      const response = await fetch('https://lmncheap.store/menuItem/submitCreateMenuItem', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          description,
          price,
          speciality: {
            id: selectedSpeciality, 
          },
        }),
      });

      if (response.ok) {
       
        console.log('Menu item created successfully');
      
        onCreateMenuItem();
      } else {
   
        console.error('Failed to create menu item');
      }
    } catch (error) {
      console.error('Error creating menu item:', error);
    }
  };

  return (
    <div>
      <h2>Create Menu Item</h2>
      <label>Name:</label>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <label>Description:</label>
      <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
      <label>Price:</label>
      <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
      <label>Speciality:</label>
      <select value={selectedSpeciality} onChange={(e) => setSelectedSpeciality(e.target.value)}>
        <option value="">Select a Speciality</option>
        {specialities.map((speciality) => (
          <option key={speciality.id} value={speciality.id}>
            {speciality.name}
          </option>
        ))}
      </select>
      <button onClick={handleCreateMenuItem}>Create</button>
    </div>
  );
}

CreateMenuItem.propTypes = {
  onCreateMenuItem: PropTypes.func.isRequired, 
};

export default CreateMenuItem;