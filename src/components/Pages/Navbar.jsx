import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Navbar = () => {
  return (
    // <Nav>
    //   <Logo to="/">Telusko</Logo>
    //   <NavMenu>
    //     <NavItem>
    //       <Link to="/home">Home</Link>
    //     </NavItem>
    //     <NavItem>
    //       <Link to="/about">About</Link>
    //     </NavItem>
    //     <NavItem>
    //       <Link to="/contact">Contact</Link>
    //     </NavItem>
    //   </NavMenu>
    // </Nav>
    <>
      <div className="nav-bar">
        <div className="logo">Telusko</div>
        <div className="nav-links">
          <Link to="/home">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </>
  );
};

const Nav = styled.nav`
  background-color: #333;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: bold;
  color: #fff;
  text-decoration: none;
`;

const NavMenu = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-between;
`;

const NavItem = styled.li`
  margin-right: 20px;
`;

export default Navbar;
