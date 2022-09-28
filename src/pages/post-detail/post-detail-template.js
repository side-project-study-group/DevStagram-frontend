import React, { useState } from 'react'
import Post from '../../components/organisms/post-contents'
import styled from 'styled-components'
import BottomPopUp from '../../components/organisms/modal/bottom-pop-up'

const Main = styled.main`
    width: 100%;
    height: 100%;
    background-color: rgba(250, 250, 248, 1);
    max-width: 480px;
    margin: 0 auto;
    padding: 30px 15px 0 15px;
    box-sizing: border-box;
`

function PostDetailTemp({
    src,
    text,
    date,
    contents,
    replyCount,
    isFilledInit,
    likeCount,
}) {
    const [isOpenBottomPopUp, setIsOpenBottomPopUp] = useState(false)
    const handleBottomPopUp = () => setIsOpenBottomPopUp(!isOpenBottomPopUp)

    return (
        <Main>
            <Post
                src={src}
                text={text}
                date={date}
                contents={contents}
                replyCount={replyCount}
                isFilledInit={isFilledInit}
                likeCount={likeCount}
                handleBottomPopUp={handleBottomPopUp}
            />
            <BottomPopUp type={'post'} isOpen={isOpenBottomPopUp} />
        </Main>
    )
}

export default PostDetailTemp
