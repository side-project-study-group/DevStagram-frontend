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
        const uri = `http://175.45.195.94:9999/api`
        const config = {
            headers: {
                Authorization:
                    'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI2MzBmNTMwNGM2ODU3MTE5M2MxZDhiNzIiLCJleHAiOjE2NjUxMDQ5NTAsImlhdCI6MTY2NDkzMjE1MCwiZW1haWwiOiJndWVzdDIyMkBnbWFpbC5jb20ifQ.5AggSnpnpTTPhgxBfJcPxI29JzAqQjBdTxGWKG4XBzhpwqzuRCOwU_bFhThbEnvBBN3VzQvy5Fz4_DZ6Ep_khg',
            },
        }
        axios(`${uri}/posts/comments/list/${id}`, config)
            .then((res) => {
                let { CommentsList, commentCount } = res.data.attribute
                setCount({
                    commentCount: CommentsList?.length,
                    likeCount: commentCount,
                })
            })
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
            <TextBox handleClick={handleNavigate} size={'small'}>
                {contents}
            </TextBox>
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

export default FeedSummaryBox
