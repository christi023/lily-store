import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../assets/shopping-bag.png';
import NavData from '../../data/NavData';

import './NavBar.css';

const NavBar = () => {
  return (
    <>
      <Navbar bg="light" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <Link to="/">
            <img src={logo} alt="logo" style={{ width: '50px', marginBottom: '1.4em' }} />
            <Navbar.Brand>LILY</Navbar.Brand>
          </Link>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              {NavData.map((item, i) => (
                <Link to={item.link} key={i} className="nav-menu-links">
                  {item.title}
                </Link>
              ))}
              <div className="">
                <i className="fas fa-shopping-cart">
                  <span>0</span>
                </i>
              </div>
              <br />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
