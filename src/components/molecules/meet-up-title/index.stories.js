import React from 'react'
import MeeUpTitle from '.'

export default {
    title: 'MeetUpTitle',
    component: MeeUpTitle,
}

const Template = (args) => <MeetUpTitle {...args} />

export const MeetUpTitleStory = Template.bind({})

MeetUpTitleStory.args = {
    text: '[서울] 반응형 웹 토이프로젝트 백엔드 2명 구합니다.',
}
