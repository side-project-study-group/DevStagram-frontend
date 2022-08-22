import React from 'react';
import Firecracker from '../../../assets/imgs/firecracker.png' 
import styled from 'styled-components';

const ImgContainer = styled.div`
    width:270px;
    height:auto;
    margin: 0 auto;
`;

const Img=styled.img`
width:100%;
height:100%;
`

function SignUpCongrats({size}) {
  return (
    <ImgContainer size={size}  >
      <Img src={Firecracker} alt='환영합니다!' />
    </ImgContainer>
  );
}

export default SignUpCongrats;
