import React, { useMemo, useState } from 'react'
import styled from 'styled-components'
import FooterBtn from '../../components/atoms/buttons/footer-button'
import MeetUpPostBox from '../../components/organisms/meet-up-post-box'
import BottomPopUp from '../../components/organisms/modal/bottom-pop-up'
import PopUp from '../../components/organisms/modal/pop-up'

const Main = styled.main`
    width: 100%;
    height: 100%;
    background-color: rgba(250, 250, 248, 1);
    max-width: 480px;
    margin: 0 auto;
    padding: 10px 10px;
    box-sizing: border-box;
`

function MeetUpDetailTemp({ detail, status }) {
    const [isOpenPopUP, setIsOpenPopUp] = useState(false)
    const [isBottomPopUP, setIsBottomPopUp] = useState(false)
    const type = useMemo(() =>
        status === 'UNRELATED'
            ? detail.isOpenYn
                ? 'join_open'
                : 'join_private'
            : ''
    )

    return (
        <Main>
            <MeetUpPostBox
                data={detail}
                isOwned={status === 'OWNED'}
                handleBottomPopUp={() => setIsBottomPopUp(!isBottomPopUP)}
            />
            {status !== 'OWNED' && (
                <FooterBtn
                    handleClick={() => setIsOpenPopUp(!isOpenPopUP)}
                    type={textData[textType]?.footer}
                />
            )}
            {isOpenPopUP && (
                <PopUp handleCancel={() => setIsOpenPopUp(false)} type={type} />
            )}
            {isBottomPopUP && <BottomPopUp id={detail.id} type={'meetUp'} />}
        </Main>
    )
}

export default MeetUpDetailTemp
