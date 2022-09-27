import React from 'react'
import FooterBtn from '../../components/atoms/buttons/footer-button'
import styled from 'styled-components'
import PostForm from '../../components/organisms/post-form'

const Main = styled.main`
    width: 100%;
    height: 100%;
    background-color: rgba(250, 250, 248, 1);
    max-width: 480px;
    margin: 0 auto;
    padding: 30px 15px 0 15px;
    box-sizing: border-box;
`

function NewPostTemplate({ src, text, value, handleChange, submit }) {
    return (
        <Main>
            <PostForm
                src={src}
                text={text}
                value={value}
                handleChange={handleChange}
            />
            <FooterBtn handleClick={submit}>게시하기</FooterBtn>
        </Main>
    )
}

export default NewPostTemplate
