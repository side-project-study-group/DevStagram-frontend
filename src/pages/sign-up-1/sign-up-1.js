import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import SignUp1Temp from './sign-up-1-template'

function SignUp1() {
    const [value, setValue] = useState({
        email: '',
        password: '',
        confirmPassword: '',
    })

    const navigate = useNavigate()

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
