import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
    display: block;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 10px;
    line-height: 11.72px;
    text-align: center;
    background-color: white;
    color: #414042;
    width: 60px;
    height: 20px;
    padding: 5px;
    border-radius: 15px;
    border: 1.5px solid #414042;
    cursor: pointer;
`

function ProfileMiniButton({ name, onClick }) {
    return <Button onClick={onClick}>{name}</Button>
}
export default ProfileMiniButton
