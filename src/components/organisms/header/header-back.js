import React from 'react';
import styled from 'styled-components';
import { BsChatSquareText } from 'react-icons/bs';
import { VscHome } from 'react-icons/vsc';
import { HiOutlineChatAlt2 } from 'react-icons/hi';
import { BsPerson } from 'react-icons/bs';
import { FiTriangle } from 'react-icons/fi';
import { RiListSettingsLine } from 'react-icons/ri';

const Container = styled.div`
  background-color: #fcfcfa;
  width: 100%;
  height: 50px;
  max-width: 480px;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  border-bottom: 2px solid #24231f;
  padding: 0 30px;
  box-sizing: border-box;
  .icon_back,
  .icon_control {
    font-size: 35px;
    margin: auto 0;
  }
  .icon_back {
    transform: rotate(-90deg);
    fill: rgba(250, 215, 120, 1);
    color: rgba(65, 64, 66, 1);
  }
`;

function HeaderBack() {
  return (
    <Container>
      <FiTriangle className='icon_back' />
      <RiListSettingsLine className='icon_control' />
    </Container>
  );
}

export default HeaderBack;
