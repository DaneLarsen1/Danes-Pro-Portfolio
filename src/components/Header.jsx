import {Link} from 'react-router-dom'
import {Navbar, Container, Nav} from 'react-bootstrap';
import './styles.css'

function Header() {
    return (
        <header className="header">
            <h1>Dane Larsen</h1>
            <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          {/* <Navbar.Brand href="#home">Dane</Navbar.Brand> */}
          <Nav className="me-auto">
            <Link to='/'>About Me</Link>
            <Link to='/resume'>Resume</Link>
            <Link to='/contact'>Contact</Link>
            <Link to='/projects'>Portfolio</Link>
            
          </Nav>
        </Container>
      </Navbar>

        </header>
    );
}




export default Header;