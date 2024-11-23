// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom'; // Import Link


// function MenuApp() {
//   const [specialities, setSpecialities] = useState([]);
//   const [selectedSpeciality, setSelectedSpeciality] = useState(null);
//   const [menuItems, setMenuItems] = useState([]);

//   useEffect(() => {
//     // Fetch specialities when the component mounts
//     fetch('http://localhost:8080/api/menus/1/specialities') // Replace with your API endpoint
//       .then(response => response.json())
//       .then(data => {
//         setSpecialities(data);
//       });
//   }, []);

//   const handleSpecialityClick = (specialityId, specialityName) => {
//     // Fetch menu items for the selected speciality
//     fetch(`http://localhost:8080/api/specialities/${specialityId}/menuitems`) // Replace with your API endpoint
//       .then(response => response.json())
//       .then(data => {
//         setSelectedSpeciality(specialityName); // Set the name of the speciality
//         setMenuItems(data);
//       });
//   };

//   return (
//     <main>
//     <div className="container">
//     <div className="title">
//           <h2>our menu</h2>
//           <div className="underline"></div>

//         </div>
//         <section className="menu section">
//         <div className="specialities">
//   {specialities.map(speciality => (
//     <button
//       key={speciality.id}
//       className={`speciality-btn ${selectedSpeciality === speciality.name ? 'active' : ''}`}
//       onClick={() => handleSpecialityClick(speciality.id, speciality.name)}
//     >
//       {speciality.name}
//     </button>
//   ))}
// </div>
//         </section>
//         <div className="menu-container">
//   <h3 className="dwu">dine with us.</h3>
//   <div className="menu-item">
//     {menuItems.map(item => (
//       <div key={item.id} className="menu-item">
//         <div className="item-info">
//           <header>
//             <h4>{item.name}</h4>
//             <h4 className="price">{item.price}RON</h4>
//           </header>
//           <p className="item-text">{item.description}</p>
//         </div>
//       </div>
//     ))}
//   </div>
// </div>
// <Link to="/viewAllSpeciality">View All Specialities</Link>
//     </div>
//     </main>
    
//   );
// }

// export default MenuApp;


// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';

// function MenuApp({ tableId }) {
//   const [specialities, setSpecialities] = useState([]);
//   const [selectedSpeciality, setSelectedSpeciality] = useState(null);
//   const [menuItems, setMenuItems] = useState([]);
//   const [selectedItems, setSelectedItems] = useState([]);

//   useEffect(() => {
//     // Fetch specialities when the component mounts, considering the selected table
//     fetch(`http://localhost:8080/api/table/1/menus/1/specialities`) // Replace with your API endpoint
//       .then(response => response.json())
//       .then(data => {
//         setSpecialities(data);
//       });
//   }, [tableId]);

//   const handleSpecialityClick = (specialityId, specialityName) => {
//     // Fetch menu items for the selected speciality
//     fetch(`http://localhost:8080/api/specialities/${specialityId}/menuitems`) // Replace with your API endpoint
//       .then(response => response.json())
//       .then(data => {
//         setSelectedSpeciality(specialityId); // Set the ID of the speciality
//         setMenuItems(data);
//       });
//   };

//   const handleAddItemToCommand = (itemId) => {
//     setSelectedItems([...selectedItems, itemId]);
//   };

//   const handleCreateCommand = () => {
//     // Send a request to create a command with selectedItems and tableId
//     const commandData = {
//       tableId,
//       menuItems: selectedItems,
//     };

//     fetch(`http://localhost:8080/table/1/create-command`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(commandData),
//     })
//       .then(response => {
//         if (response.ok) {
//           console.log('Command created successfully');
//           // Optionally, you can reset selectedItems state here
//         } else {
//           console.error('Failed to create command');
//         }
//       })
//       .catch(error => {
//         console.error('Error creating command:', error);
//       });
//   };

