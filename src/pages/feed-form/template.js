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

function FeedForm({ userId, userPicUrl, form, handleChange, handleSubmit }) {
    return (
        <Main>
            <PostForm
                userId={userId}
                userPicUrl={userPicUrl}
                form={form}
                handleChange={handleChange}
            />
            <FooterBtn handleClick={handleSubmit}>게시하기</FooterBtn>
        </Main>
    )
}

export default FeedForm
