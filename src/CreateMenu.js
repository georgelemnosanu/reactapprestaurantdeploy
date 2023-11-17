// import React, { useState } from 'react';
// import PropTypes from 'prop-types';

// const CreateMenu = ({ onMenuCreated }) => {
//   const [newName, setNewName] = useState('');

//   const handleCreateMenu = async () => {
//     try {
//       const response = await fetch('http://localhost:8080/menu/submitCreateMenu', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ name: newName }),
//       });

//       if (response.ok) {
//         console.log('Menu created successfully');
//         onMenuCreated();
//       } else {
//         console.error('Failed to create menu');
//       }
//     } catch (error) {
//       console.error('Error creating menu:', error);
//     }
//   };

//   return (
//     <div>
//       <h1>Create Menu</h1>
//       <label>Name:</label>
//       <input type="text" value={newName} onChange={(e) => setNewName(e.target.value)} />
//       <button onClick={handleCreateMenu}>Create Menu</button>
//     </div>
//   );
// };

// CreateMenu.propTypes = {
//   onMenuCreated: PropTypes.func.isRequired,
// };

// export default CreateMenu;

import React, { useState } from 'react';

const CreateMenu = () => {
  const [newName, setNewName] = useState('');

  const handleCreateMenu = async () => {
    try {
      const response = await fetch('http://localhost:8080/menu/submitCreateMenu', {
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