import React, { useState } from 'react'
import styled from 'styled-components'
import FooterBtn from '../../components/atoms/buttons/footer-button'
import MeetUpPost from '../../components/organisms/meet-up/meet-up-post'
import BottomPopUp from '../../components/organisms/modal/bottom-pop-up'
import PopUp from '../../components/organisms/modal/pop-up'
import useMeetUpBottom from '../../hooks/useMeetUpBottom'
import useMeetUpDetail from './useMeetUpDetail'

const Main = styled.main`
    width: 100%;
    height: 100%;
    background-color: rgba(250, 250, 248, 1);
    max-width: 480px;
    margin: 0 auto;
    padding: 30px 15px 0 15px;
    box-sizing: border-box;
`

function MeetUpDetailTemp({ detail, status }) {
    const [isOpenPopUP, setIsOpenPopUp] = useState(false)
    const [isBottomPopUP, setIsBottomPopUp] = useState(true)
    const popUpFunctions = useMeetUpBottom(
        'meetUp',
        setIsOpenPopUp,
        status,
        detail
    )
    const { footerText, popUpText, handleOk } = useMeetUpDetail(
        detail,
        status,
        setIsOpenPopUp
    )

    return (
        <Main>
            <MeetUpPost
                data={detail}
                isOwned={status === 'OWNED'}
                handleBottomPopUp={() => setIsBottomPopUp(!isBottomPopUP)}
            />
            {status !== 'OWNED' && (
                <FooterBtn handleClick={() => setIsOpenPopUp(!isOpenPopUP)}>
                    {footerText}
                </FooterBtn>
            )}
            {isOpenPopUP && (
                <PopUp
                    handleCancel={() => setIsOpenPopUp(false)}
                    handleOk={handleOk}
                >
                    {popUpText}
                </PopUp>
            )}
            {isBottomPopUP && (
                <BottomPopUp
                    id={detail.id}
                    type={'meetUp'}
                    popUpFunctions={popUpFunctions}
                />
            )}
        </Main>
    )
}

export default MeetUpDetailTemp
