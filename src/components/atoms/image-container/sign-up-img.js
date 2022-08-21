import React from 'react';
import MainProfile from '../../assets/imgs/main-profile.png' 
import styled from 'styled-components';

const ImgContainer = styled.div`
    width:120px;
    height:120px;
    margin: 0 auto;
    border-radius: 100%;
`;

const Img=styled.img`
width:100%;
height:100%;
`

function SignUpImg({size}) {
  return (
    <ImgContainer size={size}>
      <Img src={MainProfile} alt='프로필 이미지' />
    </ImgContainer>
  );
}

export default SignUpImg;
