import axios from 'axios'
import React, { useEffect, useState } from 'react'
import MeetUpListTemp from './meet-up-list-template'

function MeetUpList() {
    const [category, setCategory] = useState('ALL')
    const [summaries, setSummaries] = useState([])
    const uri = `http://default-gateway-service--87742-11669872-9594cfbe56b3.kr.lb.naverncp.com:9999`

    const selectCategory = (e) => {
        const { name } = e.target
        setCategory(category)
    }

    useEffect(() => {
        axios(
            `${uri}/api/meetup/read/getMeetUpSummaries/${category}?page=0&size=4`
        )
            .then((res) => {
                if (res.status === 200) {
                    setSummaries(res.data._embedded.meetUpSummaryDtoList)
                }
            })
            .catch(function (error) {
                console.log('Meet Up List Error====>', error)
            })
    }, [category])

    return <MeetUpListTemp summaries={summaries} />
}

export default MeetUpList
