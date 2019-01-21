import React from "react";
import { Navbar, NavbarBrand, NavbarNav, NavItem, NavLink, NavbarToggler, Collapse, FormInline, Dropdown, DropdownToggle, DropdownMenu,  DropdownItem, Fa, MDBBadge } from "mdbreact";

class NavbarPage extends React.Component {
  state = {
    isOpen: false
  };

  toggleCollapse = this.setState({ isOpen: !this.state.isOpen });

  render() {
    return (
      <Navbar color="unique-color-dark"  dark expand="md" fixed-top>
          <NavbarBrand>
            <strong className="white-text"><NavLink to="/">Travel Helper</NavLink></strong>
          </NavbarBrand>
          <NavbarToggler
            onClick={this.toggleCollapse}
          />
          <Collapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
            <NavbarNav left>
              <NavItem >
                <NavLink to="/place/1">Kullu</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/place/2">Shimla</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/place/3">Parashar</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/place/4">Manali</NavLink>
              </NavItem>
              <NavItem>
                <Dropdown>
                  <DropdownToggle  nav caret>
                    <div className="d-none d-md-inline">Resource <MDBBadge color="danger" className="ml-2">3</MDBBadge></div>
                  </DropdownToggle>
                  <DropdownMenu className="dropdown-default"right>
                    <DropdownItem href="#!">Resource 1</DropdownItem>
                    <DropdownItem href="#!">Resource 2</DropdownItem>
                    <DropdownItem href="#!">Resource 3</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </NavItem>
            </NavbarNav>
            <NavbarNav right>
              <NavItem>
                <NavLink className="waves-effect waves-light" to="#!"><Fa icon="google-plus" /></NavLink>
              </NavItem>
            </NavbarNav>
          </Collapse>
      </Navbar>
    );
  }
}

export default NavbarPage;