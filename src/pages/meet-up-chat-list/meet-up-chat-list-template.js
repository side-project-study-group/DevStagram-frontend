import React from 'react'
import styled from 'styled-components'
import FooterBtn from '../../components/atoms/footer-button'
import MeetUpChatBox from '../../components/organisms/meet-up-chat-box'
import PopUp from '../../components/organisms/pop-up'

const Section = styled.section`
    width: 100%;
    margin: 0 auto;
    max-width: 480px;
    background-color: rgba(250, 250, 248, 1);
`

const Ul = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
`

function MeetUpChatListTemp() {
    return (
        <Section>
            <Ul>
                <MeetUpChatBox />
                <MeetUpChatBox />
                <MeetUpChatBox />
                <MeetUpChatBox />
                <MeetUpChatBox />
                {/* <PopUp /> */}
                <FooterBtn text={'수정하기'} />
            </Ul>
        </Section>
    )
}

export default MeetUpChatListTemp
