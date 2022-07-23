import React from 'react';
import styled from 'styled-components';
import MemberTag from './molecules/member-tag';
import MeetUpTitle from './molecules/meet-up-title';
import Tag from './atoms/tag';
import TextBox from './atoms/text-box';
import ProfileTag from './molecules/profile-tag';
import { ImLock } from 'react-icons/im';

const Section = styled.div`
  margin-bottom: 10px;
  box-sizing: border-box;
  width: 100%;
  display: flex;
  justify-content: space-between;
  position: relative;
  background-color: #ffffff;
  border: 2px solid #24231f;
  border-radius: 10px;
  max-width: 480px;
  padding: 10px;
`;

const Header = styled.header`
  display: flex;
`;

const Container = styled.div`
  width: 100%;
`;

const EditBtn = styled.div`
  position: absolute;
  right: 10px;
  .edit_icon {
    width: 25px;
    height: 25px;
  }
`;

const Footer = styled.footer`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

function MeetUpPostBox({ children }) {
  return (
    <Section>
      <Container>
        <Header>
          <ImLock style={{ color: 'green' }} />
          <Tag text='프로젝트' />
        </Header>
        <EditBtn>{children}</EditBtn>
        <MeetUpTitle />
        <TextBox />
        <Footer>
          <MemberTag />
          <ProfileTag />
        </Footer>
      </Container>
    </Section>
  );
}

export default MeetUpPostBox;
