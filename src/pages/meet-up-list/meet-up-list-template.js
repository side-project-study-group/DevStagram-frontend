import React from 'react';
import MeetUpPostBox from '../../components/meet-up-post-box';
import styled from 'styled-components';
import SearchHeader from '../../components/search-header';
import NavigationBar from '../../components/navigation-bar';
import PlusButton from '../../components/atoms/plus-button';
import CreatePopUp from '../create-pop-up/create-pop-up';

const Section = styled.section`
  width: 100%;
  max-width: 480px;
  margin: 0 auto;
  height: 100%;
  background-color: rgba(250, 250, 248, 1);
  padding: 0 15px;
  box-sizing: border-box;
`;

function MeetUpListTemp() {
  return (
    <>
      <Section>
        <SearchHeader />
        <NavigationBar />
        <MeetUpPostBox size={'small'} />
        <MeetUpPostBox size={'small'} />
        <MeetUpPostBox size={'small'} />
        <PlusButton />
      </Section>
      {/* <CreatePopUp /> */}
    </>
  );
}

export default MeetUpListTemp;