//   return (
//     <main>
//       {/* Render your menu items here with "+" buttons */}
//       {menuItems.map(item => (
//         <div key={item.id} className="menu-item">
//           <div className="item-info">
//             <header>
//               <h4>{item.name}</h4>
//               <h4 className="price">{item.price}RON</h4>
//             </header>
//             <p className="item-text">{item.description}</p>
//           </div>
//           <button onClick={() => handleAddItemToCommand(item.id)}>+</button>
//         </div>
//       ))}
//       {/* Render specialities buttons */}
//       <div className="specialities">
//         {specialities.map(speciality => (
//           <button
//             key={speciality.id}
//             className={`speciality-btn ${selectedSpeciality === speciality.id ? 'active' : ''}`}
//             onClick={() => handleSpecialityClick(speciality.id)}
//           >
//             {speciality.name}
//           </button>
//         ))}
//       </div>
//       {/* Render a button to create the command */}
//       <button onClick={handleCreateCommand}>Create Command</button>
//     </main>
//   );
// }

// export default MenuApp;
// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';

// function MenuApp() {
//   const { tableId } = useParams();
//   const [specialities, setSpecialities] = useState([]);
//   const [selectedSpeciality, setSelectedSpeciality] = useState(null);
//   const [menuItems, setMenuItems] = useState([]);
//   const [selectedItemsWithQuantity, setSelectedItemsWithQuantity] = useState({});

//   useEffect(() => {
//     // Use the tableId from the URL in your fetch request
//     fetch(`http://localhost:8080/api/table/${tableId}/menus/1/specialities`)
//       .then(response => response.json())
//       .then(data => {
//         setSpecialities(data);
//       });
//   }, [tableId]);
  


//   const handleSpecialityClick = (specialityId, specialityName) => {
//     fetch(`http://localhost:8080/api/specialities/${specialityId}/menuitems`)
//       .then(response => response.json())
//       .then(data => {
//         setSelectedSpeciality(specialityId);
//         setMenuItems(data);
//       });
//   };

//   const handleAddItemToCommand = (itemId) => {
//     setSelectedItemsWithQuantity(prevItems => {
//       const updatedItems = { ...prevItems };
//       if (updatedItems[itemId]) {
//         updatedItems[itemId] += 1;
//       } else {
//         updatedItems[itemId] = 1;
//       }
//       return updatedItems;
//     });
//   };

//   const handleCreateCommand = () => {
//     const menuItemsWithQuantities = {};
//     for (const itemId in selectedItemsWithQuantity) {
//       const quantity = selectedItemsWithQuantity[itemId];
//       menuItemsWithQuantities[itemId] = quantity;
//     }

//     const commandData = {
//       tableId: tableId,
//       menuItemsWithQuantities: menuItemsWithQuantities,
//     };

//     console.log('JSON Data:', JSON.stringify(commandData));

//     fetch(`http://localhost:8080/command/create`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(commandData),
//     })
//       .then(response => {
//         if (response.ok) {
//           console.log('Command created successfully');
//           setSelectedItemsWithQuantity({});
//         } else {
//           console.error('Failed to create command');
//         }
//       })
//       .catch(error => {
//         console.error('Error creating command:', error);
//       });
//   };

//   return (
//     <main>
//       {menuItems.map(item => (
//         <div key={item.id} className="menu-item">
//           <div className="item-info">
//             <header>
//               <h4>{item.name}</h4>
//               <h4 className="price">{item.price}RON</h4>
//             </header>
//             <p className="item-text">{item.description}</p>
//           </div>
//           <button onClick={() => handleAddItemToCommand(item.id)}>+</button>
//         </div>
//       ))}
//       {Object.entries(selectedItemsWithQuantity).length > 0 && (
//         <div>
//           <h3>Selected Items</h3>
//           <ul>
//             {Object.entries(selectedItemsWithQuantity).map(([itemId, quantity]) => (
//               <li key={itemId}>
//                 Item ID: {itemId}, Quantity: {quantity}
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//       <div className="specialities">
//         {specialities.map(speciality => (
//           <button
//             key={speciality.id}
//             className={`speciality-btn ${selectedSpeciality === speciality.id ? 'active' : ''}`}
//             onClick={() => handleSpecialityClick(speciality.id)}
//           >
//             {speciality.name}
//           </button>
//         ))}
//       </div>
//       <button onClick={handleCreateCommand}>Create Command</button>
//     </main>
//   );
// }

