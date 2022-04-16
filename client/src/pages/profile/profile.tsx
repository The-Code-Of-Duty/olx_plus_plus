import { useHistory } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import PostGrid from "../../components/PostGrid/postgrid";
import "./profile.scss";

function Profile(props: any) {
  const userProfile = props.userData.profileUrl;
  const userName = props.userData.name;
  const userEmail = props.userData.email;

  return (
    <div className="profile">
      <div className="section-1">
        <Avatar
          alt={userName}
          src={userProfile}
          sx={{ width: 128, height: 128 }}
        />
      </div>
      <div className="section-2">
        <div className="userName">{userName}</div>
        <Divider />
        <div className="myPosts">
            <h3>
              Your Ads
            </h3>
            <PostGrid />
            </div>
        <Divider />
        <div className="myBuys">
            <h3>
              Yoour orders
            </h3>
            <PostGrid />
            </div>
      </div>
    </div>
  );
}

export default Profile;
