// import React from 'react';
// import './CssMenuApp.css';
// import ClearAllIcon from '@mui/icons-material/ClearAll';
// import IconButton from '@mui/material/IconButton';
// import Button from '@mui/material/Button';
// import SendIcon from '@mui/icons-material/Send';

// function SideMenu({ isOpen, handleCloseMenu, selectedItemsWithQuantity, menuItemDetails, handleCreateCommand }) {
//   const menuClass = isOpen ? 'side-menu open' : 'side-menu';

//   // Function to calculate the total price for an item
//   const calculateTotalPrice = (itemId, quantity) => {
//     const itemPrice = menuItemDetails[itemId]?.price || 0;
//     return itemPrice * quantity;
//   };

//   // Calculate the total price for all selected items
//   const calculateTotal = () => {
//     let total = 0;
//     for (const itemId in selectedItemsWithQuantity) {
//       const quantity = selectedItemsWithQuantity[itemId];
//       total += calculateTotalPrice(itemId, quantity);
//     }
//     return total;
//   };

//   return (
//     <div className={menuClass}>
//       <ul>
//         <li className='iconbutton'>
//           <IconButton
//             aria-label="open-menu"
//             color="black"
//             onClick={handleCloseMenu}
//           >
//             <ClearAllIcon />
//           </IconButton>
//         </li>
//         {Object.entries(selectedItemsWithQuantity).map(([itemId, quantity]) => (
//           <li key={itemId} className="menu-item">
//             <span className="item-name">{menuItemDetails[itemId]?.name || 'Unknown'}</span>
//             <span className="item-quantity">Quantity: {quantity}</span>
//             <span className="item-price">Price: {calculateTotalPrice(itemId, quantity)}RON</span>
//           </li>
//         ))}
//         <li className="total">Total: {calculateTotal()}RON</li>
//       </ul>
//     </div>
//   );
// }

// export default SideMenu;


// import React, {useState } from 'react';
// import './CssMenuApp.css';
// import ClearAllIcon from '@mui/icons-material/ClearAll';
// import IconButton from '@mui/material/IconButton';
// import SendIcon from '@mui/icons-material/Send';

// function SideMenu({ isOpen, handleCloseMenu, selectedItemsWithQuantity, menuItemDetails, handleCreateCommand}) {
//   const menuClass = isOpen ? 'side-menu open' : 'side-menu';
//   const [kitchenNotes, setKitchenNotes] = useState(''); 
//   const [barNotes, setBarNotes] = useState('');
//   // Function to calculate the total price for an item
//   const calculateTotalPrice = (itemId, quantity) => {
//     const itemPrice = menuItemDetails[itemId]?.price || 0;
//     return itemPrice * quantity;
//   };

//   // Calculate the total price for all selected items
//   const calculateTotal = () => {
//     let total = 0;
//     for (const itemId in selectedItemsWithQuantity) {
//       const quantity = selectedItemsWithQuantity[itemId];
//       total += calculateTotalPrice(itemId, quantity);
//     }
//     return total;
//   };

//   return (
//     <div className={menuClass}>
//       <ul>
//         <li className='iconbutton'>
//           <IconButton
//             aria-label="open-menu"
//             color="black"
//             onClick={handleCloseMenu}
//           >
//             <ClearAllIcon />
//           </IconButton>
//         </li>
//         {Object.entries(selectedItemsWithQuantity).map(([itemId, quantity]) => (
//           <li key={itemId} className="menu-item">
//             <span className="item-name">{menuItemDetails[itemId]?.name || 'Unknown'}</span>
//             <span className="item-quantity">Quantity: {quantity}</span>
//             <span className="item-price"> Price: <span className="price-text">{calculateTotalPrice(itemId, quantity)}RON</span></span>
//           </li>
//         ))}
//         <li className="total">Total: {calculateTotal()}RON</li>
//         <div className="center-button-container">
//           <div className="button-container">
//           <input
//   type="text"
//   placeholder="Kitchen Notes"
//   value={kitchenNotes}
//   onChange={(e) => setKitchenNotes(e.target.value)}
// />
// <input
//   type="text"
//   placeholder="Bar Notes"
//   value={barNotes}
//   onChange={(e) => setBarNotes(e.target.value)}
// />
// <button onClick={() => handleCreateCommand(kitchenNotes, barNotes)}>
//   Create Command
//   <span style={{ marginLeft: '5px', verticalAlign: 'middle' }}>
//     <SendIcon />
//   </span>
// </button>
//           </div>
//         </div>
//       </ul>
//     </div>
//   );
// }


// export default SideMenu;


// import React, { useState } from 'react';
// import './CssMenuApp.css';
// import ClearAllIcon from '@mui/icons-material/ClearAll';
// import IconButton from '@mui/material/IconButton';
// import SendIcon from '@mui/icons-material/Send';
// import TextField from '@mui/material/TextField';


// function SideMenu({
//   isOpen,
//   handleCloseMenu,
//   selectedItemsWithQuantity,
//   menuItemDetails,
//   currentCommand,
//   handleCreateCommand,
//   handleUpdateCommand,
//   fetchCurrentCommand,
  
// }) {
//   const menuClass = isOpen ? 'side-menu open' : 'side-menu';
//   const [kitchenNotes, setKitchenNotes] = useState('');
//   const [barNotes, setBarNotes] = useState('');

//   const calculateTotalPrice = (itemId, quantity) => {
//     const itemPrice = menuItemDetails[itemId]?.price || 0;
//     return itemPrice * quantity;
//   };

