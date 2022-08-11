import React from 'react';
import ProfileHeader from '../../components/organisms/profile-header';
import Buttons from '../../components/atoms/buttons';

function YourProfilePostTemp() {
  return (
    <>
      <ProfileHeader />
      <Buttons name={'Follow'} />
      {/* 타임라인부분 떼어와 붙이기 */}
    </>
  );
}

export default YourProfilePostTemp;
