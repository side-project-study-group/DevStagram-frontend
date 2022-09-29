import React, { useState } from 'react'
import styled from 'styled-components'
import FooterBtn from '../../components/atoms/buttons/footer-button'
import MeetUpChatBox from '../../components/organisms/meet-up-chat-box'
import PopUp from '../../components/organisms/modal/pop-up'

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
    const [state, setState] = useState('')

    function handleModify() {
        setState('delete')
    }

    function handleDelete() {
        setState('popup')
    }

    return (
        <Section>
            <Ul>
                <MeetUpChatBox state={state} />
                <MeetUpChatBox state={state} />
                <MeetUpChatBox state={state} />
                <MeetUpChatBox state={state} />
                <MeetUpChatBox state={state} />
                {state === 'popup' && (
                    <PopUp
                        handleCancel={() => setState('')}
                        type={'delete_meetUp'}
                    >
                        삭제하기를 누르면 복구할 수 없습니다.
                        <br />
                        정말로 삭제하시겠습니까?
                    </PopUp>
                )}
                <FooterBtn
                    handleClick={
                        state !== 'delete' ? handleModify : handleDelete
                    }
                >
                    test
                </FooterBtn>
            </Ul>
        </Section>
    )
}

export default MeetUpChatListTemp