// export default MenuApp;

// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import Stack from '@mui/material/Stack';
// import IconButton from '@mui/material/IconButton';
// import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
// import SideMenu from './SideMenu';

// function MenuApp() {
//   const { tableId } = useParams();
//   const [commandSent, setCommandSent] = useState(false);
//   const [specialities, setSpecialities] = useState([]);
//   const [selectedSpeciality, setSelectedSpeciality] = useState(null);
//   const [menuItems, setMenuItems] = useState([]);
//   const [selectedItemsWithQuantity, setSelectedItemsWithQuantity] = useState({});
//   const [menuItemNames, setMenuItemNames] = useState({}); // Initialize with an empty object

//   useEffect(() => {
//     // Use the tableId from the URL in your fetch request
//     fetch(`http://localhost:8080/api/table/${tableId}/menus/1/specialities`)
//       .then(response => response.json())
//       .then(data => {
//         setSpecialities(data);
//       });
//   }, [tableId]);

//   // Function to fetch menu items and populate menuItemNames
//   const fetchMenuItems = (specialityId) => {
//     fetch(`http://localhost:8080/api/specialities/${specialityId}/menuitems`)
//       .then(response => response.json())
//       .then(data => {
//         // Create a mapping of item IDs to names
//         const itemNames = { ...menuItemNames }; // Copy existing item names
//         data.forEach(item => {
//           // Only set the name if it doesn't already exist
//           if (!itemNames[item.id]) {
//             itemNames[item.id] = item.name;
//           }
//         });

//         // Set the menu items and menuItemNames
//         setSelectedSpeciality(specialityId);
//         setMenuItems(data);
//         setMenuItemNames(itemNames);
//       });
//   };

//   const handleSpecialityClick = (specialityId) => {
//     // Reset menuItemNames when speciality changes
//     setMenuItemNames({});
//     fetchMenuItems(specialityId);
//   };

//   const handleAddItemToCommand = (itemId) => {
//     setSelectedItemsWithQuantity(prevItems => {
//       const updatedItems = { ...prevItems };
//       if (updatedItems[itemId]) {
//         updatedItems[itemId] += 1;
//       } else {
//         updatedItems[itemId] = 1;
//       }

//       return updatedItems;
//     });
//   };

//   const handleCreateCommand = () => {
//     const menuItemsWithQuantities = {};
//     for (const itemId in selectedItemsWithQuantity) {
//       const quantity = selectedItemsWithQuantity[itemId];
//       menuItemsWithQuantities[itemId] = quantity;
//     }

//     const commandData = {
//       tableId: tableId,
//       menuItemsWithQuantities: menuItemsWithQuantities,
//     };

//     console.log('JSON Data:', JSON.stringify(commandData));

//     fetch(`http://localhost:8080/command/create`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(commandData),
//     })
//       .then(response => {
//         if (response.ok) {
//           console.log('Command created successfully');
//           setSelectedItemsWithQuantity({});
//           setCommandSent(true);
//         } else {
//           console.error('Failed to create command');
//         }
//       })
//       .catch(error => {
//         console.error('Error creating command:', error);
//       });
//   };

