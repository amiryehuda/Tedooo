import React from "react";
import { AvatarImage } from "./style-Avatar";

interface AvatarProps {
  userImageUrl: string;
}

const Avatar: React.FC<AvatarProps> = ({ userImageUrl }) => {
  return <AvatarImage src={`${userImageUrl}`} />;
};

export default Avatar;
