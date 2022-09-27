import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import HeaderBack from './components/organisms/header/header-back'
import HeaderHome from './components/organisms/header/header-home'
import MeetUpChatList from './pages/meet-up-chat-list/meet-up-chat-list'
import MeetUpList from './pages/meet-up-list/meet-up-list'
import MeetUpWrite from './pages/meet-up-write/meet-up-write'
import MeetUpDetail from './pages/meet-up-detail/meet-up-detail'
import PostDetail from './pages/post-detail/post-detail'
import EditMyProfile from './pages/edit-my-profile/edit-my-profile'
import MyProfilePost from './pages/my-profile-post/my-profile-post'
import LogIn from './pages/log-in/log-in'
import SignUp1 from './pages/sign-up-1/sign-up-1'
import SignUp2 from './pages/sign-up-2/sign-up-2'
import SignUp3 from './pages/sign-up-3/sign-up-3'
import SignUpFinish from './pages/sign-up-finish/sign-up-finish'
import NewPost from './pages/new-post/new-post'
import PostList from './pages/post-list/post-list'
import MyProfileMeetUp from './pages/my-profile/my-profile'

function Router() {
    const location = useLocation()
    return (
        <>
            {location.pathname === '/sign-up-finish' ||
            location.pathname === '/log-in' ? null : location.pathname ===
              '/' ? (
                <HeaderHome />
            ) : (
                <HeaderBack />
            )}
            <Routes>
                <Route path="/" element={<MeetUpList />} />
                <Route path="/meet-up-detail/:id" element={<MeetUpDetail />} />
                <Route path="/meet-up-chat-list" element={<MeetUpChatList />} />
                <Route path="/meet-up-write" element={<MeetUpWrite />} />

                <Route path="/post-list" element={<PostList />} />
                <Route path="/post-detail" element={<PostDetail />} />
                <Route path="/new-post" element={<NewPost />} />

                <Route path="/edit-my-profile" element={<EditMyProfile />} />
                <Route
                    path="/my-profile-meet-up"
                    element={<MyProfileMeetUp />}
                />
                <Route path="/my-profile-post" element={<MyProfilePost />} />

                <Route path="/log-in" element={<LogIn />} />
                <Route path="/sign-up-1" element={<SignUp1 />} />
                <Route path="/sign-up-2" element={<SignUp2 />} />
                <Route path="/sign-up-3" element={<SignUp3 />} />
                <Route path="/sign-up-finish" element={<SignUpFinish />} />
            </Routes>
        </>
    )
}

export default Router
