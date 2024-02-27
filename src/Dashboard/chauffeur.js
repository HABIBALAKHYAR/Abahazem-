
import React, { useState } from 'react';
import { Table, Form, Button } from 'react-bootstrap';
import './chauffeur.css';

function DriverList() {
  const [searchTerm, setSearchTerm] = useState('');
  const [drivers, setDrivers] = useState([
    {
      id: 1,
      name: 'khawlaa Babaji',
      email: 'khawla.fadil@gmail.com',
      status: 'disponible',
      dateAdded: 'Apr 25, 2019',
    },
    {
      id: 2,
      name: 'amir sam',
      email: 'ammir.sa123@gmail.com',
      status: 'non disponible',
      dateAdded: 'Apr 28, 2019',
    },
    {
      id: 3,
      name: 'saad saadi',
      email: 'saad.saadi@gmail.com',
      status: 'disponible',
      dateAdded: 'Apr 28, 2019',
    },
  ]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredDrivers = drivers.filter((driver) => {
    return driver.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div className='background'>
    <div className="driver-list" style={{  padding: '39px' }}>
      <h1 className="driver-list-title text-center"  style={{ color: '#fff', marginBottom: '50px',
      textAlign: 'center',
  
  textTransform: 'uppercase', letterSpacing: '2px', fontSize: '32px', fontWeight: 'bold' }}>Liste des Chauffeurs</h1>
      
      <Table striped bordered hover style={{ marginTop: '20px' }}>
        <thead >
          <tr>
            <th>Nom</th>
            <th>Email</th>
            <th>Statut</th>
            <th>Date ajoutée</th>
            <th>Outils</th>
          </tr>
        </thead>
        <tbody>
          {filteredDrivers.map((driver) => (
            <tr key={driver.id}>
              <td>{driver.name}</td>
              <td>{driver.email}</td>
              <td>{driver.status}</td>
              <td>{driver.dateAdded}</td>
              <td>
                <Button variant="primary" className="driver-list-button" style={{ marginRight: '5px' }}>
                  Modifier
                </Button>
                <Button variant="danger" className="driver-list-button">
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
      <Button variant="primary" className="driver-list-button">
        + Ajouter
      </Button>
    </div></div>
  );
}

export default DriverList;
