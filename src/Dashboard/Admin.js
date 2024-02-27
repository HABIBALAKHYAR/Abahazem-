import React from 'react';
import { Table } from 'react-bootstrap';
import { Link, Routes, Route } from "react-router-dom";
import DriverList from './chauffeur';
import UserManagement from './users';
import CarList from './Voiture';
import './Admin.css';

function Dashboard() {
  return ( 
    <div className="dashboard">
      <h1 className="dashboard-title">Admin Dashboard</h1>
      <div className="table-container">
        <Table striped bordered hover className="table-wrapper">
          <thead>
            <tr>
              <th>Voiture</th>
              <th>Chauffeurs</th>
              <th>Utilisateurs</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <Link to="/car">Voir les voitures</Link>
              </td>
              <td>
                <Link to="/driver">Voir les chauffeurs</Link>
              </td>
              <td>
                <Link to="/user">Voir les utilisateurs</Link>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
      <Routes>
        <Route path='/car' element={<CarList />} />
        <Route path='/driver' element={<DriverList />} />
        <Route path='/user' element={<UserManagement />} />
      </Routes>
    </div>
  );
}

export default Dashboard;

