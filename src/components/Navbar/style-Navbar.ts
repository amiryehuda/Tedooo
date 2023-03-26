import styled from "styled-components";
import { colors } from "../../global-style";

export const NavbarContainer = styled.div`
  width: 100%;
  height: 6vh;

  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${colors.white};
`;

export const LogoAndSearch = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const Logo = styled.img`
  height: 40px;
  width: 40px;
`;

export const Search = styled.input`
  height: 40px;
  width: 200px;
  font-size: 14px;
  padding-left: 20px;
  background-color: #f4f5f5;
  border: none;
  border-radius: 32px;
  outline: none;
  background: transparent
    url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='14' class='bi bi-search' viewBox='0 0 16 16'%3E%3Cpath d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z'%3E%3C/path%3E%3C/svg%3E")
    no-repeat 0px center;
`;
export const TabsAndAvatar = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;
