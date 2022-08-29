import React, { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import SignUp1Temp from './sign-up-1-template'

function SignUp1() {
    const navigate = useNavigate()
    const location = useLocation()
    console.log(location)
    const [value, setValue] = useState({
        ...location.state,
        email: '',
        password: '',
        confirmPassword: '',
    })

    const handleChange = (e) => {
        setValue({
            ...value,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        navigate('/sign-up-2', { state: value })
    }

    return (
        <SignUp1Temp
            value={value}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
        />
    )
}

export default SignUp1
