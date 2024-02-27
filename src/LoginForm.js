
import React, { useState } from 'react';
import { Form, FormGroup, FormLabel, FormControl, Button } from 'react-bootstrap';
import { Container, Row, Col } from 'react-bootstrap';
import './LoginForm.css';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
  };

return (
  <div  className='backgrou4' >
    <Container>
      <Row className="justify-content-center">
        <Col xs={12} md={6}>
          <div style={{ backgroundColor: '#f2f2f2',  padding: '10px', borderRadius: '10px',
             boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1) ', opacity: 0.8,
            marginTop:'100px' }}>
            <h1 className="text-center mb-4" style={{ color: '#004d99', fontWeight: 'bold' }}>CONNEXION</h1>
            <Form onSubmit={handleSubmit}>
              <FormGroup>
                <FormLabel>Email</FormLabel>
                <FormControl
                  type="email"
                  id="email"
                  value={email}
                  onChange={handleEmailChange}
                  placeholder="Entrez votre email"
                  style={{ marginBottom: '15px' }} // Added space between input and button
                />
              </FormGroup>
             <FormGroup>
  <FormLabel style={{ color: '#333333' }}>Mot De Passe</FormLabel>
  <FormControl
    type="password"
    id="password"
    value={password}
    onChange={handlePasswordChange}
    placeholder="Entrez votre mot de passe"
    style={{ marginBottom: '15px' }}
  />
</FormGroup>

<Row className="justify-content-center">
        <Col xs={7}>
          <Button type="submit" className="btn btn-primary btn-block"
            style={{ backgroundColor: '#0f80aa', borderColor: '#004d99', border:"none" }}>
            Connexion
          </Button>
        </Col>
      </Row>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  </div>
);
}

export default LoginForm