import React from 'react';
import styled from 'styled-components';

const Img = styled.img`
  border-radius: 100%;
`;

function ProfileImg() {
  return (
    <>
      <Img src='https://fakeimg.pl/50x50/' alt='프로필 이미지' />
    </>
  );
}

export default ProfileImg;
