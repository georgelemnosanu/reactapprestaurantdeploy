import React from 'react';

function Speciality({ specialities, onSelectSpeciality }) {
  return (
    <div>
      <h2>Specialities</h2>
      <ul>
        {specialities.map(speciality => (
          <li key={speciality.id}>
            <button onClick={() => onSelectSpeciality(speciality.id)}>
              {speciality.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Speciality;