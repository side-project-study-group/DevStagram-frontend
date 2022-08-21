import React from 'react';
import GoogleLogIn from '../../assets/imgs/google-log-in.png' 
import styled from 'styled-components';

const ImgContainer = styled.div`
    width:200px;
    height:auto;
    margin: 0 auto;
`;

const Img=styled.img`
width:100%;
height:100%;
vertical-align:top;
`

function GoogleLogInImg({size}) {
  return (
    <ImgContainer size={size}>
      <Img src={GoogleLogIn} alt='프로필 이미지' />
    </ImgContainer>
  );
}

export default GoogleLogInImg;
