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
    fetch(`http://localhost:8080/api/table/${tableId}/menus/1/specialities`)  // Folosește tableId și menuId din params
      .then(response => response.json())
      .then(data => {
        setSpecialities(data);
      });
  }, [tableId]);

  const fetchMenuItems = specialityId => {
    fetch(`http://localhost:8080/api/specialities/${specialityId}/menuitems`)
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
  
    fetch('http://localhost:8080/command/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(commandData),
    })
      .then(response => response.json())
      .then(data => {
        if (data.id) {
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
      fetch(`http://localhost:8080/command/${currentCommandId}`)
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