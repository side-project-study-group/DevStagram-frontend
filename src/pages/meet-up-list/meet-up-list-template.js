import React from 'react';
import PostMeetUp from '../../components/meet-up-post';
import SubHeader from '../../components/sub-header';

function MeetUpListTemp() {
  return (
    <div>
      <SubHeader />
      <div>
        <PostMeetUp />
        <PostMeetUp />
        <PostMeetUp />
      </div>
    </div>
  );
}

export default MeetUpListTemp;
