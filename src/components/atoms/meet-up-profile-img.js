import React from 'react';
import styled from 'styled-components';
import testProfile from '../../assets/imgs/test.png';

const ImgContainer = styled.div`
  width: ${(props) => (props.size === 'big' ? '35px' : '22px')};
  height: ${(props) => (props.size === 'big' ? '35px' : '22px')};
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

function ProfileImg({ size }) {
  return (
    <ImgContainer size={size}>
      <img src={testProfile} alt='profile_img' />
    </ImgContainer>
  );
}

export default ProfileImg;
