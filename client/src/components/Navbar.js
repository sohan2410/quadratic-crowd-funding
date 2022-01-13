import * as React from "react";
import { Container, Nav, NavDropdown, Button, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const NavbarComponent = () => {
  const { contract } = useSelector(state => state);

  return (
    <div style={{ height: "10vh" }}>
      <Navbar expand="lg">
        <Container fluid>
          <Navbar.Brand as={Link} to={"/"}>
            <img
              alt="logo"
              src="/logo.png"
              width="200"
              height="50"
              className="d-inline-block align-top"
            />{" "}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link as={Link} to={"/projects"}>
                Projects
              </Nav.Link>
              <Nav.Link as={Link} to="/become-a-sponsor">
                Become a Sponsor
              </Nav.Link>
              <NavDropdown title="Link" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>

          {contract.connectedToWallet ? (
            <Button
              className="btn btn-primary"
              data-toggle="tooltip"
              data-placement="top"
              title={`Connected to ${contract.account}`}
            >
              Connected to Wallet
            </Button>
          ) : (
            <Button className="btn btn-primary">Connected to Wallet</Button>
          )}
        </Container>
      </Navbar>
    </div>
  );
};
export default NavbarComponent;
