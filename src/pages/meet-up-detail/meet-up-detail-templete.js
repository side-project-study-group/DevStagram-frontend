import axios from 'axios'
import React, { useEffect, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
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

function MeetUpDetailTemp({ detail, status }) {
    const [isOpenPopUP, setIsOpenPopUp] = useState(false)
    const [isBottomPopUP, setIsBottomPopUp] = useState(false)
    const textType = useMemo(
        () =>
            status === 'UNRELATED' ? `${status}_${detail.isOpenYn}` : status,
        [detail.isOpenYn, status]
    )
    const navigate = useNavigate()

    function handleClick() {
        status !== 'OWNED' && setIsOpenPopUp(!isOpenPopUP)
    }

    function handleSetting() {
        setIsBottomPopUp(!isBottomPopUP)
    }
    function handleModify() {
        navigate('/meet-up-write')
    }
    function handleDelete() {
        let token =
            'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI2MzBmNTMwNGM2ODU3MTE5M2MxZDhiNzIiLCJleHAiOjE2NjM3NTYyMDEsImlhdCI6MTY2MzU4MzQwMSwiZW1haWwiOiJndWVzdDIyMkBnbWFpbC5jb20ifQ.2beQHnvB5iE7Cw4-fSruKX_8OLafB6a3VHAPTKXeNHwETohZHQzQFtMV-8HHRhrYTVpsM-dI5DDMVhBiKm576Q'
        let meetUpId = '62dacb29f81a287e7b5bdcd7'
        axios.delete(`${uri}/api/meetup/service/delete?id=${meetUpId}`, {
            headers: { Authorization: token },
        })
    }

    return (
        <Section>
            <MeetUpPostBox data={detail} />
            {status !== 'OWNED' && (
                <FooterBtn
                    handleClick={handleClick}
                    text={textData[textType]?.footer}
                />
            )}
            {isOpenPopUP && (
                <PopUp handleCancel={() => setIsOpenPopUp(false)}>
                    <p>{textData[textType]?.popUp}</p>
                </PopUp>
            )}
            {/* <BottomPopUp /> */}
        </Section>
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
    OWNED: {
        popUp: '삭제하기를 누르면 복구할 수 없습니다.\n정말로 삭제하시겠습니까?',
    },
}
