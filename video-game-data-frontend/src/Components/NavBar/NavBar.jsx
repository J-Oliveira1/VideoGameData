import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "../NavBar/NavBar.css";

const NavBar = () => {
  return (
    <Navbar
      bg="dark"
      expand="lg"
      variant="dark"
      collapseOnSelect
      className="navBar"
    >
      <Container >
        <Link to="/" className="text-decoration-none" >
          <Navbar.Brand href="#home">
            <h3 >Video Game Data</h3>
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            {/* <Nav.Link href="#home">Charts</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link> */}
            <NavDropdown >
              <Link to="/charts" className="text-decoration-none">
                <NavDropdown.Item href="#action/3.1">
                  Video Game Sales
                </NavDropdown.Item>
              </Link>
              <Link to="/search" className="text-decoration-none">
                <NavDropdown.Item href="#action/3.2">
                  Search Games
                </NavDropdown.Item>
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
};

export default NavBar;
