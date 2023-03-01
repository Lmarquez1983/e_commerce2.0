import React from 'react'
import {Button, Container, Form, Nav, Navbar, NavDropdown, Offcanvas} from 'react-bootstrap'
import { ShoppingCart } from 'phosphor-react'

const Navibar = () => {
  return (
    <Navbar key='xl' bg="dark" expand='xl' className="mb-3" variant='dark'>
          <Container fluid>
            <Navbar.Brand href="#">MRQZ Store</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-xl`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-xl`}
              aria-labelledby={`offcanvasNavbarLabel-expand-xl`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-xl`}>
                  The MRQZ Store
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                <NavDropdown
                    title="Dropdown"
                    id={`offcanvasNavbarDropdown-expand-xl`}
                  >
                    <NavDropdown.Item href="#action3">Information</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Want to buy this page?
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Contact Us
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="/Cart"><ShoppingCart size={32}/></Nav.Link>

                </Nav>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
  )
}

export default Navibar
