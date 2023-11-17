import React, { useState } from 'react';

function CreateTable() {
  const [tableName, setTableName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTable = {
      tableName: tableName,
    };

    fetch('http://localhost:8080/table/createTable', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newTable),
    })
      .then(response => {
        if (response.status === 200) {
          console.log('Table created successfully');
        } else {
          console.error('Failed to create table');
        }
      })
      .catch(error => {
        console.error('Error creating table:', error);
      });
  };

  return (
    <div>
      <h1>Create Table</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="tableName">Table Name:</label>
          <input
            type="text"
            id="tableName"
            value={tableName}
            onChange={(e) => setTableName(e.target.value)}
            required
          />
        </div>
        <div>
          <button type="submit">Create Table</button>
        </div>
      </form>
    </div>
  );
}

export default CreateTable;