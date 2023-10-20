import React from 'react';
import './CssMenuApp.css';
import ClearAllIcon from '@mui/icons-material/ClearAll';
import IconButton from '@mui/material/IconButton';

function SideMenuTest({ isOpen, handleCloseMenu }) {
  const menuClass = isOpen ? 'side-menu open' : 'side-menu';

  return (
    <div className={menuClass}>
      <ul>
        <li><button>Item 1</button></li>
        <li><button>Item 2</button></li>
        <li><button>Item 3</button></li>
        <IconButton
            aria-label="open-menu"
            color="black"
            onClick={handleCloseMenu}
          >
            <ClearAllIcon />
          </IconButton>
          
      </ul>
    </div>
  );
}

export default SideMenuTest;