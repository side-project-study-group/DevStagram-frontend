import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
    display: block;
    background-color: ${(props) =>
        props.isSelected
            ? 'rgba(250, 215, 120, 0.9);'
            : 'rgba(250, 215, 120, 0.3);'}
    width: 190px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 18px;
    text-align: center;
    padding: 3px 35px;
    font-size: 16px;
    border-radius: 5px;
    border: 2px solid rgba(65, 65, 65, 1);
    box-sizing: border-box;
    cursor: pointer;
`

function ProfileCategoryButton({ isSelected, name, onClick }) {
    return (
        <StyledButton isSelected={isSelected} onClick={onClick}>
            {name}
        </StyledButton>
    )
}
export default ProfileCategoryButton
