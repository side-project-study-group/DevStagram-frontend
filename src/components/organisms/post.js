import React from 'react'
import Text from '../../components/atoms/texts/text'
import styled from 'styled-components'
import ChatIconCount from '../../components/molecules/chat-icon-count'
import LikeIconCount from '../../components/molecules/like-icon-count'
import useBoolean from '../../hooks/useBoolean'
import ProfileTag from '../molecules/profile-tag'
import DateText from '../atoms/texts/date-text'
import { useNavigate } from 'react-router-dom'
import SettingIcon from '../../assets/icons/SettingIcon.svg'

const Article = styled.article`
    margin-bottom: 10px;
    padding: 20px 15px 10px;
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
const Footer = styled.footer`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 10px;
`

function Post({
    src,
    text,
    date,
    contents,
    replyCount,
    likeCount,
    handleBottomPopUp,
}) {
    const [isFilled, fillActions] = useBoolean()
    const navigate = useNavigate()

    return (
        <Article onClick={() => navigate('/post-detail')}>
            <Header>
                <Container>
                    <ProfileTag size={'big'} id={text} />
                    <DateText date={date} />
                </Container>
                <EditBtn>
                    <img src={SettingIcon} onClick={handleBottomPopUp} />
                </EditBtn>
            </Header>
            <Text size={'medium'}>
                consectetur adipiscing elit duis tristique sollicitudin nibh sit
                amet commodo nulla facilisi f
            </Text>
            <Footer>
                <ChatIconCount count={replyCount} />
                <LikeIconCount
                    isFilled={isFilled}
                    handleFill={fillActions.handleToggle}
                    count={likeCount}
                />
            </Footer>
        </Article>
    )
}

export default Post
