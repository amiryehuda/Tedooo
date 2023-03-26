import React from "react";
import Avatar from "../../../Avatar/Avatar";
import Typography from "../../../Typography/Typography";
import { Dot, UserDetailsWrapper } from "./style-user";
import { colors } from "../../../../global-style";
import { timePassed } from "../../../../assets/utils/helpers";

export interface UserDetails {
  username: string;
  avatar: string;
  shopName: string;
  timePass: string;
}

const UserDetails: React.FC<UserDetails> = ({
  avatar,
  shopName,
  username,
  timePass,
}) => {
  return (
    <UserDetailsWrapper>
      <Avatar userImageUrl={avatar} />
      <div>
        <Typography fontSize="16px" fontWeight="500">
          {username}
        </Typography>
        <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
          <Typography textColor={`${colors.blue}`} fontSize="14px">
            {shopName}
          </Typography>
          <Dot />
          <Typography textColor={`${colors.gray}`} fontSize="14px">
            {timePass}
          </Typography>
        </div>
      </div>
    </UserDetailsWrapper>
  );
};

export default UserDetails;
