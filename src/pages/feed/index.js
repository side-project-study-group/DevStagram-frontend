import axios from 'axios'
import React, { useEffect, useState } from 'react'
import PostListTemplate from './template'

function FeedMain() {
    const [data, setData] = useState([])

    useEffect(() => {
        const uri = `http://default-gateway-service--87742-11669872-9594cfbe56b3.kr.lb.naverncp.com:9999`
        let token =
            'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI2MzBmNTMwNGM2ODU3MTE5M2MxZDhiNzIiLCJleHAiOjE2NjM3NTYyMDEsImlhdCI6MTY2MzU4MzQwMSwiZW1haWwiOiJndWVzdDIyMkBnbWFpbC5jb20ifQ.2beQHnvB5iE7Cw4-fSruKX_8OLafB6a3VHAPTKXeNHwETohZHQzQFtMV-8HHRhrYTVpsM-dI5DDMVhBiKm576Q'
        const config = { headers: { Authorization: token } }
        axios(`${uri}/api/posts/timeline?page=0&size=4`, config)
            .then((res) => console.log(res.data._embedded))
            .catch(function (error) {
                console.log('post-list======>', error)
            })
    }, [])
    return <PostListTemplate data={mock1} />
}

export default FeedMain

export const mock = [
    {
        src: 'https://fakeimg.pl/50x50/',
        text: 'Albert Flores',
        date: '2022-07-17 21:30:00',
        contents:
            'consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commode nulla facillsi',
        replyCount: 4,
        heartsCount: 12,
    },
    {
        src: 'https://fakeimg.pl/50x50/',
        text: 'Albert Flores',
        date: '2022-07-17 21:30:00',
        contents:
            'consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commode nulla facillsi',
        replyCount: 4,
        heartsCount: 12,
    },
    {
        src: 'https://fakeimg.pl/50x50/',
        text: 'Albert Flores',
        date: '2022-07-17 21:30:00',
        contents:
            'consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commode nulla facillsi',
        replyCount: 4,
        heartsCount: 12,
    },
]

let mock1 = [
    {
        id: 0,
        userId: 'dayeon',
        contents:
            'consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commode nulla facillsi',
        pictureUrl: '',
        createDt: '2022-07-17 21:30:00',
        updateDt: '',
    },
    {
        id: 1,
        userId: 'yoon',
        contents:
            'consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commode nulla facillsi',
        pictureUrl: '',
        createDt: '2022-07-17 21:30:00',
        updateDt: '2022-09-27 14:30:00',
    },
    {
        id: 2,
        userId: 'mini',
        contents:
            'consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commode nulla facillsi',
        pictureUrl: '',
        createDt: '',
        updateDt: '',
    },
    {
        id: 3,
        userId: 'emily',
        contents:
            'consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commode nulla facillsi',
        pictureUrl: '',
        createDt: '',
        updateDt: '',
    },
]
