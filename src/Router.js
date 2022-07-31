import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/organisms/header';
import HeaderBack from './components/organisms/header/header-back';
import HeaderHome from './components/organisms/header/header-home';
import MeetUpChatList from './pages/meet-up-chat-list/meet-up-chat-list';
import MeetUpList from './pages/meet-up-list/meet-up-list';
import MeetUpManage from './pages/meet-up-manage/meet-up-manage';
import MeetUpPost from './pages/meet-up-post/meet-up-post';
import MeetUpWrite from './pages/meet-up-write/meet-up-write';

function Router() {
  const [pathName, setPathName] = useState('/');

  useEffect(() => {
    setPathName(window.location.pathname);
  }, []);

  return (
    <>
      <BrowserRouter>
        {pathName === '/' ? <HeaderHome /> : <HeaderBack />}
        <Routes>
          <Route path='/' element={<MeetUpList />} />
          <Route path='/meet-up-tab' element={<MeetUpPost />} />
          <Route path='/meet-up-chat-list' element={<MeetUpChatList />} />
          <Route path='/new-meet-up' element={<MeetUpWrite />} />
          <Route path='/meet-up-manage' element={<MeetUpManage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Router;
