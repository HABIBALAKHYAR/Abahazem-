
import React, { useState } from 'react';
import { Table, Form, Button } from 'react-bootstrap';
import './Voiture.css';
function CarList() {
  const [searchTerm, setSearchTerm] = useState('');
  const [cars, setCars] = useState([
    {
      id: 1,
      name: 'transport 7',
      type: 'De',
      
      status: 'non disponible',
    },
    {
      id: 2,
      name: 'transport2',
      type: 'De',
      
      status: 'non disponible',
    },
    {
      id: 3,
      name: 'transports',
      type: 'De',
     
      status: 'non disponible',
    },
    {
      id: 4,
      name: 'transport4',
      type: 'De',
      
      status: 'non disponible',
    },
  ]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredCars = cars.filter((car) => {
    return car.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div className="backgr2" style={{ 
      padding: '80px' }}>
 <h1 className="car-list-title text-center" 
 style={{ color: '#333', marginBottom: '50px',
  textTransform: 'uppercase', letterSpacing: '2px', fontSize: '32px', fontWeight: 'bold' }}>Liste De Voitures</h1>

      
     
      <Table striped bordered hover style={{ marginTop: '20px' }}>
        <thead style={{ backgroundColor: '#333', color: '#ffffff' }}>
          <tr>
            <th>Nom</th>
            
            <th>type</th>
            <th>Status</th>
            <th>Outils</th>
          </tr>
        </thead>
        <tbody>
          {filteredCars.map((car) => (
            <tr key={car.id}>
              <td>{car.name}</td>
              <td>{car.type}</td>
              <td>{car.status}</td>
              <td>
                <Button variant="primary" className="car-list-button" style={{ marginRight: '5px' }}>
                  Modifier
                </Button>
                <Button variant="danger" className="car-list-button">
                  Supprimer
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table> <Form.Control
        type="text"
        placeholder="Recherche"
        value={searchTerm}
        onChange={handleSearchChange}
        style={{ marginBottom: '20px' }}
      />
      <Button variant="primary" className="car-list-button">
        + Ajouter
      </Button>
    </div>
  );
}

export default CarList;
