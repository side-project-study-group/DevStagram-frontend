import React from 'react';
import ProfileHeader from '../../components/organisms/profile-header';
import Buttons from '../../components/atoms/buttons';
import MeetUpPostBox from '../../components/meet-up-post-box';

function MyProfileMeetUpTemp() {
  return (
    <>
      <ProfileHeader />
      <Buttons name={'프로필 수정'} />
      <MeetUpPostBox />
      <MeetUpPostBox />
      <MeetUpPostBox />
    </>
  );
}

export default MyProfileMeetUpTemp;