//   return (
//     <main>
//       <section className="menu section">
//         <div className="title">
//           <h2>our menu</h2>
//           <div className="underline"></div>
//         </div>
//         <div className="specialities">
//           {specialities.map(speciality => (
//             <button
//               key={speciality.id}
//               className={`speciality-btn ${selectedSpeciality === speciality.id ? 'active' : ''}`}
//               onClick={() => handleSpecialityClick(speciality.id)}
//             >
//               {speciality.name}
//             </button>
//           ))}
//         </div>
//         {menuItems.map(item => (
//           <div key={item.id} className="menu-item">
//             <div className="item-info">
//               <header>
//                 <h4>{item.name}</h4>
//                 <h4 className="price">{item.price}RON</h4>
//               </header>
//               <p className="item-text">{item.description}</p>
//             </div>
//             {/* Use the ColorButtons component for the "Add" button */}
//             <Stack direction="row" spacing={1}>
//               <IconButton aria-label="add" color="success" onClick={() => handleAddItemToCommand(item.id)}>
//                 <AddOutlinedIcon />
//               </IconButton>
//             </Stack>
//           </div>
//         ))}
//         {Object.entries(selectedItemsWithQuantity).length > 0 && (
//           <div>
//             <h3>Selected Items</h3>
//             <ul>
//               {Object.entries(selectedItemsWithQuantity).map(([itemId, quantity]) => (
//                 <li key={itemId}>
//                   Item Name: {menuItemNames[itemId] || 'Unknown'}, Quantity: {quantity}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         )}
//           {commandSent && <p>Command sent successfully!</p>} {/* Confirmation message */}
//         <button onClick={handleCreateCommand}>Create Command</button>
//       </section>
//     </main>
//   );
// }

// export default MenuApp;

// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import Stack from '@mui/material/Stack';
// import IconButton from '@mui/material/IconButton';
// import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
// import DehazeIcon from '@mui/icons-material/Dehaze';
// import SideMenu from './SideMenu';
// import './CssMenuApp.css';

// function MenuApp() {
//   const { tableId } = useParams();
//   const [commandSent, setCommandSent] = useState(false);
//   const [specialities, setSpecialities] = useState([]);
//   const [selectedSpeciality, setSelectedSpeciality] = useState(null);
//   const [menuItems, setMenuItems] = useState([]);
//   const [selectedItemsWithQuantity, setSelectedItemsWithQuantity] = useState({});
//   const [menuItemNames, setMenuItemNames] = useState({});
//   const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

//   useEffect(() => {
//     fetch(`http://localhost:8080/api/table/${tableId}/menus/1/specialities`)
//       .then(response => response.json())
//       .then(data => {
//         setSpecialities(data);
//       });
//   }, [tableId]);

//   const fetchMenuItems = (specialityId) => {
//     fetch(`http://localhost:8080/api/specialities/${specialityId}/menuitems`)
//       .then(response => response.json())
//       .then(data => {
//         const itemNames = { ...menuItemNames };
//         data.forEach(item => {
//           if (!itemNames[item.id]) {
//             itemNames[item.id] = {
//               name: item.name,
//               price: item.price,
//             };
//           }
//         });

//         setSelectedSpeciality(specialityId);
//         setMenuItems(data);
//         setMenuItemNames(itemNames);
//       });
//   };

//   const handleSpecialityClick = (specialityId) => {
//     setMenuItemNames({});
//     fetchMenuItems(specialityId);
//   };

//   const handleAddItemToCommand = (itemId) => {
//     setSelectedItemsWithQuantity(prevItems => {
//       const updatedItems = { ...prevItems };
//       if (updatedItems[itemId]) {
//         updatedItems[itemId] += 1;
//       } else {
//         updatedItems[itemId] = 1;
//       }

//       return updatedItems;
//     });
//   };

//   const handleCreateCommand = () => {
//     const menuItemsWithQuantities = {};
//     for (const itemId in selectedItemsWithQuantity) {
//       const quantity = selectedItemsWithQuantity[itemId];
//       menuItemsWithQuantities[itemId] = quantity;
//     }

//     const commandData = {
//       tableId: tableId,
//       menuItemsWithQuantities: menuItemsWithQuantities,
//     };

