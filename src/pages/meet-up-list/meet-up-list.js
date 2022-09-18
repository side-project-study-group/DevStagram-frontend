import axios from 'axios'
import React, { useEffect, useState } from 'react'
import MeetUpListTemp from './meet-up-list-template'

function MeetUpList() {
    const [category, setCategory] = useState('ALL')
    const [summaries, setSummaries] = useState([])
    const uri = `http://default-gateway-service--87742-11669872-9594cfbe56b3.kr.lb.naverncp.com:9999`

    const selectCategory = (e) => {
        const { name } = e.target
        setCategory(category)
    }

    useEffect(() => {
        axios(
            `${uri}/api/meetup/read/getMeetUpSummaries/${category}?page=0&size=4`
        )
            .then((res) => {
                if (res.status === 200) {
                    setSummaries(res.data._embedded.meetUpSummaryDtoList)
                }
            })
            .catch(function (error) {
                console.log('Meet Up List Error====>', error)
            })
    }, [category])

    return <MeetUpListTemp summaries={summaries} />
}

export default MeetUpList

let mock = [
    {
        id: 0,
        category: '프로젝트',
        title: '[서울] 반응형 웹 토이프로젝트 프론트엔드 2명 모집',
        contetns:
            '취업 준비를 위한 프로젝트를 진행하고 있습니다. 프론트엔드 개발자를 구하고 있습니다. 많은 지원 부탁드립니다!',
        maxPeople: 5,
        memberCount: 5,
        isOpenYn: false,
        isRecruiting: false,
        leaderId: 'hello',
        _links: '#',
    },
    {
        id: 1,
        category: '스터디',
        title: '[대구] Flutter 스터디 모집',
        contetns:
            'Flutter 공식 문서 스터디를 모집합니다. 매주 각자 공부한 내용을 공유하는 방식으로 진행할 예정입니다. 게더타운에서 온라인으로 진행할 예정입니다.',
        maxPeople: 6,
        memberCount: 2,
        isOpenYn: true,
        isRecruiting: true,
        leaderId: 'hola',
        _links: '#',
    },
    {
        id: 2,
        category: '네트워킹',
        title: '[강남] 강남역 10번 출구 커피챗 모집',
        contetns:
            '22일 목요일에 강남역에서 간단하게 커피챗 하실 분 모집합니다. 저는 스타트업에서 근무하는 3년차 풀스택 개발자입니다. 현직자, 취준생 모두 환영합니다~',
        maxPeople: 4,
        memberCount: 1,
        isOpenYn: true,
        isRecruiting: true,
        leaderId: 'leo',
        _links: '#',
    },
    {
        id: 3,
        category: '스터디',
        title: '[을지로] 사이드 프로젝트를 같이 진행할 팀원을 모집합니다.',
        contetns:
            '현직자들의 퇴근 후 공부를 위한 사이드 프로젝트 팀원을 모집합니다. 기획은 어느정도 완료한 상황이고 바로 개발을 진행할 예정입니다. 아래 노션 확인하시고 진지하게 참여하실 분만 지원 부탁드립니다.',
        maxPeople: 4,
        memberCount: 2,
        isOpenYn: false,
        isRecruiting: true,
        leaderId: 'Alex',
        _links: '#',
    },
]
