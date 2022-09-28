import axios from 'axios'
import React from 'react'
import useForm from '../../hooks/useForm'
import useInput from '../../hooks/useInput'
import NewPostTemplate from './new-post-template'

function NewPost() {
    const [value] = useInput()
    const { form, handleChange } = useForm()
    let token =
        'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI2MzBmNTMwNGM2ODU3MTE5M2MxZDhiNzIiLCJleHAiOjE2NjM3NTYyMDEsImlhdCI6MTY2MzU4MzQwMSwiZW1haWwiOiJndWVzdDIyMkBnbWFpbC5jb20ifQ.2beQHnvB5iE7Cw4-fSruKX_8OLafB6a3VHAPTKXeNHwETohZHQzQFtMV-8HHRhrYTVpsM-dI5DDMVhBiKm576Q'
    const config = { headers: { Authorization: token } }

    function handleSubmit() {
        axios
            .post(`api/posts/create`, form, config)
            .then((res) => console.log('new-post-form=====>', res))
    }

    return (
        <NewPostTemplate
            src={'https://fakeimg.pl/50x50/'}
            text={'Albert Flores'}
            value={value}
            handleChange={handleChange}
            submit={handleSubmit}
        />
    )
}

export default NewPost
