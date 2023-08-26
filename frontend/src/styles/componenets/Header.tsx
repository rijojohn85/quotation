import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
const Header = () => {
  return(
  <Navbar expand="lg" className="bg-body-tertiary" bg='light' variant="light">
      <Container>
        <Navbar.Brand as={Link} to='/'>
          Quotation App
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className='me-auto'>
            <Nav.Link as={Link} to='/'>Home</Nav.Link>
            <Nav.Link as={Link} to='/customers'>Customers</Nav.Link>
            <NavDropdown title="More..." id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to='/products'>Products</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to='/about'>Seperated Link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse className="justify-content-end">
          <Nav.Link as={Link} to='/login'>Login</Nav.Link>
        </Navbar.Collapse>
      </Container>
  </Navbar>
  ); 
};

export default Header;
