import axios from 'axios'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

function useMeetUpDetailQuery() {
    const [detail, setDetail] = useState([])
    const [status, setStatus] = useState('')
    const { state } = useLocation()
    const uri = `http://175.45.195.94:9999/api`
    const config = {
        headers: {
            Authorization:
                'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI2MzBmNTMwNGM2ODU3MTE5M2MxZDhiNzIiLCJleHAiOjE2NjY3ODU0ODksImlhdCI6MTY2NjYxMjY4OSwiZW1haWwiOiJndWVzdDIyMkBnbWFpbC5jb20ifQ.NX8y0YuCOq21N9qjjLz1AtwVZXDkqEWgnoDupFuf6Z36kQ1tgv6Agf7qwNZYkxl_Sp4y0K9yhSi182qRyexcVg',
        },
    }
    useEffect(() => {
        if (state) {
            axios(
                `${uri}/meetup/service/getMeetUpStatus?meetUpId=${state.id}`,
                config
            )
                .then((res) => setStatus(res.data.attribute.result))
                .catch(function (error) {
                    console.log('error====>', error)
                })
            axios(state.api)
                .then((res) => setDetail(res?.data?.attribute?.result))
                .catch(function (error) {
                    console.log('meet-up-detail====>', error)
                })
        }
    }, [state])

    return { detail, status }
}

export default useMeetUpDetailQuery

let mockStatus = 'UNRELATED'
let mockDetail = {
    id: '631efa808b2f6d153909b243',
    category: 'STUDY',
    title: '프론트엔드 개발자 네트워킹',
    contents: '간단한 개발 관련 커피챗 해요',
    maxPeople: 5,
    memberId: [],
    pendingId: [],
    isOpenYn: true,
    isRecruiting: true,
    leaderId: '62c46903aede795d338318e1',
    createdDt: '2022-09-12T18:23:12.133',
    updatedDt: '2022-09-12T18:25:41.712',
}
