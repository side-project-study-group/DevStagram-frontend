import React, { useMemo, useState } from 'react'
import styled from 'styled-components'
import FooterBtn from '../../components/atoms/buttons/footer-button'
import MeetUpPostBox from '../../components/organisms/meet-up-post-box'
import BottomPopUp from '../../components/organisms/modal-pop-up-bottom'
import PopUp from '../../components/organisms/pop-up'

const Main = styled.main`
    width: 100%;
    height: 100%;
    background-color: rgba(250, 250, 248, 1);
    max-width: 480px;
    margin: 0 auto;
    padding: 10px 10px;
    box-sizing: border-box;
`

function MeetUpDetailTemp({
    detail,
    status,
    handleModify,
    handleDelete,
    handleJoin,
    handleWithdraw,
}) {
    const [isOpenPopUP, setIsOpenPopUp] = useState(false)
    const [isBottomPopUP, setIsBottomPopUp] = useState(false)
    const textType = useMemo(
        () =>
            status === 'UNRELATED' ? `${status}_${detail.isOpenYn}` : status,
        [detail.isOpenYn, status]
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
                    text={textData[textType]?.footer}
                />
            )}
            {isOpenPopUP && (
                <PopUp
                    handleOk={status === 'JOINED' ? handleWithdraw : handleJoin}
                    handleCancel={() => setIsOpenPopUp(false)}
                >
                    <p>{textData[textType]?.popUp}</p>
                </PopUp>
            )}
            {isBottomPopUP && (
                <BottomPopUp
                    handleModify={handleModify}
                    handleDelete={handleDelete}
                />
            )}
        </Main>
    )
}

export default MeetUpDetailTemp

const textData = {
    UNRELATED_true: {
        footer: '참여하기',
        popUp: '참여하기를 누르면 단톡방으로 이동합니다.\n밋업에 참여하시겠습니까?',
    },
    UNRELATED_false: {
        footer: '참여하기',
        popUp: '프라이빗 밋업은 리더의 승인 이후에 참여가능합니다. 참여하시겠습니까?',
    },
    JOINED: {
        footer: '탈퇴하기',
    },
    OWNED: {
        popUp: '삭제하기를 누르면 복구할 수 없습니다.\n정말로 삭제하시겠습니까?',
    },
}
