import React from 'react'
import SignUpFinishTemp from './sign-up-finish-template'
import { useNavigate } from 'react-router-dom'

function SignUpFinish() {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate('/')
    }

    return <SignUpFinishTemp handleClick={handleClick} />
}

export default SignUpFinish
