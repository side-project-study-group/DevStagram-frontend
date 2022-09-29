import React, { useEffect, useState } from 'react'
import Text from '../atoms/texts/text-box'
import styled from 'styled-components'
import LikeIconCount from '../molecules/like-icon-count'
import useBoolean from '../../hooks/useBoolean'
import DateText from '../atoms/texts/date-text'
import { useNavigate } from 'react-router-dom'
import UserProfile from '../molecules/user-profile'
import axios from 'axios'
import CommentIconCount from '../molecules/comment-icon-count'

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
`

const Footer = styled.footer`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 10px;
`

function FeedPostOnly({
    id,
    userId,
    contents,
    pictureUrl,
    createDt,
    updateDt,
}) {
    const [isFilled, fillActions] = useBoolean()
    const navigate = useNavigate()
    const [{ commentCount, likeCount }, setCount] = useState({
        commentCount: 0,
        likeCount: 0,
    })

    function handleNavigate() {
        navigate(`/feed/${id}`)
    }

    useEffect(() => {
        const uri = `http://default-gateway-service--87742-11669872-9594cfbe56b3.kr.lb.naverncp.com:9999`
        let token =
            'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI2MzBmNTMwNGM2ODU3MTE5M2MxZDhiNzIiLCJleHAiOjE2NjM3NTYyMDEsImlhdCI6MTY2MzU4MzQwMSwiZW1haWwiOiJndWVzdDIyMkBnbWFpbC5jb20ifQ.2beQHnvB5iE7Cw4-fSruKX_8OLafB6a3VHAPTKXeNHwETohZHQzQFtMV-8HHRhrYTVpsM-dI5DDMVhBiKm576Q'
        const config = {
            headers: { Authorization: token },
        }
        axios(`${uri}/api/posts/comments/list/${id}`)
            .then((res) => console.log(res))
            .catch(function (error) {
                console.log('feed-post-only=====>', error)
            })
    }, [])

    return (
        <Article>
            <Header onClick={handleNavigate}>
                <Container>
                    <UserProfile size={'big'} id={userId} />
                    <DateText date={updateDt ? updateDt : createDt} />
                </Container>
            </Header>
            <Text handleClick={handleNavigate} size={'small'}>
                {contents}
            </Text>
            <Footer>
                <CommentIconCount count={commentCount} />
                <LikeIconCount
                    isFilled={isFilled}
                    handleFill={fillActions.handleToggle}
                    count={likeCount}
                />
            </Footer>
        </Article>
    )
}

export default FeedPostOnly
