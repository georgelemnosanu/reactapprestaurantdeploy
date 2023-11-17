import React, { useState, useEffect } from 'react';

function ViewAllTables() {
  const [tables, setTables] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [tableToEdit, setTableToEdit] = useState(null);
  const [newTableName, setNewTableName] = useState('');

  useEffect(() => {
    fetchTables();
  }, []);

  const fetchTables = () => {
    fetch('http://localhost:8080/table/allTables')
      .then(response => response.json())
      .then(data => {
        setTables(data);
      })
      .catch(error => {
        console.error('Error fetching tables:', error);
      });
  };

  const handleTableEdit = (table) => {
    setIsEditing(true);
    setTableToEdit(table);
    setNewTableName(table.tableName);
  };

  const handleUpdateTable = async () => {
    try {
      const response = await fetch(`http://localhost:8080/table/editTable/${tableToEdit.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded', 
        },
        body: `newName=${encodeURIComponent(newTableName)}`, 
      });
  
      if (response.ok) {
        console.log('Table updated successfully');
        setIsEditing(false);
        setTableToEdit(null);
        fetchTables();
      } else {
        console.error('Failed to update table');
      }
    } catch (error) {
      console.error('Error updating table:', error);
    }
  };

  return (
    <div>
      <h1>View All Tables</h1>
      <ul>
        {tables.map(table => (
          <li key={table.id}>
            {isEditing && tableToEdit && tableToEdit.id === table.id ? (
              <div>
                <label htmlFor="newTableName">New Table Name:</label>
                <input
                  type="text"
                  id="newTableName"
                  value={newTableName}
                  onChange={(e) => setNewTableName(e.target.value)}
                  required
                />
                <button onClick={handleUpdateTable}>Save Changes</button>
              </div>
            ) : (
              <div>
                {table.tableName}
                <button onClick={() => handleTableEdit(table)}>Edit</button>
              </div>
            )}
          </li>
        ))}
      </ul>
      <li>
        <a href="/createTable">Create Table</a>
      </li>
    </div>
  );
}

export default ViewAllTables;