import axios from 'axios'
import { useEffect, useState } from 'react'

function useMeetUpDetail(detail, status, setIsOpenPopUp) {
    const [{ footerText, popUpText, handleOk }, setInfo] = useState({
        footerText: '',
        popUpText: '',
        handleOk: function () {},
    })
    const uri = 'http://175.45.195.94:9999/api'
    const config = {
        headers: {
            Authorization:
                'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI2MzBmNTMwNGM2ODU3MTE5M2MxZDhiNzIiLCJleHAiOjE2NjUxMDQ5NTAsImlhdCI6MTY2NDkzMjE1MCwiZW1haWwiOiJndWVzdDIyMkBnbWFpbC5jb20ifQ.5AggSnpnpTTPhgxBfJcPxI29JzAqQjBdTxGWKG4XBzhpwqzuRCOwU_bFhThbEnvBBN3VzQvy5Fz4_DZ6Ep_khg',
        },
    }
    const initBody = { meetUpId: id }
    let closeBody = {
        id: detail.id,
        category: detail.category,
        title: detail.title,
        contents: detail.contents,
        maxPeople: detail.maxPeople,
        isOpenYn: detail.isOpenYn,
        isRecruiting: false,
        leaderId: detail.leaderId,
    }

    const postMeetUp = (api, body) => {
        axios
            .post(`${uri}${api}`, body, config)
            .then((res) => setIsOpenPopUp(false))
            .catch(function (error) {
                console.log('meet-up', error)
            })
    }

    useEffect(() => {
        if (status === 'JOINED') {
            setInfo({
                footerText: '밋업 탈퇴하기',
                popUpText: `탈퇴하기를 누르면 복구할 수가 없습니다.\n정말로 탈퇴하시겠습니까?`,
                handleOk: () => postMeetUp('/meetup/service/leave', initBody),
            })
        } else if (status === 'UNRELATED') {
            setInfo({
                footerText: '참여하기',
                popUpText: `참여하기를 누르면 단톡방으로 이동합니다\n밋업에 참여하시겠습니까?`,
                handleOk: () => postMeetUp('/meetup/service/join', initBody),
            })
        } else if (status === 'OWNED') {
            if (detail.isRecruiting) {
                setInfo({
                    footerText: '마감하기',
                    popUpText: `밋업을 마감하시겠습니까?`,
                    handleOk: () =>
                        postMeetUp('/meetup/service/update', closeBody),
                })
            } else {
                setInfo({
                    footerText: '재모집하기 ',
                    popUpText: `밋업을 재모집하시겠습니까?`,
                    handleOk: () =>
                        postMeetUp('/meetup/service/update', {
                            ...closeBody,
                            isRecruiting: true,
                        }),
                })
            }
        }
    }, [status])

    return { footerText, popUpText, handleOk }
}

export default useMeetUpDetail
