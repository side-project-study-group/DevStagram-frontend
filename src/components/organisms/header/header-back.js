import React from 'react'
import styled from 'styled-components'
import Back from '../../../assets/icons/Back.svg'
import Control from '../../../assets/icons/Control.svg'
import { useNavigate } from 'react-router-dom'

const Container = styled.div`
    background-color: #fcfcfa;
    width: 100%;
    height: 50px;
    max-width: 480px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    border-bottom: 2px solid #24231f;
    padding: 0 30px;
    box-sizing: border-box;
    .icon_back,
    .icon_control {
        font-size: 35px;
        margin: auto 0;
    }
    .icon_back {
        transform: rotate(-90deg);
        fill: rgba(250, 215, 120, 1);
        color: rgba(65, 64, 66, 1);
    }
`

const Img = styled.img`
    width: 30px;
    cursor: pointer;
`

const ImgBack = styled.img`
    width: 26px;
    cursor: pointer;
`

function HeaderBack() {
    const navigate = useNavigate()

    return (
        <Container>
            <ImgBack src={Back} onClick={() => navigate(-1)} />
            <Img src={Control} />
        </Container>
    )
}

export default HeaderBack
