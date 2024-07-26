import React from 'react';
import userData from './Data';
import { useState } from 'react';
import './App.css'; // Import the CSS file

function App() {
  const [users, setUsers] = useState(userData); 

  return (
    <div className='container col-md-12 mt-5'>
      {users.map((user) => (
        <div key={user.id} className="user-item">
          <h1>{user.name}</h1>
          <ol className="list-group list-group-numbered">
            <li className="list-group-item list-group-item-primary">ID: {user.id}</li>
            <li className="list-group-item list-group-item-secondary">Name: {user.name}</li>
            <li className="list-group-item list-group-item-success">Age: {user.age}</li>
            <li className="list-group-item list-group-item-warning">Email: {user.email}</li>
          </ol>
        </div>
      ))}
    </div>
  );
}

export default App;
