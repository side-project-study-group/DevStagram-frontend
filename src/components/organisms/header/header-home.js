import React from 'react';
import styled from 'styled-components';
import { BsChatSquareText } from 'react-icons/bs';
import { VscHome } from 'react-icons/vsc';
import { HiOutlineChatAlt2 } from 'react-icons/hi';
import { BsPerson } from 'react-icons/bs';

const Container = styled.div`
  background-color: #fcfcfa;
  width: 100%;
  height: 50px;
  max-width: 480px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid #24231f;
  padding: 0 30px;
  box-sizing: border-box;
  .icon_home,
  .icon_chat,
  .icon_comment,
  .icon_profile {
    font-size: 35px;
    margin: auto 0;
  }
  .icon_back {
    transform: rotate(-90deg);
    fill: rgba(250, 215, 120, 1);
    color: rgba(65, 64, 66, 1);
  }
`;

function HeaderHome() {
  return (
    <Container>
      <VscHome className='icon_home' />
      <BsChatSquareText className='icon_chat' />
      <HiOutlineChatAlt2 className='icon_comment' />
      <BsPerson className='icon_profile' />
    </Container>
  );
}

export default HeaderHome;
