import styled from "styled-components";

export const colors = {
  white: "#ffff",
  black: "black",
  blue: "#0A66C2",
  green: "#B8C248",
  feedBG: "#1E1E1E",
  gray: "#737877",
  lightGray: "#949796",
  tabs: "#2DB8A1",
};

export const Layout = styled.div`
  width: 1120px;
`;

export const headerHeight = "6vh";

export const Header = styled.div`
  width: 100%;
  height: ${headerHeight};
  margin-bottom: 24px;
  background-color: ${colors.white};
  display: flex;
  justify-content: center;
  position: fixed;
`;

export const AppWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #f6f7f7;
`;
