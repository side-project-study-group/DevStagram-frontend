import React from 'react'
import styled from 'styled-components'
import SettingIcon from '../../../assets/icons/SettingIcon.svg'

const EditBtn = styled.button`
    background-color: transparent;
    border: none;
    padding: 0;
    img {
        width: 25px;
        height: 20px;
        margin: 0;
    }
`

function EditButton({ handleClick }) {
    return (
        <EditBtn onClick={handleClick}>
            <img src={SettingIcon} />
        </EditBtn>
    )
}

export default EditButton
