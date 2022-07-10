import React from 'react';
import styled from 'styled-components';
import { CgProfile } from 'react-icons/cg';

const Profile = styled.div`
  display: flex;
`;

function ProfileTag() {
  return (
    <Profile>
      <CgProfile />
      <span>yday1223</span>
    </Profile>
  );
}

export default ProfileTag;
