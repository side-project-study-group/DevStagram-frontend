import React from 'react';
import ProfileImg from '../atoms/porfile-img';
import Title from '../atoms/title';

function ProfileImgNicknameContainer({ title }) {
  return (
    <>
      <ProfileImg />
      <Title title={title} />
    </>
  );
}

export default ProfileImgNicknameContainer;
