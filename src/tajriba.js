import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Dashboard = () => {
  return ( 
 
    <div className="dashboard-background">
      <Container style={{ backgroundColor: '#333' }}>
        <Row className="mt-4">
          <Col>
            <h1 className="text-center text-white">Dashboard</h1>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col>
            <div className="border p-3">
              <h3 className="text-white">Nombre de voitures: <span className="text-primary">3</span></h3>
            </div>
          </Col>
          <Col>
            <div className="border p-3">
              <h3 className="text-white">Nombre de chauffeurs: <span className="text-primary">3</span></h3>
            </div>
          </Col>
          <Col>
            <div className="border p-3">
              <h3 className="text-white">Nombre d'utilisateurs: <span className="text-primary">1</span></h3>
            </div>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col>
            <div className="border p-3">
              <h3 className="text-white">Nombre de missions: <span className="text-primary">Shinning Star</span></h3>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Dashboard;

