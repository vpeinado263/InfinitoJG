import { Navbar, Nav } from 'react-bootstrap';

const CustomNavbar = () => {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">Inicio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/login-page">Login</Nav.Link>
            <Nav.Link href="/register-user">Registro</Nav.Link>
            <Nav.Link href="/create-knife">Crear Cuchillo</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default CustomNavbar;


