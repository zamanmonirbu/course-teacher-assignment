
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Home</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Courses</Nav.Link>
            <Nav.Link href="#features">Teachers</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <Nav.Link href="#pricing">About Us</Nav.Link>
            <Nav.Link href="#pricing" >Login</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
    

     
    </>
  );
}



export default Header;