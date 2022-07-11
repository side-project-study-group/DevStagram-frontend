import React from 'react';
import styled from 'styled-components';
import { BsFillChatSquareTextFill } from 'react-icons/bs';

const TypeContainer = styled.div`
  width: 100%;
  display: flex;
`;

function MeetType() {
  return (
    <TypeContainer>
      <BsFillChatSquareTextFill />
      <span>프라이빗 밋업</span>
    </TypeContainer>
  );
}

export default MeetType;
