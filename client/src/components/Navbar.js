import * as React from "react";
import { Container, Nav, NavDropdown, Button, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const NavbarComponent = () => {
  const { contract } = useSelector(state => state);

  return (
   <div>
     
   </div>
  );
};
export default NavbarComponent;
