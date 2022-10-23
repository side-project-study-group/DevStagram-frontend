import axios from 'axios'
import React, { useEffect, useState } from 'react'

function useMeetUpDetail(id) {
    const [detail, setDetail] = useState([])
    const [status, setStatus] = useState(mockStatus)

    const uri = `http://175.45.195.94:9999/api/`
    const config = {
        headers: {
            Authorization:
                'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI2MzBmNTMwNGM2ODU3MTE5M2MxZDhiNzIiLCJleHAiOjE2NjY2NjgxODIsImlhdCI6MTY2NjQ5NTM4MiwiZW1haWwiOiJndWVzdDIyMkBnbWFpbC5jb20ifQ.rPFFnjADE82a43GsYIpFE-lyaqI_UVAPA_CaJxRoYEUvlCk8iru1NWfog71AF2M7guGlO5fj9Lw58vskXy_0EQ',
        },
    }
    useEffect(() => {
        axios(`${uri}meetup/service/getMeetUpStatus?meetUpId=${id}`, config)
            .then((res) => setStatus(res?.data?.attribute?.result))
            .catch(function (error) {
                console.log('error====>', error)
            })
        axios(`${uri}meetup/read/getOneMeetUp?meetUpId=${id}`)
            .then((res) => setDetail(res?.data?.attribute?.result))
            .catch(function (error) {
                console.log('meet-up-detail====>', error)
            })
    }, [])

    return { id, detail, status }
}

export default useMeetUpDetail

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
