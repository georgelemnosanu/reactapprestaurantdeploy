import React, { useState, useEffect } from 'react';

function EditSpeciality({ speciality, onSpecialityUpdated }) {
  const [newName, setNewName] = useState(speciality ? speciality.name : '');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (speciality) {
      const updatedSpeciality = {
        id: speciality.id,
        newName: newName, // Modifică aici pentru a trece newName în corpul cererii
  
        
      };
      

      fetch(`https://restaurantdemo-production.up.railway.app/speciality/updateSpeciality/${speciality.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedSpeciality),
      })
        .then((response) => {
          if (response.status === 200) {
            console.log('Speciality updated successfully');
            if (onSpecialityUpdated) {
              onSpecialityUpdated();
            }
          } else {
            console.error('Failed to update Speciality');
          }
        })
        .catch((error) => {
          console.error('Error updating Speciality:', error);
        });
    }
  };

  return (
    <div>
      <h2>Edit Speciality</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="newName">Name:</label>
          <input
            type="text"
            id="newName"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            required
          />
        </div>
        <div>
          <button type="submit">Update Speciality</button>
        </div>
      </form>
    </div>
  );
}

export default EditSpeciality;