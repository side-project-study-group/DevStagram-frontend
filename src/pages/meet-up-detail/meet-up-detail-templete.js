import React, { useState } from 'react'
import styled from 'styled-components'
import FooterBtn from '../../components/atoms/buttons/footer-button'
import MeetUpPostBox from '../../components/organisms/meet-up-post-box'
import BottomPopUp from '../../components/organisms/modal-pop-up-bottom'
import PopUp from '../../components/organisms/pop-up'

const Section = styled.section`
    width: 100%;
    height: 100%;
    background-color: rgba(250, 250, 248, 1);
    max-width: 480px;
    margin: 0 auto;
    padding: 10px 10px;
    box-sizing: border-box;
`

function MeetUpDetailTemp({ detail }) {
    const [isOpenPopUP, setIsOpenPopUp] = useState(false)

    return (
        <Section>
            <MeetUpPostBox data={detail} />
            <FooterBtn
                handleClick={() => setIsOpenPopUp(!isOpenPopUP)}
                text="참여하기"
            />
            {isOpenPopUP && (
                <PopUp handleCancel={() => setIsOpenPopUp(false)}>
                    <p>
                        참여하기를 누르면 단톡방으로 이동합니다.
                        <br /> 밋업에 참여하시겠습니까?
                    </p>
                </PopUp>
            )}
            <BottomPopUp />
        </Section>
    )
}

export default MeetUpDetailTemp
