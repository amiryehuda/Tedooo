import React, { useState } from "react";
import { PostType } from "../../assets/types";
import Typography from "../Typography/Typography";
import LikeAndComments from "./components/likesAndComments/LikeAndComments";
import UserDetails from "./components/UserDetails/UserDetails";
import {
  PostContent,
  PostFooter,
  PostHeader,
  PostImg,
  PostWrapper,
} from "./style-Post";

const Post: React.FC<PostType> = ({
  avatar,
  comments,
  date,
  didLike,
  images,
  likes,
  shopName,
  text,
  username,
}) => {
  const [numberOfLikes, setNumberOfLikes] = useState<number>(likes);
  const [isLiked, setIsLiked] = useState<boolean>(didLike);

  const handleOnLikeClick = () => {
    if (isLiked) {
      setNumberOfLikes((likes) => likes - 1);
    } else {
      setNumberOfLikes((likes) => likes + 1);
    }
    setIsLiked((isLike) => !isLike);
  };

  const displayImage = () => {
    if (images.length === 1) {
      return (
        <PostContent>
          <PostImg src={images[0]} className="oneImg" />
        </PostContent>
      );
    } else {
      return (
        <PostContent isTwoImg={true}>
          <PostImg src={images[0]} className="twoImges" />
          <PostImg src={images[1]} className="twoImges" />
        </PostContent>
      );
    }
  };

  return (
    <PostWrapper>
      <PostHeader>
        <UserDetails
          avatar={avatar}
          shopName={shopName}
          username={username}
          timePass={date}
        />
        <Typography>{`${text} fdkgjnjklgs`}</Typography>
      </PostHeader>
      {displayImage()}
      <PostFooter>
        <LikeAndComments
          isLiked={isLiked}
          numberOfComments={comments}
          numberOfLikes={numberOfLikes}
          onLikeClick={handleOnLikeClick}
        />
      </PostFooter>
    </PostWrapper>
  );
};

export default Post;
