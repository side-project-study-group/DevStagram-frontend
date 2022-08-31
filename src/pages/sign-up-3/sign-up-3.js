import React, { useState } from 'react'
import SignUp3Temp from './sign-up-3-template'
import { useLocation, useNavigate } from 'react-router-dom'
import useTag from '../../hooks/useTag'
import axios from 'axios'

function SignUp3() {
    const location = useLocation()
    const navigate = useNavigate()

    const [value, setValue] = useState({
        ...location.state,
        intro: '',
    })
    const [text, tags, handleTagChange, handleTagClick] = useTag()

    const handleChange = (e) => {
        setValue({
            ...value,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = () => {
        const url =
            'http://default-gateway-service--87742-11669872-9594cfbe56b3.kr.lb.naverncp.com:9999/api/auth/signUp'

        axios
            .post(url, {
                name: value.name,
                nickname: value.nickname,
                password: value.password,
                pictureUrl: null,
                description: value.intro,
                email: value.email,
                github: value.github,
                blog: value.blog,
                tags: value.tags,
                provider: 'app',
            })
            .then((res) => {
                navigate('/sign-up-finish')
            })
            .catch((error) => {
                console.log(error)
            })
    }

    return (
        <SignUp3Temp
            value={value}
            text={text}
            tags={tags}
            handleChange={handleChange}
            handleTagChange={handleTagChange}
            handleSubmit={handleSubmit}
            handleTagClick={handleTagClick}
        />
    )
}

export default SignUp3
