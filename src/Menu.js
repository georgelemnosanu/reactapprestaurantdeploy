import React from 'react';
import MenuItem from './MenuItem';

function Menu({ menuItems, selectedSpeciality }) {
  const filteredMenuItems = selectedSpeciality
    ? menuItems.filter(item => item.speciality.id === selectedSpeciality)
    : menuItems;

  return (
    <div>
      <h2>Menu</h2>
      <ul>
        {filteredMenuItems.map(item => (
          <MenuItem key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
}

export default Menu;