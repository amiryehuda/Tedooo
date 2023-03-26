import React from "react";
import { Layout } from "../../global-style";
import tedooLogo from "../../assets/icons/tedoooLogo.svg";
import {
  Logo,
  LogoAndSearch,
  NavbarContainer,
  Search,
  TabsAndAvatar,
} from "./style-Navbar";
import NavMenu from "../TabPanel/TabPanel";
import Avatar from "../Avatar/Avatar";

interface NavbarProps {
  userImage: string;
}

const Navbar: React.FC<NavbarProps> = ({ userImage }) => {
  return (
    <Layout>
      <NavbarContainer>
        <LogoAndSearch>
          <Logo src={`${tedooLogo}`} />
          <Search placeholder="search" />
        </LogoAndSearch>
        <TabsAndAvatar>
          <NavMenu />
          <Avatar userImageUrl={userImage} />
        </TabsAndAvatar>
      </NavbarContainer>
    </Layout>
  );
};

export default Navbar;
