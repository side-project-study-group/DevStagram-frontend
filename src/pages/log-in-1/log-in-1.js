import React from 'react'
import LogInTemp1 from './log-in-1-template'
import { useNavigate } from 'react-router-dom'

function LogIn1() {
    const navigate = useNavigate()

    const handleGoogleLogin = () => {
        navigate('/sign-up-1', { state: { provider: 'google' } })
    }

    const handleAppSignup = () => {
        navigate('/sign-up-1', { state: { provider: 'app' } })
    }

    return (
        <LogInTemp1
            handleAppSignup={handleAppSignup}
            handleGoogleLogin={handleGoogleLogin}
        />
    )
}

export default LogIn1
