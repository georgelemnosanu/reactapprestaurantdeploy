import React, { useState, useEffect } from 'react';
import MenuApp from './MenuApp'; // Import your MenuApp component

function TableSelection() {
  const [selectedTable, setSelectedTable] = useState(null);
  const [tableData, setTableData] = useState([]);
  const menuId = 1; // Fixed menuId

  useEffect(() => {
    // Fetch table data when the component mounts
    fetch(`https://restaurantdemo-production.up.railway.app/table/allTables`) // Replace with the appropriate API endpoint
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
            {/* Use <Link> to create links */}
            <a href={`/table/${table.id}/menu/${menuId}`} onClick={() => handleTableSelect(table.id)}>
              {table.tableName}
            </a>
          </li>
        ))}
      </ul>
      {/* Render the MenuApp component conditionally based on selectedTable */}
      {selectedTable !== null && (
        <MenuApp tableId={selectedTable} />
      )}
    </div>
  );
}

export default TableSelection;

