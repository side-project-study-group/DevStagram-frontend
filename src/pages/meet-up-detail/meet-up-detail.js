import axios from 'axios'
import React, { useEffect, useState } from 'react'
import MeetUpDetailTemp from './meet-up-detail-templete'

function MeetUpDetail() {
    const [detail, setDetail] = useState([])

    useEffect(() => {
        let meetUpId = '62d82a9366a4b30f9d9f1167'
        const uri = `http://default-gateway-service--87742-11669872-9594cfbe56b3.kr.lb.naverncp.com:9999`
        axios(`${uri}/api/meetup/read/getOneMeetUp?meetUpId=${meetUpId}`)
            .then((res) => setDetail(res.data.attribute.result))
            .catch(function (error) {
                console.log('meet-up-detail====>', error)
            })
    }, [])

    return <MeetUpDetailTemp detail={detail} />
}
export default MeetUpDetail
