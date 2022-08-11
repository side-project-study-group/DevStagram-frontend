import React from 'react';
import ProfileImgNicknameContainer from '../molecules/profile-header-img-nickname-container';
import Description from '../atoms/description';
import TechStack from '../atoms/tech-stack';
import Urls from '../atoms/urls';
import Buttons from '../../components/atoms/buttons';

function ProfileHeader() {
  return (
    <>
      <ProfileImgNicknameContainer title={'닉네임'} />
      <Description define={'자기소개입니다!'} />
      <TechStack />
      <Urls />
      <Buttons name={'Meet Up'} />
      <Buttons name={'Post'} />
    </>
  );
}
export default ProfileHeader;
