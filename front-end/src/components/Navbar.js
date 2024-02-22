import { Navbar, Nav } from 'react-bootstrap';

const CustomNavbar = () => {
  return (
    <>
      <Navbar className="nav-continer">
        <Navbar.Brand href="/">HOME</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/login-page">Iniciar Sesion</Nav.Link>
            <Nav.Link href="/register-user">Registrarse</Nav.Link>
            <Nav.Link href="/create-knife">Crear Cuchillo</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default CustomNavbar;


