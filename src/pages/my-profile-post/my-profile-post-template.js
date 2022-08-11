import React from 'react';
import ProfileHeader from '../../components/organisms/profile-header';
import Buttons from '../../components/atoms/buttons';

function MyProfilePostTemp() {
  return (
    <>
      <ProfileHeader />
      <Buttons name={'프로필 수정'} />
      {/* 타임라인부분 떼어와 붙이기 */}
    </>
  );
}

export default MyProfilePostTemp;
