import React from 'react'
import styled from 'styled-components'

const ImgContainer = styled.div`
    width: ${(props) => (props.size === 'medium' ? '80px' : '50px')};
    border-radius: 50%;
    height: ${(props) => (props.size === 'medium' ? '80px' : '50px')};
    margin-top: ${(props) => (props.marginTop ? props.marginTop : 0)};
    border: 2px solid #414141;
    box-sizing: border-box;
`

const Img = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 50%;
`

function ProfileImg({ size, marginTop }) {
    return (
        <ImgContainer size={size} marginTop={marginTop}>
            <Img
                src="https://cdn.pixabay.com/photo/2018/02/20/20/52/people-3168830_960_720.jpg"
                alt="프로필 이미지"
            />
        </ImgContainer>
    )
}

export default ProfileImg
