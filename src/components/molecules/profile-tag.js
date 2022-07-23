import React from "react";
import styled from "styled-components";
import testProfile from "../../assets/imgs/test.png";

const Profile = styled.div`
  display: flex;
  span {
    font-family: "RobotoBold";
    font-size: 15px;
  }
`;

const ImgContainer = styled.div`
  width: 22px;
  height: 22px;
  margin-right: 5px;
  background-color: lightcoral;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 80%;
    height: 80%;
  }
`;

function ProfileTag() {
  return (
    <Profile>
      <ImgContainer>
        <img src={testProfile} alt="profile_img" />
      </ImgContainer>
      <span>yday1223</span>
    </Profile>
  );
}

export default ProfileTag;
