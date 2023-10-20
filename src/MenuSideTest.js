import React, { useState } from 'react';
import SideMenuTest from './SideMenuTest.js';
import './CssMenuApp.css';

function MenuSideTest() {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

  const handleOpenMenu = () => {
    setIsSideMenuOpen(true);
  };

  const handleCloseMenu = () => {
    setIsSideMenuOpen(false);
  };

  return (
    <div>
      <button onClick={handleOpenMenu}>Deschide Meniul</button>
      <SideMenuTest isOpen={isSideMenuOpen} handleCloseMenu={handleCloseMenu} />
      <div className={`content ${isSideMenuOpen ? 'open' : ''}`}>
        <h1>Conținut Pagină Principală</h1>
        <p>Aici puteți adăuga text sau conținut pentru pagina principală.</p>
      </div>
    </div>
  );
}

export default MenuSideTest;