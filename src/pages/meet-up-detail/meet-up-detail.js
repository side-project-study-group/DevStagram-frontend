import axios from 'axios'
import React, { useEffect, useState } from 'react'
import MeetUpDetailTemp from './meet-up-detail-templete'

function MeetUpDetail() {
    const [details, setDetails] = useState([])

    useEffect(() => {
        // axios(`api/meetup/read/getOneMeetUp?meetUpId=${meetUpId}`).then(res=>console(res.data))
    }, [])
    return <MeetUpDetailTemp />
}

export default MeetUpDetail
