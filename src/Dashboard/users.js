
import React, { useState } from 'react';
import { Table, Form, Button } from 'react-bootstrap';

function UserManagement() {
  const [searchTerm, setSearchTerm] = useState('');
  const [users, setUsers] = useState([
    {
      id: 1,
      name: 'Salka Alaoui',
      email: 'salka.alaoui123@gmail.com',
      service: 'Service A',
      status: 'active',
      dateAdded: 'Apr 19, 2019',
    },
    {
      id: 2,
      name: 'Khawla Fadil',
      email: 'khawla.fadil@gmail.com',
      service: 'Service C',
      status: 'active',
      dateAdded: 'Apr 25, 2019',
    },
  ]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredUsers = users.filter((user) => {
    return user.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div className="backgr3" style={{ padding: '80px' }}>
      <h1 className="user-management-title text-center" style={{ color: '#333', 
      marginBottom: '50px', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '32px', 
      fontWeight: 'bold' }}>Gestion des Utilisateurs</h1>
      
     
      <Table striped bordered hover style={{ marginTop: '20px' }}>
        <thead style={{ backgroundColor: '#333', color: '#fff' }}>
          <tr>
            <th>Email</th>
            <th>Service</th>
            <th>Statut</th>
            <th>Date ajoutée</th>
            <th>Outils</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((user) => (
            <tr key={user.id}>
              <td>{user.email}</td>
              <td>{user.service}</td>
              <td>{user.status}</td>
              <td>{user.dateAdded}</td>
              <td>
                <Button variant="primary" className="user-management-button" style={{ marginRight: '5px' }}>
                  Modifier
                </Button>
                <Button variant="danger" className="user-management-button">
                  Supprimer
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Form.Control
        type="text"
        placeholder="Recherche"
        value={searchTerm}
        onChange={handleSearchChange}
        style={{ marginBottom: '20px' }}
      />
      <Button variant="primary" className="user-management-button">
        + Ajouter
      </Button>
    </div>
  );
}

export default UserManagement;
