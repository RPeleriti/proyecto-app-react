import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Navegacion() {
  return (
    <Navbar  bg="#373B44" expand="lg">
      <Container>
        <Navbar.Brand href="/">Paseos Bkl</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse  id="basic-navbar-nav">
          <Nav className="m5px">
            <Nav.Link href="/">Experencies</Nav.Link>
            <Nav.Link href="Contact">Contact</Nav.Link>
            <NavDropdown title="Reserva" id="basic-nav-dropdown">
              <NavDropdown.Item href="Reservas">Reservas</NavDropdown.Item>
              <NavDropdown.Item href="gastronomia">Carrito Reservas</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navegacion;