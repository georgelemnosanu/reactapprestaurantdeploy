import React, { useState, useEffect } from 'react';

function CreateSpeciality() {
  const [specialityData, setSpecialityData] = useState({
    name: '',
    menuId: null,
    specialityClassId: null,
  });
  const [menus, setMenus] = useState([]);
  const [specialityClasses, setSpecialityClasses] = useState([]);

  useEffect(() => {
    fetchMenus();
    fetchSpecialityClasses();
  }, []);

  const fetchMenus = async () => {
    try {
      const response = await fetch('http://localhost:8080/menu/allMenu');
      const data = await response.json();
      setMenus(data);
    } catch (error) {
      console.error('Error fetching menus:', error);
    }
  };

  const fetchSpecialityClasses = async () => {
    try {
      const response = await fetch('http://localhost:8080/speciality/allSpecialityClass');
      const data = await response.json();
      setSpecialityClasses(data);
    } catch (error) {
      console.error('Error fetching speciality classes:', error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const newSpeciality = {
      name: specialityData.name,
      menu: { id: specialityData.menuId },  
      specialityClass: { id: specialityData.specialityClassId },  
    };
  
    console.log('JSON being sent:', JSON.stringify(newSpeciality));  
  
    fetch('http://localhost:8080/speciality/submitCreateSpeciality', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newSpeciality),
    })
      .then(response => {
        if (response.status === 200) {
          console.log('Speciality created successfully');
        
        } else {
          console.error('Failed to create speciality');
        }
      })
      .catch(error => {
        console.error('Error creating speciality:', error);
      });
  };
  return (
    <div>
      <h1>Create Speciality</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="specialityName">Speciality Name:</label>
          <input
            type="text"
            id="specialityName"
            value={specialityData.name}
            onChange={(e) => setSpecialityData({ ...specialityData, name: e.target.value })}
            required
          />
        </div>
        <div>
          <label htmlFor="menuId">Select Menu:</label>
          <select
            id="menuId"
            value={specialityData.menuId}
            onChange={(e) => setSpecialityData({ ...specialityData, menuId: e.target.value })}
            required
          >
            <option value="" disabled>Select Menu</option>
            {menus.map(menu => (
              <option key={menu.id} value={menu.id}>{menu.name}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="specialityClassId">Select Speciality Class:</label>
          <select
            id="specialityClassId"
            value={specialityData.specialityClassId}
            onChange={(e) => setSpecialityData({ ...specialityData, specialityClassId: e.target.value })}
            required
          >
            <option value="" disabled>Select Speciality Class</option>
            {specialityClasses.map(specialityClass => (
              <option key={specialityClass.id} value={specialityClass.id}>{specialityClass.name}</option>
            ))}
          </select>
        </div>
        <div>
          <button type="submit">Create Speciality</button>
        </div>
      </form>
    </div>
  );
}

export default CreateSpeciality;