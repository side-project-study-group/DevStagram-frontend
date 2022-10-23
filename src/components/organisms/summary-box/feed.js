import React, { useEffect, useState } from 'react'
import TextBox from '../../atoms/texts/text-box'
import styled from 'styled-components'
import LikeIconCount from '../../molecules/like-icon-count'
import useBoolean from '../../../hooks/useBoolean'
import DateText from '../../atoms/texts/date-text'
import { useNavigate } from 'react-router-dom'
import UserProfile from '../../molecules/user-profile'
import axios from 'axios'
import CommentIconCount from '../../molecules/comment-icon-count'
import useToggleLike from '../../../hooks/useToggleLike'
import Carousel from '../../molecules/Carousel'

const Article = styled.article`
    margin-bottom: 10px;
    padding: 15px 10px 10px;
    border: 1px solid rgba(65, 64, 66, 0.2);
    border-radius: 10px;
    background-color: #ffffff;
    /* box-shadow: 1px 1px 3px rgba(65, 64, 66, 0.2);  */
`

const Container = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    align-items: flex-end;
`
const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 10px;
`

const Footer = styled.footer`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 10px;
    margin-top: 10px;
`

function FeedSummaryBox({
    id,
    userId,
    contents,
    pictureUrl,
    heartsCount,
    createDt,
    updateDt,
    refState,
    setTarget,
}) {
    const [isFilled, fillActions] = useBoolean()
    const [likeCount, setLikeCount] = useState(heartsCount?.length)
    const handleLike = useToggleLike(fillActions.handleToggle, setLikeCount)
    const navigate = useNavigate()
    const [commentCount, setCommentCount] = useState(0)

    function handleNavigate() {
        navigate(`/feed/${id}`)
    }

    useEffect(() => {
        const uri = `http://175.45.195.94:9999/api`
        const config = {
            headers: {
                Authorization:
                    'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI2MzBmNTMwNGM2ODU3MTE5M2MxZDhiNzIiLCJleHAiOjE2NjY2NjgxODIsImlhdCI6MTY2NjQ5NTM4MiwiZW1haWwiOiJndWVzdDIyMkBnbWFpbC5jb20ifQ.rPFFnjADE82a43GsYIpFE-lyaqI_UVAPA_CaJxRoYEUvlCk8iru1NWfog71AF2M7guGlO5fj9Lw58vskXy_0EQ',
            },
        }
        axios(`${uri}/posts/comments/list/${id}`, config)
            .then((res) => {
                let { CommentsList, commentCount } = res.data.attribute
                setCommentCount(commentCount)
            })
            .catch(function (error) {
                console.log('feed-post-only=====>', error)
            })
    }, [])

    return (
        <Article ref={refState ? setTarget : null}>
            <Header onClick={handleNavigate}>
                <Container>
                    <UserProfile size={'big'} id={userId} />
                    <DateText date={updateDt ? updateDt : createDt} />
                </Container>
            </Header>
            <TextBox
                handleClick={handleNavigate}
                size={'small'}
                text={contents}
            />
            <Carousel />
            <Footer>
                <CommentIconCount count={commentCount} />
                <LikeIconCount
                    isFilled={isFilled}
                    handleFill={handleLike}
                    count={likeCount}
                />
            </Footer>
        </Article>
    )
}

export default FeedSummaryBox
