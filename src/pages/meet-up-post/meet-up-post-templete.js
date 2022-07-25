import React from 'react';
import styled from 'styled-components';
import MeetUpPostBox from '../../components/meet-up-post-box';
import FooterBtn from '../../components/molecules/footer-button';

const Section = styled.section`
  width: 100%;
  height: 100%;
  background-color: rgba(250, 250, 248, 1);
  max-width: 480px;
  margin: 0 auto;
  padding: 10px 10px;
  box-sizing: border-box;
`;

function MeetUpPostTemp() {
  return (
    <Section>
      <MeetUpPostBox size={'big'} />
      <FooterBtn text='참여하기' />
    </Section>
  );
}

export default MeetUpPostTemp;
