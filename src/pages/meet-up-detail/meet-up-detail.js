import axios from 'axios'
import React, { useEffect, useState } from 'react'
import MeetUpDetailTemp from './meet-up-detail-templete'

function MeetUpDetail() {
    const [details, setDetails] = useState([])

    useEffect(() => {
        // axios(`api/meetup/read/getOneMeetUp?meetUpId=${meetUpId}`).then(res=>console(res.data))
    }, [])
    
    return <MeetUpDetailTemp detail={mock} />
export default MeetUpDetail

const mock = {
    id: 0,
    category: '네트워킹',
    title: '[서울] 반응형 웹 토이프로젝트 프론트엔드 2명 모집',
    contetns:
        '안녕하세요, 백엔드 개발자를 꿈꾸는 철수입니다. 현재  진행하고 있는 취업 준비 프로젝트에서 프론트엔드 개발자를 구하고 있습니다. 기술 스택으로는 html, javascript, css를 생각하고 있습니다. 많은 지원 부탁드립니다!',
    maxPeople: 5,
    memberId: ['ga', 'na', 'da'],
    pendingId: ['ha'],
    isOpenYn: true,
    isRecruiting: true,
    leaderId: 'jennie',
}
