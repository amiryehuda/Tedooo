import React, { useState } from "react";
import {
  StyledNavLink,
  NavMenuContainer,
  NavMenuItem,
  NavMenuList,
} from "./style-tabPanel";
import home from "../../assets/icons/home.svg";
import home_active from "../../assets/icons/home_active.svg";
import message from "../../assets/icons/message.svg";
import message_active from "../../assets/icons/message_active.svg";
import bell from "../../assets/icons/bell.svg";
import bell_active from "../../assets/icons/bell_active.svg";

const NavMenu = () => {
  const [activePath, setActivePath] = useState<string>("home");
  const handleIsActive = (pathName: string) => {
    setActivePath(pathName);
  };

  return (
    <NavMenuContainer>
      <NavMenuList>
        <NavMenuItem onClick={() => handleIsActive("home")}>
          <StyledNavLink to="/">
            <img src={activePath === "home" ? home_active : home} />
            Home
          </StyledNavLink>
        </NavMenuItem>
        <NavMenuItem onClick={() => handleIsActive("messages")}>
          <StyledNavLink to="/messages">
            <img
              src={activePath === "messages" ? message_active : message}
              style={{ stroke: "red" }}
            />
            Messages
          </StyledNavLink>
        </NavMenuItem>
        <NavMenuItem onClick={() => handleIsActive("notifications")}>
          <StyledNavLink to={"/notifications"}>
            <img src={activePath === "notifications" ? bell_active : bell} />
            Notifications
          </StyledNavLink>
        </NavMenuItem>
      </NavMenuList>
    </NavMenuContainer>
  );
};

export default NavMenu;
