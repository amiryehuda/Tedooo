import React from "react";
import { colors } from "../../../../global-style";
import Typography from "../../../Typography/Typography";
import PostButton from "../PostButton/PostButton";
import {
  Divider,
  LikesAndCommentsButtons,
  TotalLikesAndComments,
} from "./style-likesComments";

interface LikeCommentProps {
  numberOfLikes: number;
  numberOfComments: number;
  isLiked: boolean;
  onLikeClick: () => void;
}

const LikeAndComments: React.FC<LikeCommentProps> = ({
  numberOfComments,
  numberOfLikes,
  isLiked,
  onLikeClick,
}) => {
  return (
    <>
      <TotalLikesAndComments>
        <Typography
          textColor={colors.gray}
        >{`${numberOfLikes} likes`}</Typography>
        <Typography
          textColor={colors.gray}
        >{`${numberOfComments} comments`}</Typography>
      </TotalLikesAndComments>
      <Divider />
      <LikesAndCommentsButtons>
        <div onClick={onLikeClick}>
          <PostButton type="like" isLiked={isLiked} />
        </div>
        <PostButton type="comment" />
      </LikesAndCommentsButtons>
    </>
  );
};

export default LikeAndComments;
