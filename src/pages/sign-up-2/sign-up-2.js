import React, { useState } from 'react'
import SignUp2Temp from './sign-up-2-template'
import { useLocation, useNavigate } from 'react-router-dom'

function SignUp2() {
    const navigate = useNavigate()
    const location = useLocation()

    const [value, setValue] = useState({
        ...location.state,
        name: '',
        nickname: '',
        github: '',
        blog: '',
    })

    const handleChange = (e) => {
        setValue({
            ...value,
            [e.target.name]: e.target.value,
        })
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        navigate('/sign-up-3', { state: value })
    }

    return (
        <SignUp2Temp
            value={value}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
        />
    )
}

export default SignUp2
