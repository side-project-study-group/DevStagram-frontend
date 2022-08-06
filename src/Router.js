import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HeaderBack from './components/organisms/header/header-back';
import HeaderHome from './components/organisms/header/header-home';
import MeetUpChatList from './pages/meet-up-chat-list/meet-up-chat-list';
import MeetUpList from './pages/meet-up-list/meet-up-list';
import MeetUpWrite from './pages/meet-up-write/meet-up-write';
import MeetUpDetail from './pages/meet-up-detail/meet-up-detail';

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
          <Route path='/meet-up-detail' element={<MeetUpDetail />} />
          <Route path='/meet-up-chat-list' element={<MeetUpChatList />} />
          <Route path='/meet-up-write' element={<MeetUpWrite />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Router;
