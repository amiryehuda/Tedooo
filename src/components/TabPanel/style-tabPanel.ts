import styled from "styled-components";
import { colors } from "../../global-style";
import { NavLink } from "react-router-dom";

export const NavMenuContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const NavMenuList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const NavMenuItem = styled.li`
  margin: 0px 10px;
  cursor: pointer;
`;

export const StyledNavLink = styled(NavLink)`
  padding: 10px;
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  border-bottom: 0px solid transparent;
  color: ${colors.lightGray};
  fill: ${colors.lightGray};

  img {
    svg path {
      stroke: ${colors.lightGray};
      &.active {
        stroke: ${colors.tabs};
      }
    }
  }

  &:hover {
    color: #666;
  }
  &.active {
    color: ${colors.tabs};
    fill: ${colors.tabs};
    border-bottom: 2px solid ${colors.tabs};
  }
`;
