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
        <Navbar style={{backgroundColor: "black"}} light expand="md" className="fixed-top">
          <Container>
            <NavbarBrand style={{color: "white"}}>Tim Sherman</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem style={{marginTop: "10px"}}>
                  <NavLink to="/home" style={{
                    marginRight: "10px",
                    marginLeft: "10px",
                    color: "white"
                  }}>About Me</NavLink>
                </NavItem>
                <p style={{color: "white", marginTop: "10px"}}>|</p>
              <NavItem style={{marginTop: "10px"}}>
                  <NavLink to="/contact" style={{
                    marginRight: "10px",
                    marginLeft: "10px",
                    color: "white"
                  }}>Contact</NavLink>
                </NavItem>
                <p style={{color: "white", marginTop: "10px"}}>|</p>
              <NavItem style={{marginTop: "10px"}}>
                  <NavLink to="/portfolio" style={{
                    marginRight: "10px",
                    marginLeft: "10px",
                    color: "white"
                  }}>Portfolio</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}