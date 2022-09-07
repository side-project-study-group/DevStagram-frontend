import React from 'react'
import MyProfileMeetUpTemp from './my-profile-meet-up-template'

// let mock = {
//   name: '김다다',
//   nickname: '다다',
//   password: 'dataland',
//   pictureUrl:
//     'https://toppng.com//public/uploads/preview/user-account-management-logo-user-icon-11562867145a56rus2zwu.png',
//   description: '베짱이',
//   email: 'dada@gmail.com',
//   github: 'https://github.com/dada',
//   blog: null,
//   tags: ['Java', 'DevOps'],
//   provider: 'app',
// };

function MyProfileMeetUp() {
    return <MyProfileMeetUpTemp meetUps={meetUpMock} />
}

export default MyProfileMeetUp

const meetUpMock = [
    {
        id: 0,
        category: '스터디',
        title: '[부산] Deep Dive 독서스터디 모집',
        contetns:
            '부산에서 오프라인 북 스터디를 모집합니다. 오픈 채팅링크로 참여 연락 부탁드립니다!',
        maxPeople: 4,
        memberCount: 2,
        isOpenYn: true,
        isRecruiting: true,
        leaderId: 'rose',
        _links: '#',
    },
    {
        id: 0,
        category: '프로젝트',
        title: '[강남] 직장인 React 스터디를 모집합니다.',
        contetns:
            '퇴근하고 사이드 프로젝트를 진행하실 분을 찾습니다. 게더타운에서 만나 진행할 예정입니다. 많은 참여 부탁드려요~',
        maxPeople: 4,
        memberCount: 4,
        isOpenYn: false,
        isRecruiting: false,
        leaderId: 'Lisa',
        _links: '#',
    },
    {
        id: 0,
        category: '네트워킹',
        title: '[을지로] 번개 커피챗 모집합니다.',
        contetns:
            '3년차 백엔드 개발자와 커피챗 하실 분 모집합니다. 가볍게 대화 나누실 분 모두 환영합니다^^',
        maxPeople: 3,
        memberCount: 2,
        isOpenYn: true,
        isRecruiting: true,
        leaderId: 'Jisoo',
        _links: '#',
    },
]
