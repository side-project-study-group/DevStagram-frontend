import React from "react";
import styled from "styled-components";
import ProfileTag from "../../components/molecules/profile-tag";
import { BsChatDots } from "react-icons/bs";
import MemberTag from "../../components/molecules/member-tag";
import { CgProfile } from "react-icons/cg";
import PostDetail from "../../components/organisms/post-detail";
import Tag from "../../components/atoms/tag";
import MeetType from "../../components/atoms/meet-type";
import MeetUpTitle from "../../components/molecules/meet-up-title";
import FooterBtn from "../../components/molecules/footer-button";

const Section = styled.section`
  width: 100%;
  max-width: 480px;
  margin: 0 auto;
  padding: 10px 10px;
  box-sizing: border-box;
  background-color: lightgoldenrodyellow;
`;

const TagContainer = styled.div`
  width: 100%;
  padding-top: 5px;
  padding-left: 10px;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
`;

function MeetUpPostTemp() {
  return (
    <Section>
      <TagContainer>
        <Tag text="네트워크" />
      </TagContainer>
      <Container>
        <ProfileTag />
        <BsChatDots />
      </Container>
      <MeetUpTitle />
      <MeetType />
      <Container>
        <MemberTag />
        <CgProfile />
        <CgProfile />
        <CgProfile />
      </Container>
      <PostDetail />
      <FooterBtn />
    </Section>
  );
}

export default MeetUpPostTemp;
