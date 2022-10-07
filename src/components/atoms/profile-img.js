import React from 'react'
import styled from 'styled-components'
import test from '../../assets/imgs/test22.png'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 3px;
`

const ImgContainer = styled.div`
    width: ${(props) => (props.size === 'big' ? '30px' : '26px')};
    height: ${(props) => (props.size === 'big' ? '30px' : '26px')};
    margin-right: 5px;
    background-color: #d9d9d9;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
    }
`

function ProfileImg({ size, src }) {
    return (
        <Container>
            <ImgContainer size={size}>
                {src ? <img src={test} alt="profile_img" /> : null}
            </ImgContainer>
        </Container>
    )
}

export default ProfileImg
