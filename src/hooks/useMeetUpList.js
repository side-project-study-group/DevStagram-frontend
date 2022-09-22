import axios from 'axios'
import { useEffect, useState } from 'react'

function useMeetUpList() {
    const [summaries, setSummaries] = useState([])
    const [category, setCategory] = useState('ALL')
    const uri = `http://default-gateway-service--87742-11669872-9594cfbe56b3.kr.lb.naverncp.com:9999`

    function filterCategory(e) {
        const { name } = e.target
        setCategory(name)
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

    return [summaries, filterCategory]
}

export default useMeetUpList
