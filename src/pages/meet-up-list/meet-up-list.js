import React from 'react';
import MeetUpListTemp from './meet-up-list-template';

function MeetUpList() {
  return <MeetUpListTemp />;
}

export default MeetUpList;

let mockData = [
  {
    tag: '프로젝트',
    status: '모집중',
    region: '서울',
    title: '반응형 웹 토이프로젝트 프론트엔드 2명 모집',
    type: 'private',
    memberTotalNum: 4,
    memberNowNum: 2,
    accountNm: 'abba',
  },
  {
    tag: '네트워킹',
    status: '마감',
    region: '판교',
    title: '판교에 계시는 분, 커피 한잔 해요~',
    type: 'public',
    memberTotalNum: 6,
    memberNowNum: 2,
    accountNm: 'yellow',
  },
  {
    tag: '스터디',
    status: '모집중',
    region: '강남',
    title: 'Effective Java 완독 함께해요',
    type: 'private',
    memberTotalNum: 5,
    memberNowNum: 1,
    accountNm: 'coffeern',
  },
  {
    tag: '프로젝트',
    status: '모집중',
    region: '부산',
    title: '인스타그램 클론 프로젝트 같이하실 분',
    type: 'private',
    memberTotalNum: 4,
    memberNowNum: 0,
    accountNm: 'ssanay',
  },
];
