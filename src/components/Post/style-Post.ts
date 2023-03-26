import styled from "styled-components";
import { colors } from "../../global-style";

export const PostWrapper = styled.div`
  width: 100%;
  background-color: ${colors.white};
`;

export const PostHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 24px 24px 16px 24px;
`;
export const PostContent = styled.div<{ isTwoImg?: boolean }>`
  height: 517px;
  display: flex;
  justify-content: ${(props) => (props.isTwoImg ? "space-between" : "center")};

  gap: 12px;
  background-color: ${colors.green};
`;
export const PostImg = styled.img`
  height: 100%;
  &.oneImg {
    width: 880px;
  }
  &.twoImges {
    width: 560px;
  }
`;
export const PostFooter = styled.div`
  padding: 16px 24px 14px 24px;
`;
