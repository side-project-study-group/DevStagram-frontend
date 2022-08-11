import React from 'react';
import ProfileHeader from '../../components/organisms/profile-header';
import Buttons from '../../components/atoms/buttons';
import MeetUpPostBox from '../../components/meet-up-post-box';

function YourProfileMeetUpTemp() {
  return (
    <>
      <ProfileHeader />
      <Buttons name={'Follow'} />
      <MeetUpPostBox />
      <MeetUpPostBox />
      <MeetUpPostBox />
    </>
  );
}

export default YourProfileMeetUpTemp;
