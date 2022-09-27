import React from 'react'
import LogInTemp from './log-in-template'
import { useNavigate } from 'react-router-dom'

function LogIn() {
    const navigate = useNavigate()

    const handleGoogleLogin = () => {
        navigate('/sign-up-1', { state: { provider: 'google' } })
    }

    const handleAppSignup = () => {
        navigate('/sign-up-1', { state: { provider: 'app' } })
    }

    return (
        <LogInTemp
            handleAppSignup={handleAppSignup}
            handleGoogleLogin={handleGoogleLogin}
        />
    )
}

export default LogIn
