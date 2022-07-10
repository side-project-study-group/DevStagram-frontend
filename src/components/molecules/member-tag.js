import React from 'react';
import styled from 'styled-components';
import { BsFillPeopleFill } from 'react-icons/bs';

const MemberContainer = styled.div`
  display: flex;
`;

function MemberTag() {
  return (
    <MemberContainer>
      <BsFillPeopleFill />
      <span>1/5 참여</span>
    </MemberContainer>
  );
}

export default MemberTag;
