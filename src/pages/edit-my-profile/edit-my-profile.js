import React from 'react';
import EditMyProfileTemp from './edit-my-profile-template';

const mock = {
  nickname: '닉네임',
  techStack: '기술태그',
  description: '자기소개',
  gitHubUrl: 'www.github.com',
  blogUrl: 'www.blog.com',
};

function EditMyProfile() {
  return <EditMyProfileTemp />;
}

export default EditMyProfile;