//   const calculateTotal = () => {
//     let total = 0;
//     for (const itemId in selectedItemsWithQuantity) {
//       const quantity = selectedItemsWithQuantity[itemId];
//       total += calculateTotalPrice(itemId, quantity);
//     }
//     return total;
//   };

//   return (
//     <div className={menuClass}>
//       <ul>
//         <li className="iconbutton">
//           <IconButton aria-label="open-menu" color="black" onClick={handleCloseMenu}>
//             <ClearAllIcon />
//           </IconButton>
//         </li>
//         {Object.entries(selectedItemsWithQuantity).map(([itemId, quantity]) => (
//           <li key={itemId} className="menu-item">
//             <span className="item-name">{menuItemDetails[itemId]?.name || 'Unknown'}</span>
//             <span className="item-quantity">Quantity: {quantity}</span>
//             <span className="item-price">
//               Price: <span className="price-text">{calculateTotalPrice(itemId, quantity)}RON</span>
//             </span>
//           </li>
//         ))}
//         <li className="total">Total: {calculateTotal()}RON</li>
//           <div>
//       <TextField
//         label="Kitchen Notes"
//         variant="outlined"
//         value={kitchenNotes}
//         onChange={(e) => setKitchenNotes(e.target.value)}
//         fullWidth 
//         margin="normal" 
//       />
//       <TextField
//         label="Bar Notes"
//         variant="outlined"
//         value={barNotes}
//         onChange={(e) => setBarNotes(e.target.value)}
//         fullWidth
//         margin="normal"
//       />
//     </div>
//      <div className="center-button-container">
//           <div className="button-container">
//             {currentCommand ? (
//               <button onClick={() => handleUpdateCommand(kitchenNotes, barNotes)}>
//                 Update Command
//                 <span style={{ marginLeft: '5px', verticalAlign: 'middle' }}>
//                   <SendIcon />
//                 </span>
//               </button>
//             ) : (
//               <button onClick={() => handleCreateCommand(kitchenNotes, barNotes)}>
//                 Create Command
//                 <span style={{ marginLeft: '5px', verticalAlign: 'middle' }}>
//                   <SendIcon />
//                 </span>
//               </button>
//             )}
//           </div>
//         </div>
//       </ul>
//     </div>
//   );
// }

// export default SideMenu;


import React, { useState } from 'react';
import './CssMenuApp.css';
import ClearAllIcon from '@mui/icons-material/ClearAll';
import IconButton from '@mui/material/IconButton';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';

function SideMenu({
  isOpen,
  handleCloseMenu,
  selectedItemsWithQuantity,
  menuItemDetails,
  currentCommand,
  handleCreateCommand,
  handleUpdateCommand,
  fetchCurrentCommand,
}) {
  const menuClass = isOpen ? 'side-menu open' : 'side-menu';
  const [kitchenNotes, setKitchenNotes] = useState('');
  const [barNotes, setBarNotes] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('Cash'); // Default to Cash

  const calculateTotalPrice = (itemId, quantity) => {
    const itemPrice = menuItemDetails[itemId]?.price || 0;
    return itemPrice * quantity;
  };

  const calculateTotal = () => {
    let total = 0;
    for (const itemId in selectedItemsWithQuantity) {
      const quantity = selectedItemsWithQuantity[itemId];
      total += calculateTotalPrice(itemId, quantity);
    }
    return total;
  };

  return (
    <div className={menuClass}>
      <ul>
        <li className="iconbutton">
          <IconButton aria-label="open-menu" color="black" onClick={handleCloseMenu}>
            <ClearAllIcon />
          </IconButton>
        </li>
        {Object.entries(selectedItemsWithQuantity).map(([itemId, quantity]) => (
          <li key={itemId} className="menu-item">
            <span className="item-name">{menuItemDetails[itemId]?.name || 'Unknown'}</span>
            <span className="item-quantity">Quantity: {quantity}</span>
            <span className="item-price">
              Price: <span className="price-text">{calculateTotalPrice(itemId, quantity)}RON</span>
            </span>
          </li>
        ))}
        <li className="total">Total: {calculateTotal()}RON</li>
        <div>
          <TextField
            label="Kitchen Notes"
            variant="outlined"
            value={kitchenNotes}
            onChange={(e) => setKitchenNotes(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Bar Notes"
            variant="outlined"
            value={barNotes}
            onChange={(e) => setBarNotes(e.target.value)}
            fullWidth
            margin="normal"
          />
        </div>
        <div>
          <FormControlLabel
            control={
              <Switch
                checked={paymentMethod === 'Card'}
                onChange={() => setPaymentMethod((prev) => (prev === 'Cash' ? 'Card' : 'Cash'))}
                name="paymentMethod"
                color="primary"
              />
            }
            label={paymentMethod}
          />
        </div>
        <div className="center-button-container">
          <div className="button-container">
            {currentCommand ? (
              <button onClick={() => handleUpdateCommand(kitchenNotes, barNotes, paymentMethod)}>
                Update Command
                <span style={{ marginLeft: '5px', verticalAlign: 'middle' }}>
                  <SendIcon />
                </span>
              </button>
            ) : (
              <button onClick={() => handleCreateCommand(kitchenNotes, barNotes, paymentMethod)}>
                Create Command
                <span style={{ marginLeft: '5px', verticalAlign: 'middle' }}>
                  <SendIcon />
                </span>
              </button>
            )}
          </div>
        </div>
      </ul>
    </div>
  );
}

export default SideMenu;