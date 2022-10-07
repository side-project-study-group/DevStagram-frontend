import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import HeaderBack from './components/organisms/header/header-back'
import HeaderHome from './components/organisms/header/header-home'
import MeetUpChatList from './pages/meet-up-chat-list/meet-up-chat-list'
import MeetUpForm from './pages/meet-up-form'
import MeetUpDetail from './pages/meet-up-detail/meet-up-detail'
import FeedDetail from './pages/feed-detail'
import EditMyProfile from './pages/edit-my-profile/edit-my-profile'
import MyProfilePost from './pages/my-profile-post/my-profile-post'
import LogIn from './pages/log-in/log-in'
import SignUp1 from './pages/sign-up-1/sign-up-1'
import SignUp2 from './pages/sign-up-2/sign-up-2'
import SignUp3 from './pages/sign-up-3/sign-up-3'
import SignUpFinish from './pages/sign-up-finish/sign-up-finish'
import FeedForm from './pages/feed-form'
import FeedMain from './pages/feed'
import MeetUpMain from './pages/meet-up'
import MyProfileMeetUp from './pages/my-profile/my-profile'
import MemberManagement from './pages/member-management'

function Router() {
    const { pathname } = useLocation()
    return (
        <>
            {pathname === '/intro' ||
            pathname.includes('/sign-up') ||
            pathname === '/log-in' ? null : pathname === '/' ||
              pathname === '/feed' ||
              pathname === '/meet-up-chat-list' ? (
                <HeaderHome />
            ) : (
                <HeaderBack />
            )}
            <Routes>
                {/* log-in & sign-up */}
                <Route path="/log-in" element={<LogIn />} />
                <Route path="/sign-up-1" element={<SignUp1 />} />
                <Route path="/sign-up-2" element={<SignUp2 />} />
                <Route path="/sign-up-3" element={<SignUp3 />} />
                <Route path="/sign-up-finish" element={<SignUpFinish />} />

                {/* meet-up */}
                <Route path="/" element={<MeetUpMain />} />
                <Route path="/meet-up/:id" element={<MeetUpDetail />} />
                <Route path="/meet-up-form" element={<MeetUpForm />} />
                <Route
                    path="/member-management"
                    element={<MemberManagement />}
                />

                {/* feed */}
                <Route path="/feed" element={<FeedMain />} />
                <Route path="/feed/:id" element={<FeedDetail />} />
                <Route path="/feed-form" element={<FeedForm />} />

                {/* my-profile */}
                <Route path="/edit-my-profile" element={<EditMyProfile />} />
                <Route
                    path="/my-profile-meet-up"
                    element={<MyProfileMeetUp />}
                />
                <Route path="/my-profile-post" element={<MyProfilePost />} />

                {/* 추후 기능 구현 예정 */}
                <Route path="/meet-up-chat-list" element={<MeetUpChatList />} />
            </Routes>
        </>
    )
}

export default Router
