import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import Home from '../../../assets/icons/Home.svg'
import TimeLine from '../../../assets/icons/TimeLine.svg'
import Profile from '../../../assets/icons/Profile.svg'
import Chat from '../../../assets/icons/Chat.svg'

const Container = styled.div`
    background-color: #fcfcfa;
    width: 100%;
    height: 50px;
    max-width: 480px;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    border-bottom: 2px solid #24231f;
    box-sizing: border-box;
`

const Img = styled.img`
    cursor: pointer;
    width: 30px;
`

function HeaderHome() {
    const navigate = useNavigate()
    const token = '11'
    return (
        <Container>
            <Img src={Home} onClick={() => navigate('/')} />
            <Img src={TimeLine} />
            {token && (
                <>
                    <Img
                        src={Chat}
                        onClick={() => navigate('/meet-up-chat-list')}
                    />
                    <Img
                        src={Profile}
                        onClick={() => navigate('/my-profile-post')}
                    />
                </>
            )}
        </Container>
    )
}

export default HeaderHome
