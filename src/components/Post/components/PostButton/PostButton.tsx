import React from "react";
import { ReactComponent as like } from "../../../../assets/icons/like.svg";
import { ReactComponent as blueLike } from "../../../../assets/icons/blueLike.svg";
import { ReactComponent as comment } from "../../../../assets/icons/comments.svg";
import { colors } from "../../../../global-style";
import { SvgIcon } from "@mui/material";
import { ButtonWrapper } from "./style-postButton";
import Typography from "../../../Typography/Typography";

interface PostButtonProps {
  isLiked?: boolean;
  type: "like" | "comment";
}

const PostButton: React.FC<PostButtonProps> = ({ isLiked, type }) => {
  const isLikeBtn = type === "like";

  const displeyIcon = () => {
    if (isLikeBtn) {
      return isLiked ? blueLike : like;
    } else {
      return comment;
    }
  };

  return (
    <ButtonWrapper>
      <SvgIcon
        component={displeyIcon()}
        inheritViewBox
        sx={{ height: "18px", width: "18px" }}
      />
      <Typography textColor={isLiked ? colors.blue : colors.gray}>
        {isLikeBtn ? "Like" : "Comment"}
      </Typography>
    </ButtonWrapper>
  );
};

export default PostButton;