//     console.log('JSON Data:', JSON.stringify(commandData));

//     fetch(`http://localhost:8080/command/create`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(commandData),
//     })
//       .then(response => {
//         if (response.ok) {
//           console.log('Command created successfully');
//           setSelectedItemsWithQuantity({});
//           setCommandSent(true);
//         } else {
//           console.error('Failed to create command');
//         }
//       })
//       .catch(error => {
//         console.error('Error creating command:', error);
//       });
//   };

//   const handleOpenMenu = () => {
//     setIsSideMenuOpen(true);
//   };

//   const handleCloseMenu = () => {
//     setIsSideMenuOpen(false);
//   };

//   return (
//     <main className={`content ${isSideMenuOpen ? 'open' : ''}`}>
//         <IconButton
//             aria-label="open-menu"
//             color="black"
//             onClick={handleOpenMenu}
//             className={`menu-open ${isSideMenuOpen ? 'open' : ''}`}
//           >
//             <DehazeIcon />
//           </IconButton>
//       <SideMenu
//             isOpen={isSideMenuOpen}
//             handleCloseMenu={handleCloseMenu}
//             selectedItemsWithQuantity={selectedItemsWithQuantity}
//             menuItemNames={menuItemNames}
//           />
//       <section className="content">
//       <section className='menu section'>
//         <div className="title">
//           <h2>our menu</h2>
//           <div className="underline"></div>
//         </div>
//           <div className="specialities">
//             {specialities.map(speciality => (
//               <button
//                 key={speciality.id}
//                 className={`speciality-btn ${selectedSpeciality === speciality.id ? 'active' : ''}`}
//                 onClick={() => handleSpecialityClick(speciality.id)}
//               >
//                 {speciality.name}
//               </button>
//             ))}
//           </div>
//           {menuItems.map(item => (
//             <div key={item.id} className="menu-item">
//               <div className="item-info">
//                 <header>
//                   <h4>{item.name}</h4>
//                   <h4 className="price">{item.price}RON</h4>
//                 </header>
//                 <p className="item-text">{item.description}</p>
//               </div>
//               <Stack direction="row" spacing={1}>
//                 <IconButton aria-label="add" color="success" onClick={() => handleAddItemToCommand(item.id)}>
//                   <AddOutlinedIcon />
//                 </IconButton>
//               </Stack>
//             </div>
//           ))}
//         <button onClick={handleCreateCommand}>Create Command</button>
//       </section>
//       </section>
//     </main>
//   );
// }

// export default MenuApp;

// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import Stack from '@mui/material/Stack';
// import IconButton from '@mui/material/IconButton';
// import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
// import DehazeIcon from '@mui/icons-material/Dehaze';
// import SideMenu from './SideMenu';
// import './CssMenuApp.css';

// function MenuApp() {
//   const { tableId } = useParams();
//   const [currentCommand, setCurrentCommand] = useState(null);
//   const [specialities, setSpecialities] = useState([]);
//   const [selectedSpeciality, setSelectedSpeciality] = useState(null);
//   const [menuItems, setMenuItems] = useState([]);
//   const [selectedItemsWithQuantity, setSelectedItemsWithQuantity] = useState({});
//   const [menuItemDetails, setMenuItemDetails] = useState({});
//   const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
//   const [showPopup, setShowPopup] = useState(false);
//   const [kitchenNotes, setKitchenNotes] = useState('');
//   const [barNotes, setBarNotes] = useState('');

//   useEffect(() => {
//     fetch(`http://localhost:8080/api/table/${tableId}/menus/1/specialities`)
//       .then(response => response.json())
//       .then(data => {
//         setSpecialities(data);
//       });
//   }, [tableId]);

