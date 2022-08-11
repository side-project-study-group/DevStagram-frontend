import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/organisms/header';
import MeetUpChatList from './pages/meet-up-chat-list/meet-up-chat-list';
import MeetUpList from './pages/meet-up-list/meet-up-list';
import MeetUpManage from './pages/meet-up-manage/meet-up-manage';
import MeetUpPost from './pages/meet-up-post/meet-up-post';
import MeetUpWrite from './pages/meet-up-write/meet-up-write';
// js
import EditMyProfile from './pages/edit-my-profile/edit-my-profile';
import MyProfileMeetUp from './pages/my-profile-meet-up/my-profile-meet-up';
import MyProfilePost from './pages/my-profile-post/my-profile-post';
import YourProfileMeetUp from './pages/your-profile-meet-up/your-profile-meet-up';
import YourProfilePost from './pages/your-profile-post/your-profile-post';
import LogIn1 from './pages/log-in-1/log-in-1';
import LogIn2 from './pages/log-in-2/log-in-2';
import LogInFailure from './pages/log-in-failure/log-in-failure';
import SignUp1 from './pages/sign-up-1/sign-up-1';
import SignUp2 from './pages/sign-up-2/sign-up-2';
import SignUp3 from './pages/sign-up-3/sign-up-3';
import SignUpFinish from './pages/sign-up-finish/sign-up-finish';

function Router() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<MeetUpList />} />
          <Route path='/meet-up-post' element={<MeetUpPost />} />
          <Route path='/meet-up-chat-list' element={<MeetUpChatList />} />
          <Route path='/meet-up-write' element={<MeetUpWrite />} />
          <Route path='/meet-up-manage' element={<MeetUpManage />} />
          {/* js */}
          <Route path='/edit-my-profile' element={<EditMyProfile />} />
          <Route path='/my-profile-meet-up' element={<MyProfileMeetUp />} />
          <Route path='/my-profile-post' element={<MyProfilePost />} />
          <Route path='/your-profile-meet-up' element={<YourProfileMeetUp />} />
          <Route path='/your-profile-post' element={<YourProfilePost />} />
          <Route path='/log-in-1' element={<LogIn1 />} />
          <Route path='/log-in-2' element={<LogIn2 />} />
          <Route path='/log-in-failure' element={<LogInFailure />} />
          <Route path='/sign-up-1' element={<SignUp1 />} />
          <Route path='/sign-up-2' element={<SignUp2 />} />
          <Route path='/sign-up-3' element={<SignUp3 />} />
          <Route path='/sign-up-finish' element={<SignUpFinish />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Router;
