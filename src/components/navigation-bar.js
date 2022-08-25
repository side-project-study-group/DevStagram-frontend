import React from 'react'
import styled from 'styled-components'
import MeetUpCategroyTag from './atoms/tags/meet-up-category/meet-up-category'

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    padding-bottom: 5px;
`

function NavigationBar() {
    return (
        <Container>
            <MeetUpCategroyTag text={'전체'} />
            <MeetUpCategroyTag text={'스터디'} />
            <MeetUpCategroyTag text={'프로젝트'} />
            <MeetUpCategroyTag text={'네트워킹'} />
        </Container>
    )
}

export default NavigationBar
