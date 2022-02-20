import React, { useEffect } from "react";

import { Container, Nav, Button, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { generateMatchAmount } from "../redux/actions/contract";
const NavbarComponent = () => {
  const dispatch = useDispatch();

  const { contract } = useSelector(state => state);
  const [admin, setAdmin] = React.useState(false);
  useEffect(() => {
    if (contract.account === contract.manager) {
      setAdmin(true);
    }
  }, []);
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(generateMatchAmount());
  };
  //generateMatchAmount
  return (
    <div
      style={{
        height: "10vh",
        paddingLeft: "4%",
        paddingRight: "4%",
        paddingTop: "1%",
        boxShadow: "0px 1px 1px grey",
      }}
    >
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
              style={{
                fontSize: "1.3rem",
                marginLeft: "4%",
                display: "flex",
                width: "40%",
                justifyContent: "space-evenly",
                fontWeight: "bold",
                maxHeight: "80%",
                font: "Poppins",
                color: "black",
              }}
              navbarScroll
            >
              <Nav.Link as={Link} to={"/projects"}>
                Projects
              </Nav.Link>
              <Nav.Link as={Link} to="/sponsor">
                Become a Sponsor
              </Nav.Link>
              <Nav.Link as={Link} to="/learn">
                Learn
              </Nav.Link>
              {/* <NavDropdown title="Link" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown> */}
            </Nav>
          </Navbar.Collapse>
          {admin && (
            <Button style={{ marginRight: "3%" }} onClick={handleSubmit}>
              Generate Match Amount
            </Button>
          )}
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
            <Button className="btn btn-primary">Connect to Wallet</Button>
          )}
        </Container>
      </Navbar>
    </div>
  );
};
export default NavbarComponent;
