import React, { useState } from "react";
import PropTypes from 'prop-types';
import axios from "axios";
import { Form, Button, Alert } from 'react-bootstrap';

export default function Login({ setToken }) {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null); 

  const handleLogin = async (e) => {
    e.preventDefault();

   try {
      const response = await axios.post('http://localhost:4003/session/login', {
        username,
        password,
      });
      
      if (response.data.token) {
        console.log('Sesion iniciada con Exito:', response.data.token);
        setToken(response.data.token);
      } else {
        setError('Error al iniciar sesión');
      }
     } catch (error) {
      console.error('Completa tanto el nombre de usuario como la contraseña:', error.message);
      setError('Error al iniciar Sesion. Por favor, verifica tu nombre de usuario y contraseña');
    }
  };

  return (
    <>
     <div className="login-container">
      <h1>Iniciar sesión</h1>
      <Form onSubmit={handleLogin} className="login-form">
        <Form.Group controlId="formUsername">
          <Form.Label>Nombre de usuario:</Form.Label>
          <Form.Control
            type="text"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="Nombre"
          />
        </Form.Group>
        <Form.Group controlId="formPassword">
          <Form.Label>Contraseña:</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Contraseña"
          />
        </Form.Group>
        {error && <Alert variant="danger">{error}</Alert>}
        <div className="button-container">
          <Button type="submit" className="button btn-dark" >
            Iniciar sesión
          </Button>
        </div>
      </Form>
    </div>
    </>
  );
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};

