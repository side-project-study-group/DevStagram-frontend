import React from 'react'
import styled from 'styled-components'
import { BsPlusLg } from 'react-icons/bs'

const Wrapper = styled.div`
    width: 100%;
    max-width: 480px;
    margin: 0 auto;
`

const BtnContainer = styled.div`
    z-index: 99;
    position: fixed;
    margin-left: 380px;
    bottom: 50px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 2px solid #414042;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${(props) =>
        props.isOpenPopUp ? '#ffffff' : ' #fab923'};
    box-shadow: 2px 3px 0px rgba(0, 0, 0, 0.1);
    button {
        font-size: 25px;
        background-color: transparent;
        border: none;
        color: #414042;
        padding: 0;
        display: flex;
        align-items: center;
        transition: all 0.3s ease-in-out;
        transform: ${(props) => (props.isOpenPopUp ? 'rotate(45deg)' : 'none')};
    }
`

function PlusButton({ isOpenPopUp, handleClick }) {
    return (
        <Wrapper>
            <BtnContainer isOpenPopUp={isOpenPopUp}>
                <button onClick={handleClick}>
                    <BsPlusLg />
                </button>
            </BtnContainer>
        </Wrapper>
    )
}

export default PlusButton
