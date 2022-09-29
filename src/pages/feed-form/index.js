import axios from 'axios'
import React, { useEffect, useState } from 'react'
import useForm from '../../hooks/useForm'
import FeedFormTemplate from './template'

function FeedForm() {
    const [profileInfo, setProfileInfo] = useState({
        userId: 'dayeon',
        userPicUrl: 'https://fakeimg.pl/50x50/',
    })
    const { form, handleChange } = useForm()
    const uri = `http://default-gateway-service--87742-11669872-9594cfbe56b3.kr.lb.naverncp.com:9999`
    const props = { ...profileInfo, form, handleChange, handleSubmit }
    let token =
        'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI2MzBmNTMwNGM2ODU3MTE5M2MxZDhiNzIiLCJleHAiOjE2NjM3NTYyMDEsImlhdCI6MTY2MzU4MzQwMSwiZW1haWwiOiJndWVzdDIyMkBnbWFpbC5jb20ifQ.2beQHnvB5iE7Cw4-fSruKX_8OLafB6a3VHAPTKXeNHwETohZHQzQFtMV-8HHRhrYTVpsM-dI5DDMVhBiKm576Q'
    const config = { headers: { Authorization: token } }

    function handleSubmit() {
        axios
            .post(`${uri}/api/posts/create`, form, config)
            .then((res) => console.log('new-post-form=====>', res))
    }

    useEffect(() => {
        axios(`${uri}/api/profile/whoAmI`, config)
            .then((res) => console.log('feed-form-get-my-profile', res.data))
            .catch(function (error) {
                console.log('feed-form-get-my-profile-error===>', error)
            })
    }, [])

    return <FeedFormTemplate {...props} />
}

export default FeedForm
