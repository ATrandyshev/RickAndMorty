import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link, NavLink } from "react-router-dom";
import styles from "./header.module.css";

export const Header = () => (
  <header className={styles.header}>
    <Navbar bg="dark" variant="dark" expand="sm">
      <Container>
        <Navbar.Brand as={Link} to="/" className={styles.header__lable}>
          Rick And Morty
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end"
        >
          <Nav className={styles.header__nav}>
            <Nav.Link as={NavLink} to="/">
              Character
            </Nav.Link>
            <Nav.Link as={NavLink} to="/locations">
              Location
            </Nav.Link>
            <Nav.Link as={NavLink} to="/episodes">
              Episode
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </header>
);
