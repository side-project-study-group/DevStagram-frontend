import React from 'react';
import styled from 'styled-components';
import MeetUpChat from '../../components/organisms/Meet-Up-Chat';

const Section = styled.section`
  width: 100%;
  margin: 0 auto;
  max-width: 480px;
`;

const Ul = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

function MeetUpChatListTemp() {
  return (
    <Section>
      <Ul>
        <MeetUpChat />
        <MeetUpChat />
        <MeetUpChat />
        <MeetUpChat />
        <MeetUpChat />
      </Ul>
    </Section>
  );
}

export default MeetUpChatListTemp;
