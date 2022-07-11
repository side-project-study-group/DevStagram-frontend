import React from "react";
import styled from "styled-components";
import ProfileTag from "./molecules/profile-tag";
import MemberTag from "./molecules/member-tag";
import MeetUpTitle from "./molecules/meet-up-title";
import MeetType from "./atoms/meet-type";
import Tag from "./atoms/tag";

const Container = styled.div`
  margin: 0 auto;
  box-sizing: border-box;
  width: 100%;
  position: relative;
  background-color: whitesmoke;
  max-width: 480px;
  padding: 10px;
  border-bottom: 1px solid white;
`;

const TagContainer = styled.div`
  display: flex;
  gap: 5px;
`;

const Bottom = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const EditBtn = styled.div`
  position: absolute;
  right: 10px;
  .edit_icon {
    width: 25px;
    height: 25px;
  }
`;

function MeetUpPostBox({ children }) {
  return (
    <Container>
      <EditBtn>
        {/* {edit && <TbDotsCircleHorizontal className="edit_icon" />} */}
        {children}
      </EditBtn>
      <TagContainer>
        <Tag text="스터디" />
      </TagContainer>
      <MeetUpTitle />
      <MeetType />
      <Bottom>
        <MemberTag />
        <ProfileTag />
      </Bottom>
    </Container>
  );
}

export default MeetUpPostBox;
