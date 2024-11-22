import React, { useState } from 'react';

function CreateSpeciality() {
  const [specialityData, setSpecialityData] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

   
    const newSpeciality = {
      name: specialityData,
    };

 
    fetch('https://lmncheap.store/speciality/submitCreateSpeciality', {
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
          <label htmlFor="specialityData">Speciality Name:</label>
          <input
            type="text"
            id="specialityData"
            value={specialityData}
            onChange={(e) => setSpecialityData(e.target.value)}
            required
          />
        </div>
        <div>
          <button type="submit">Create Speciality</button>
        </div>
      </form>
    </div>
  );
}

export default CreateSpeciality;