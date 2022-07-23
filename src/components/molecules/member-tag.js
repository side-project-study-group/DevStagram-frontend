import React from "react";
import styled from "styled-components";
import { IoIosPeople } from "react-icons/io";

const MemberContainer = styled.div`
  display: flex;
  font-family: "NotoSansKR";
  color: #4b64e6;
  .people_icon {
    font-size: 25px;
  }
  span {
    font-size: 13px;
    padding-top: 3px;
  }
`;

function MemberTag() {
  return (
    <MemberContainer>
      <IoIosPeople className="people_icon" />
      <span>1 /5명 참여</span>
    </MemberContainer>
  );
}

export default MemberTag;
