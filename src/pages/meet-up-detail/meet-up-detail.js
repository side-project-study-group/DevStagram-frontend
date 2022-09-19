import axios from 'axios'
import React, { useEffect, useState } from 'react'
import MeetUpDetailTemp from './meet-up-detail-templete'

function MeetUpDetail() {
    const [detail, setDetail] = useState([])
    const [status, setStatus] = useState('')

    useEffect(() => {
        let meetUpId = '62d82a9366a4b30f9d9f1167'
        let token =
            'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI2MzBmNTMwNGM2ODU3MTE5M2MxZDhiNzIiLCJleHAiOjE2NjM3NTYyMDEsImlhdCI6MTY2MzU4MzQwMSwiZW1haWwiOiJndWVzdDIyMkBnbWFpbC5jb20ifQ.2beQHnvB5iE7Cw4-fSruKX_8OLafB6a3VHAPTKXeNHwETohZHQzQFtMV-8HHRhrYTVpsM-dI5DDMVhBiKm576Q'
        const uri = `http://default-gateway-service--87742-11669872-9594cfbe56b3.kr.lb.naverncp.com:9999`
        axios(`${uri}/api/meetup/read/getOneMeetUp?meetUpId=${meetUpId}`)
            .then((res) => setDetail(res.data.attribute.result))
            .catch(function (error) {
                console.log('meet-up-detail====>', error)
            })
        axios(
            `${uri}/api/meetup/service/getMeetUpStatus?meetUpId=${meetUpId}`,
            {
                headers: { Authorization: token },
            }
        ).then((res) => setStatus(res.data.attribute.result))
    }, [])

    return <MeetUpDetailTemp detail={detail} status={status} />
}
export default MeetUpDetail