//   const fetchMenuItems = specialityId => {
//     fetch(`http://localhost:8080/api/specialities/${specialityId}/menuitems`)
//       .then(response => response.json())
//       .then(data => {
//         const itemDetails = { ...menuItemDetails };
//         data.forEach(item => {
//           if (!itemDetails[item.id]) {
//             itemDetails[item.id] = {
//               name: item.name,
//               price: item.price,
//               quantity: 0,
//             };
//           }
//         });

//         setSelectedSpeciality(specialityId);
//         setMenuItems(data);
//         setMenuItemDetails(itemDetails);
//       });
//   };

//   const handleSpecialityClick = specialityId => {
//     setMenuItemDetails({});
//     fetchMenuItems(specialityId);
//   };

//   const handleAddItemToCommand = itemId => {
//     setMenuItemDetails(prevItemDetails => {
//       const updatedItemDetails = { ...prevItemDetails };
//       if (updatedItemDetails[itemId]) {
//         updatedItemDetails[itemId].quantity += 1;
//       } else {
//         updatedItemDetails[itemId] = {
//           name: menuItemDetails[itemId]?.name || 'Unknown',
//           price: menuItemDetails[itemId]?.price || 0,
//           quantity: 1,
//         };
//       }

//       return updatedItemDetails;
//     });

//     setSelectedItemsWithQuantity(prevItems => {
//       const updatedItems = { ...prevItems };
//       if (updatedItems[itemId]) {
//         updatedItems[itemId] += 1;
//       } else {
//         updatedItems[itemId] = 1;
//       }

//       return updatedItems;
//     });
//     setIsSideMenuOpen(true);
//   };

//   const handleCreateCommand = (kitchenNotes,barNotes) => {
//     const menuItemsWithQuantities = {};
//     for (const itemId in selectedItemsWithQuantity) {
//       const quantity = selectedItemsWithQuantity[itemId];
//       menuItemsWithQuantities[itemId] = quantity;
//     }
  
//     const commandData = {
//       tableId: tableId,
//       menuItemsWithQuantities: menuItemsWithQuantities,
//       kitchenNotes: kitchenNotes, // Adăugați kitchenNotes în obiectul commandData
//       barNotes: barNotes, // Adăugați barNotes în obiectul commandData
//     };
  
//     fetch('http://localhost:8080/command/create', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(commandData),
//     })
//       .then(response => {
//         if (response.ok) {
//           console.log('Command created successfully');
//           setShowPopup(true);
//           setTimeout(() => {
//             setShowPopup(false);
//           }, 3000);
//         } else {
//           console.error('Failed to create command');
//         }
//       })
//       .catch(error => {
//         console.error('Error creating command:', error);
//       });
//     console.log('JSON Data:', JSON.stringify(commandData));
//   };

//   const handleOpenMenu = () => {
//     setIsSideMenuOpen(true);
//   };

//   const handleCloseMenu = () => {
//     setIsSideMenuOpen(false);
//   };

//   return (
//     <main className={`content ${isSideMenuOpen ? 'open' : ''}`}>
//       <IconButton
//         aria-label="open-menu"
//         color="black"
//         onClick={handleOpenMenu}
//         className={`menu-open ${isSideMenuOpen ? 'open' : ''}`}
//       >
//         <DehazeIcon />
//       </IconButton>
//       <SideMenu
//   isOpen={isSideMenuOpen}
//   handleCloseMenu={handleCloseMenu}
//   selectedItemsWithQuantity={selectedItemsWithQuantity}
//   menuItemDetails={menuItemDetails}
//   handleCreateCommand={handleCreateCommand} // Transmite funcția handleCreateCommand ca prop
//   kitchenNotes={kitchenNotes} 
//   barNotes={barNotes} 
// />
//       <section className="content">
//         <section className="menu section">
//           <div className="title">
//             <h2>our menu</h2>
//             <div className="underline"></div>
//           </div>
//           {showPopup && <div className="popup">Command sent successfully!</div>}
//           <div className="specialities">
//             {specialities.map(speciality => (
//               <button
//                 key={speciality.id}
//                 className={`speciality-btn ${
//                   selectedSpeciality === speciality.id ? 'active' : ''
//                 }`}
//                 onClick={() => handleSpecialityClick(speciality.id)}
//               >
//                 {speciality.name}
//               </button>
//             ))}
//           </div>
//           {menuItems.map(item => (
//             <div key={item.id} className="menu-item">
//               <div className="item-info">
//                 <header>
//                   <h4>{item.name}</h4>
//                   <h4 className="price">{item.price}RON</h4>
//                 </header>
//                 <p className="item-text">{item.description}</p>
//               </div>
//               <Stack direction="row" spacing={1}>
//                 <IconButton
//                   aria-label="add"
//                   color="success"
//                   onClick={() => handleAddItemToCommand(item.id)}
//                 >
//                   <AddOutlinedIcon />
//                 </IconButton>
//               </Stack>
//             </div>
//           ))}
//         </section>
//       </section>
//     </main>
//   );
// }

