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
    <div>
      <h1>Registro de Usuarios</h1>
      <Form className="from" onSubmit={handleRegister}>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>Nombre</Form.Label>
          <Form.Control type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPassword">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </Form.Group>
        <Button variant="dark" type="submit" size="lg">
          Registrar
        </Button>
        {errorMessage && (
          <div className="alert alert-danger mt-3" role="alert">
            {errorMessage}
          </div>
        )}
        {successMessage && (
          <div className="alert alert-success mt-3" role="alert">
            {successMessage}
          </div>
        )}
      </Form>
    </div>
   </>
    
  );
}

export default RegisterUsers;

