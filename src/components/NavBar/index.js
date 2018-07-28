import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NavigationBar = styled.nav`
  max-height: 48px;
  height: 48px;
  display: flex;
  justify-content: center;
  z-index: 1;
`;

const MenuList = styled.ul`
  min-height: 48px;
  max-height: 48px;
  display: flex;
  list-style: none;
  user-select: none;
  margin: 0;
  padding: 0;
`;

const MenuListItem = styled.li`
  &.active {
    color: #efefef;
    background: rgba(255, 255, 255, 0.1);
    border-bottom: 2px solid #fff;
  }
  &:hover {
    background: rgba(255, 255, 255, 0.05);
  }
`;

const NavLink = styled(Link)`
  padding: 0 22px;
  display: flex;
  height: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  font-size: 14px;
  text-transform: uppercase;
  font-weight: bold;
  color: rgba(239, 239, 239, 0.8);
  transition: all 0.2s ease;

  &:hover {
    text-decoration: none !important;
    color: #efefef;
  }
`;

const Links = [
  {
    title: "Pradzia",
    to: "/"
  },
  {
    title: "Forumas",
    to: "/forum"
  },
  {
    title: "Profilio pvz",
    to: "/profile",
    gold: true
  }
];

class NavBar extends Component {
  render() {
    return (
      <NavigationBar>
        <MenuList>
          {Links.map(link => (
            <MenuListItem key={link.to}>
              <NavLink
                className="active"
                to={link.to}
                style={link.gold ? { color: "#FFCA28" } : {}}
              >
                {link.title}
              </NavLink>
            </MenuListItem>
          ))}
        </MenuList>
      </NavigationBar>
    );
  }
}

export default NavBar;
