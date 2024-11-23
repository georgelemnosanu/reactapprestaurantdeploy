import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MenuApp from './MenuApp'; // Import your MenuApp component

function TableSelection() {
  const [selectedTable, setSelectedTable] = useState(null);
  const [tableData, setTableData] = useState([]);
  const menuId = 1; // Fixed menuId

  useEffect(() => {
    // Fetch table data when the component mounts
    fetch(`https://lmncheap.store/table/allTables`) 
      .then(response => response.json())
      .then(data => setTableData(data))
      .catch(error => console.error('Error fetching table data:', error));
  }, []);

  const handleTableSelect = (tableId) => {
    setSelectedTable(tableId);
  };

  return (
    <div>
      <h2>Select a Table</h2>
      <ul>
        {tableData.map(table => (
          <li key={table.id}>
            {/* Folosește Link în loc de a href */}
            <Link to={`/table/${table.id}/menu/${menuId}`} onClick={() => handleTableSelect(table.id)}>
              {table.tableName}
            </Link>
          </li>
        ))}
      </ul>
      {/* Renderizează componenta MenuApp pe baza selecției unei mese */}
      {selectedTable !== null && (
        <MenuApp tableId={selectedTable} />
      )}
    </div>
  );
}

export default TableSelection;