// export default MenuApp;

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import DehazeIcon from '@mui/icons-material/Dehaze';
import SideMenu from './SideMenu';
import './CssMenuApp.css';

function MenuApp() {
  const { tableId } = useParams();
  const [currentCommand, setCurrentCommand] = useState(null);
  const [specialities, setSpecialities] = useState([]);
  const [selectedSpeciality, setSelectedSpeciality] = useState(null);
  const [menuItems, setMenuItems] = useState([]);
  const [selectedItemsWithQuantity, setSelectedItemsWithQuantity] = useState({});
  const [menuItemDetails, setMenuItemDetails] = useState({});
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [kitchenNotes, setKitchenNotes] = useState('');
  const [barNotes, setBarNotes] = useState('');
  const [currentCommandId, setCurrentCommandId] = useState(null); 

  useEffect(() => {
    fetch(`https://lmncheap.store/api/table/1/menus/1/specialities`)
      .then(response => response.json())
      .then(data => {
        setSpecialities(data);
      });
  }, [tableId]);

  const fetchMenuItems = specialityId => {
    fetch(`https://lmncheap.store/api/specialities/${specialityId}/menuitems`)
      .then(response => response.json())
      .then(data => {
        const itemDetails = { ...menuItemDetails };
        data.forEach(item => {
          if (!itemDetails[item.id]) {
            itemDetails[item.id] = {
              name: item.name,
              price: item.price,
              quantity: 0,
            };
          }
        });

        setSelectedSpeciality(specialityId);
        setMenuItems(data);
        setMenuItemDetails(itemDetails);
      });
  };

  const handleSpecialityClick = specialityId => {
    setMenuItemDetails({});
    fetchMenuItems(specialityId);
  };

  const handleAddItemToCommand = itemId => {
    setMenuItemDetails(prevItemDetails => {
      const updatedItemDetails = { ...prevItemDetails };
      if (updatedItemDetails[itemId]) {
        updatedItemDetails[itemId].quantity += 1;
      } else {
        updatedItemDetails[itemId] = {
          name: menuItemDetails[itemId]?.name || 'Unknown',
          price: menuItemDetails[itemId]?.price || 0,
          quantity: 1,
        };
      }

      return updatedItemDetails;
    });

    setSelectedItemsWithQuantity(prevItems => {
      const updatedItems = { ...prevItems };
      if (updatedItems[itemId]) {
        updatedItems[itemId] += 1;
      } else {
        updatedItems[itemId] = 1;
      }

      return updatedItems;
    });
    setIsSideMenuOpen(true);
  };

  const handleCreateCommand = (kitchenNotes, barNotes) => {
    const menuItemsWithQuantities = {};
    for (const itemId in selectedItemsWithQuantity) {
      const quantity = selectedItemsWithQuantity[itemId];
      menuItemsWithQuantities[itemId] = quantity;
    }
  
    const commandData = {
      tableId: tableId,
      menuItemsWithQuantities: menuItemsWithQuantities,
      kitchenNotes: kitchenNotes,
      barNotes: barNotes,
    };
  
    fetch('https://lmncheap.store/command/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(commandData),
    })
      .then(response => response.json())
      .then(data => {
        if (data.id) {
          // Actualizați currentCommand cu comanda creată
          setCurrentCommand(data);
          setCurrentCommandId(data.id);
          setShowPopup(true);
          setTimeout(() => {
            setShowPopup(false);
          }, 3000);
        } else {
          console.error('Failed to create command');
        }
      })
      .catch(error => {
        console.error('Error creating command:', error);
      });
  };

  
  const fetchCurrentCommand = () => {
    if (currentCommandId) {
      fetch(`https://lmncheap.store/command/${currentCommandId}`)
        .then(response => response.json())
        .then(data => {
          setCurrentCommand(data);
        })
        .catch(error => {
          console.error('Error fetching current command:', error);
        });
    }
  };

  
  const handleUpdateCommand = (kitchenNotes, barNotes) => {
    if (currentCommand) {
      const commandData = {
        commandId: currentCommand.id,
        menuItemsWithQuantities: selectedItemsWithQuantity,
        barNotes: barNotes,
        kitchenNotes: kitchenNotes,
      };
  
      console.log('Sending JSON for update:', JSON.stringify(commandData));
  
      fetch('https://lmncheap.store/command/editCommand', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(commandData),
    })
        .then((response) => {
          if (response.ok) {
            console.log('Command updated successfully');
            setShowPopup(true);
            setTimeout(() => {
              setShowPopup(false);
            }, 3000);
          } else {
            console.error('Failed to update command');
          }
        })
        .catch((error) => {
          console.error('Error updating command:', error);
        });
    }
  };

 
  const handleOpenMenu = () => {
    setIsSideMenuOpen(true);
  };

 
  const handleCloseMenu = () => {
    setIsSideMenuOpen(false);
  };

  return (
    <main className={`content ${isSideMenuOpen ? 'open' : ''}`}>
      <IconButton
        aria-label="open-menu"
        color="black"
        onClick={handleOpenMenu}
        className={`menu-open ${isSideMenuOpen ? 'open' : ''}`}
      >
        <DehazeIcon />
      </IconButton>
      <SideMenu
        isOpen={isSideMenuOpen}
        handleCloseMenu={handleCloseMenu}
        selectedItemsWithQuantity={selectedItemsWithQuantity}
        menuItemDetails={menuItemDetails}
        handleCreateCommand={handleCreateCommand}
        handleUpdateCommand={handleUpdateCommand}
        kitchenNotes={kitchenNotes}
        barNotes={barNotes}
        currentCommand={currentCommand}
        fetchCurrentCommand={fetchCurrentCommand}
      />
      <section className="content">
        <section className="menu section">
          <div className="title">
            <h2>our menu</h2>
            <div className="underline"></div>
          </div>
          {showPopup && <div className="popup">Command sent successfully!</div>}
          <div className="specialities">
            {specialities.map(speciality => (
              <button
                key={speciality.id}
                className={`speciality-btn ${
                  selectedSpeciality === speciality.id ? 'active' : ''
                }`}
                onClick={() => handleSpecialityClick(speciality.id)}
              >
                {speciality.name}
              </button>
            ))}
          </div>
          {menuItems.map(item => (
            <div key={item.id} className="menu-item">
              <div className="item-info">
                <header>
                  <h4>{item.name}</h4>
                  <h4 className="price">{item.price}RON</h4>
                </header>
                <p className="item-text">{item.description}</p>
              </div>
              <Stack direction="row" spacing={1}>
                <IconButton
                  aria-label="add"
                  color="success"
                  onClick={() => handleAddItemToCommand(item.id)}
                >
                  <AddOutlinedIcon />
                </IconButton>
              </Stack>
            </div>
          ))}
        </section>
      </section>
    </main>
  );
}

export default MenuApp;