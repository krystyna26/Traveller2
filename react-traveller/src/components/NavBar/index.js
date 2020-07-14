import React, { useState } from "react";

import { Link } from "react-router-dom";
import { withRouter } from "react-router";

import {
  MDBIcon,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBCardText,
  MDBDropdownItem,
} from "mdbreact";

function NavBar({ onRouteChange }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <MDBNavbar color="default-color" dark expand="md" fixed="top">
      <MDBNavbarBrand>
        <strong className="white-text">Travello</strong>
      </MDBNavbarBrand>
      <MDBNavbarToggler onClick={toggleCollapse} />
      <MDBCollapse id="navbarCollapse3" isOpen={isOpen} navbar>
        <MDBNavbarNav left>
          <MDBNavItem active>
            <MDBNavLink to="#">
              <Link to="/"> Home</Link>
            </MDBNavLink>
          </MDBNavItem>

          <MDBNavItem>
            <MDBNavLink to="#">
              <Link to="/friends">Friends</Link>
            </MDBNavLink>
          </MDBNavItem>

          <MDBNavItem>
            <MDBNavLink to="#">
              <Link to="/create">Create new trip</Link>
            </MDBNavLink>
          </MDBNavItem>

          <MDBNavItem>
            <MDBDropdown>
              <MDBDropdownToggle nav caret>
                <div className="d-none d-md-inline">My trips</div>
              </MDBDropdownToggle>
              <MDBDropdownMenu className="dropdown-default">
                <MDBDropdownItem href="#">
                  <Link to="/trips">All</Link>
                </MDBDropdownItem>
                <MDBDropdownItem href="#">
                  Borrowed from another friend
                </MDBDropdownItem>
                <MDBDropdownItem href="#">Comming this year</MDBDropdownItem>
                <MDBDropdownItem href="#">
                  <Link to="/my_trips">Favorite</Link>
                </MDBDropdownItem>
              </MDBDropdownMenu>
            </MDBDropdown>
          </MDBNavItem>

          <MDBNavItem>
            <MDBNavLink to="#">
              <Link to="/search">
                <i class="fas fa-search"></i>Search for trip
              </Link>
            </MDBNavLink>
          </MDBNavItem>
        </MDBNavbarNav>
        <MDBNavbarNav right>
          <MDBNavItem>
            <MDBNavLink className="waves-effect waves-light" to="#!">
              <MDBIcon fab icon="twitter" />
            </MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink className="waves-effect waves-light" to="#!">
              <MDBIcon fab icon="google-plus-g" />
            </MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink className="waves-effect waves-light" to="#!">
              <MDBIcon icon="envelope" className="mr-1" />
              Contact
            </MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink className="waves-effect waves-light" to="#!">
              <MDBIcon icon="cog" className="mr-1" />
              Settings
            </MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBDropdown>
              <MDBDropdownToggle nav caret>
                <MDBIcon icon="user" className="mr-1" />
                Profile
              </MDBDropdownToggle>

              <MDBDropdownMenu className="dropdown-default" right>
                <MDBDropdownItem href="#">
                  <Link to="/profile">My account</Link>
                </MDBDropdownItem>

                <MDBDropdownItem
                  href="#"
                  onClick={() => {
                    // call your auth logout code then reset store
                    // App.logout().then(() => client.resetStore());
                    onRouteChange("signin");
                  }}
                >
                  <Link to="/signin">Log out</Link>
                </MDBDropdownItem>
              </MDBDropdownMenu>
            </MDBDropdown>
          </MDBNavItem>
        </MDBNavbarNav>
      </MDBCollapse>
    </MDBNavbar>
  );
}

export default withRouter(NavBar);
