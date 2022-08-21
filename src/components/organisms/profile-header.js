import React from 'react';
import ProfileImgNicknameDesContainer from '../molecules/profile-header-img-nickname-container';
import TechStack from '../atoms/tech-stack';
import Urls from '../atoms/urls';
import styled from 'styled-components';


function ProfileHeader() {
  return (
    <>
      <ProfileImgNicknameDesContainer title={'Albert Flores'} />
      <TechStack />
      <Urls />
    </>
  );
}
export default ProfileHeader;
