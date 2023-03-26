import styled from "styled-components";
import { colors } from "../../../../global-style";

export const UserDetailsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const Dot = styled.div`
  height: 4px;
  width: 4px;
  background-color: ${colors.gray};
  border-radius: 100%;
`;
