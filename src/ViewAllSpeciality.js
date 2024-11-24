import React, { useState, useEffect } from 'react';
import CreateSpeciality from './CreateSpeciality';

function ViewAllSpeciality() {
  const [specialities, setSpecialities] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [specialityToEdit, setSpecialityToEdit] = useState(null);
  const [newName, setNewName] = useState('');

  const fetchSpecialities = async () => {
    try {
      const response = await fetch('https://lmncheap.store/speciality/allSpeciality');
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

  useEffect(() => {
    fetchSpecialities();
  }, []);

  const handleSpecialityCreated = () => {
    fetchSpecialities();
  };

  const handleSpecialityEdit = (speciality) => {
    setIsEditing(true);
    setSpecialityToEdit(speciality);
    setNewName(speciality.name); 
  };

  const handleSpecialityUpdate = () => {
    if (specialityToEdit) {
      const updatedSpeciality = {
        id: specialityToEdit.id,
        newName: newName, 
      };
  
      console.log('Datele trimise la actualizare:', updatedSpeciality); 
  
      fetch(`https://lmncheap.store/speciality/updateSpeciality/${specialityToEdit.id}?newName=${newName}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedSpeciality),
      })
        .then((response) => {
          if (response.status === 200) {
            console.log('Speciality updated successfully');
            setIsEditing(false);
            setSpecialityToEdit(null);
            setNewName(''); 
            fetchSpecialities(); 
          } else {
            console.error('Failed to update Speciality');
          }
        })
        .catch((error) => {
          console.error('Error updating Speciality:', error);
        });
    }
  };

  const handleSpecialityDelete = async (specialityId) => {
    try {
      const response = await fetch(`https://lmncheap.store/speciality/deleteSpeciality/${specialityId}`, {
        method: 'DELETE',
      });

      if (response.status === 204) {
        console.log('Speciality deleted successfully');
        fetchSpecialities();
      } else {
        console.error('Failed to delete speciality');
      }
    } catch (error) {
      console.error('Error deleting speciality:', error);
    }
  };

  return (
    <div>
      <h1>All Specialities</h1>
      <ul>
        {specialities.map((speciality) => (
          <li key={speciality.id}>
            {isEditing && specialityToEdit?.id === speciality.id ? (
              <div>
                <input
                  type="text"
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                />
                <button onClick={handleSpecialityUpdate}>Update</button>
              </div>
            ) : (
              <div>
                Specialitate: {speciality.name}
                <br />
                Clasă specialitate: {speciality.specialityClass.name}
                <button onClick={() => handleSpecialityEdit(speciality)}>Edit</button>
                <button onClick={() => handleSpecialityDelete(speciality.id)}>Delete</button>
              </div>
            )}
          </li>
        ))}
      </ul>
      <li>
        <a href="/createSpeciality">Create Speciality</a>
      </li>
    </div>
  );
}

export default ViewAllSpeciality;