import React from 'react'
import FooterBtn from '../../components/atoms/buttons/footer-button'
import styled from 'styled-components'
import PostForm from '../../components/organisms/post-form'

const Container = styled.div`
    height: 100%;
    padding: 10px 10px;
    max-width: 480px;
    align-items: center;
    margin: 0 auto;
`

function NewPostTemplate({ src, text, value, handleChange, submit }) {
    return (
        <Container>
            <PostForm
                src={src}
                text={text}
                value={value}
                handleChange={handleChange}
            />
            <FooterBtn handleClick={submit}>게시하기</FooterBtn>
        </Container>
    )
}

export default NewPostTemplate
