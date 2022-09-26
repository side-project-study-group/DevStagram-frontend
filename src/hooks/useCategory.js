import axios from 'axios'
import { useEffect, useState } from 'react'

function useCategory(initMeetup) {
    const [isMeetup, setIsMeetup] = useState(initMeetup)
    const [meetups, setMeetups] = useState([])
    const [posts, setPosts] = useState([])

    const handleMeetup = (event) => {
        setIsMeetup(true)
    }
    const handlePost = (event) => {
        setIsMeetup(false)
    }

    useEffect(() => {
        let url = ''
        if (isMeetup) {
            url =
                'http://default-gateway-service--87742-11669872-9594cfbe56b3.kr.lb.naverncp.com:9999/api/posts/myFeed?page=0&size=5'

            axios
                .get(url, {
                    headers: {
                        Authorization:
                            'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI2MzBmNTMwNGM2ODU3MTE5M2MxZDhiNzIiLCJleHAiOjE2NjM3NTYyMDEsImlhdCI6MTY2MzU4MzQwMSwiZW1haWwiOiJndWVzdDIyMkBnbWFpbC5jb20ifQ.2beQHnvB5iE7Cw4-fSruKX_8OLafB6a3VHAPTKXeNHwETohZHQzQFtMV-8HHRhrYTVpsM-dI5DDMVhBiKm576Q',
                    },
                })
                .then((res) => {
                    console.log(res.data)
                    // setMeetups(res.data)
                })
                .catch((error) => {
                    console.error(error)
                })
        } else {
            url =
                'http://default-gateway-service--87742-11669872-9594cfbe56b3.kr.lb.naverncp.com:9999/api/meetup/service/getMyMeetUp?page=0&size=5'

            axios
                .get(url, {
                    headers: {
                        Authorization:
                            'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI2MzBmNTMwNGM2ODU3MTE5M2MxZDhiNzIiLCJleHAiOjE2NjM3NTYyMDEsImlhdCI6MTY2MzU4MzQwMSwiZW1haWwiOiJndWVzdDIyMkBnbWFpbC5jb20ifQ.2beQHnvB5iE7Cw4-fSruKX_8OLafB6a3VHAPTKXeNHwETohZHQzQFtMV-8HHRhrYTVpsM-dI5DDMVhBiKm576Q',
                    },
                })
                .then((res) => {
                    console.log(res.data)
                    // setPosts(res.data)
                })
                .catch((error) => {
                    console.error(error)
                })
        }
    }, [isMeetup])

    return [isMeetup, handleMeetup, handlePost, meetups, posts]
}

export default useCategory
