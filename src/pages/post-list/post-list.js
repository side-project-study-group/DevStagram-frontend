import axios from 'axios'
import React, { useEffect, useState } from 'react'
import PostListTemplate from './post-list-template'

function PostList() {
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
    return <PostListTemplate posts={mock} />
}

export default PostList

export const mock = [
    {
        src: 'https://fakeimg.pl/50x50/',
        text: 'Albert Flores',
        date: '2022-07-17 21:30:00',
        contents:
            'consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commode nulla facillsi',
        replyCount: 4,
        likeCount: 12,
    },
    {
        src: 'https://fakeimg.pl/50x50/',
        text: 'Albert Flores',
        date: '2022-07-17 21:30:00',
        contents:
            'consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commode nulla facillsi',
        replyCount: 4,
        likeCount: 12,
    },
    {
        src: 'https://fakeimg.pl/50x50/',
        text: 'Albert Flores',
        date: '2022-07-17 21:30:00',
        contents:
            'consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commode nulla facillsi',
        replyCount: 4,
        likeCount: 12,
    },
]
