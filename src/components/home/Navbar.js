import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "../../assets/styles/navbar.css";
import Icon from "../../assets/icons/icon1.png";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
} from "reactstrap";

function AppNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <div className="navbar-area navbar-main">
      <Container>
        <Navbar light expand="md">
          <NavbarBrand href="/">
            <img src={Icon} width="60px" alt="icon" />
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto navbar-center" navbar>
              <NavItem className="nav-item">
                <NavLink href="/components/">Troniq App </NavLink>
              </NavItem>
              <NavItem className="nav-item">
                <NavLink href="https://github.com/reactstrap/reactstrap">
                  İstehsalımız
                </NavLink>
              </NavItem>
              <NavItem className="nav-item">
                <NavLink href="https://github.com/reactstrap/reactstrap">
                  Haqqımızda
                </NavLink>
              </NavItem>
              <NavItem className="nav-item">
                <NavLink href="https://github.com/reactstrap/reactstrap">
                  Tərəfdaşlar
                </NavLink>
              </NavItem>
              <NavItem className="nav-item">
                <NavLink href="https://github.com/reactstrap/reactstrap">
                  Əlaqə
                </NavLink>
              </NavItem>
              <NavItem className="navItemSearch nav-item">
                <FontAwesomeIcon
                  className="icon-navbar"
                  icon={faSearch}
                ></FontAwesomeIcon>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </Container>
    </div>
  );
}

export default AppNavbar;
