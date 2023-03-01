import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


const NavBar = ({}) => {
    return (
        <Navbar bg="light" expand="lg">
        <Container>
            <Link to='/'>
                <Navbar.Brand>Video Game Data</Navbar.Brand>
            </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {/* <Nav.Link href="#home">Charts</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link> */}
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <Link to='/charts'>
                    <NavDropdown.Item href="#action/3.1">Video Game Sales</NavDropdown.Item>
                </Link>
                <Link to='/search'>
                    <NavDropdown.Item href="#action/3.2">Search Games</NavDropdown.Item>
                </Link>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
        // <nav>
        //     <ul>
        //         <Link to='/'>
        //             <li><h2>Video Game Data</h2></li>
        //         </Link>
        //         <Link to='/charts'>
        //             <li>Video Game Sales</li>
        //         </Link>
        //         <Link to='/search'>
        //             <li>Search Games</li>
        //         </Link>
        //     </ul>
        // </nav>
     );
}
 
export default NavBar;