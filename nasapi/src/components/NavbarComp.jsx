import Container from 'react-bootstrap/Container';
import { Nav, Navbar } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './About';
import Home from './Home';
import Gallery from './Gallery';

export default function NavbarComp() {
    return (
      <Router>
        <div>
          <Navbar bg="dark" variant="dark" sticky='top'>
            <Container>
              <Navbar.Brand href="/">
                <img 
                alt='nasapi_logo'
                src='nasapi_logo.png'
                width="50" 
                height="50"
                className="d-inline-block" />
                {' '}
                Nasapi
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link as={Link} to ={"/"}>Home</Nav.Link>
                </Nav>
                <Nav>
                  <Nav.Link as={Link} to ={"/gallery"}>Gallery</Nav.Link>
                </Nav>
                <Nav>
                  <Nav.Link as={Link} to ={"/about"}>About</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
        <div>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/gallery" element={<Gallery/>}/>
          <Route exact path="/about" element={<About/>}/>
        </Routes>
        </div>
      </Router>
    );
  }
