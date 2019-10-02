import React from "react";
import { NavLink } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Container
} from 'reactstrap';

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
        <Container>
          <NavbarBrand>Tim Sherman</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink to="/home" style={{
                  marginRight: "20px"
                }}>About Me</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="#" style={{
                  marginRight: "20px"
                }}>Contact</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="#">Portfolio</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}