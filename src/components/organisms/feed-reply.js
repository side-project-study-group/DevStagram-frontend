import React from 'react'
import styled from 'styled-components'
import DateText from '../atoms/texts/date-text'
import LikeIconCount from '../molecules/like-icon-count'
import UserProfile from '../molecules/user-profile'
import useBoolean from '../../hooks/useBoolean'

const Li = styled.li`
    border-top: 1px solid rgba(65, 64, 66, 0.2);
    padding: 10px 0;
`
const Footer = styled.footer`
    display: flex;
    justify-content: flex-end;
    gap: 5px;
`
const Header = styled.header`
    width: 100%;
    display: flex;
    align-items: flex-end;
    gap: 10px;
`
const Comment = styled.p`
    margin: 10px 0;
    font-family: 'NotoSansKR';
    font-size: 15px;
    color: #414042;
`

function FeedReply() {
    const [isFilled, { handleToggle }] = useBoolean()
    return (
        <Li>
            <div>
                <Header>
                    <UserProfile size={'big'} id={'Savannah Nguyen'} />
                    <DateText date={'2022-10-06 11:55:00'} />
                </Header>
                <Comment size={'big'}>Cute cat:)</Comment>
                <Footer>
                    <LikeIconCount
                        isFilled={isFilled}
                        handleFill={handleToggle}
                    />
                </Footer>
            </div>
        </Li>
    )
}

export default FeedReply
