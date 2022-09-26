import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const Button = styled.button`
    cursor: pointer;
    z-index: 100;
    width: 190px;
    height: 45px;
    background-color: #fad778;
    border: 1.5px solid #414042;
    font-family: 'RobotoBold';
    font-size: 20px;
    color: #414042;
    border-radius: 20px 0 0 20px;
    border: 2px solid #414042;
    display: flex;
    align-items: center;
    filter: drop-shadow(2px 3px 0px rgba(0, 0, 0, 0.4));
    img {
        margin-left: 3px;
    }
    p {
        flex: 5;
        font-weight: 600;
        text-align: left;
        margin-left: 10px;
    }
`

function CreateButton({ icon, text, path }) {
    const navigate = useNavigate()

    return (
        <Button onClick={() => navigate(path)}>
            <img src={icon} />
            <p>{text}</p>
        </Button>
    )
}

export default CreateButton
