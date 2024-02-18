import { useState } from "react";
import axios from "axios";
import { Form, Button } from 'react-bootstrap';

const RegisterUsers = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:4003/users/create", {
        username,
        email,
        password,
      });

      console.log(response.data);
      setSuccessMessage("Usuario registrado con éxito.");

    } catch (error) {
      console.error("Error al registrar usuario", error.message);
      setErrorMessage("Error al registrar usuario. Por favor, inténtalo de nuevo.");
    }
  };

  return (
    <>
    <div className="form-container">
      <h1>Registro de Usuarios</h1>
      <Form className="form" onSubmit={handleRegister}>
        <Form.Group className="mb-4" controlId="formName">
          <Form.Control type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Nombre de Usuario"/>
        </Form.Group>
        <Form.Group className="mb-4" controlId="formEmail">
          <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)}  placeholder="Correo Electronico@"/>
        </Form.Group>
        <Form.Group className="mb-5" controlId="formPassword">
          <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)}  placeholder="Contraseña"/>
        </Form.Group>
        <Button variant="dark" type="submit" size="lg" className="button-register">
          Registrarse
        </Button>
        {errorMessage && (
          <div className="alert alert-danger mt-2" role="alert">
            {errorMessage}
          </div>
        )}
        {successMessage && (
          <div className="alert alert-success mt-2" role="alert">
            {successMessage}
          </div>
        )}
      </Form>
    </div>
   </>
    
  );
}

export default RegisterUsers;

