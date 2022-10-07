import React from 'react'
import styled from 'styled-components'
import EditButton from '../../atoms/buttons/edit-button'
import MeetUpTitle from '../../atoms/meet-up-title'
import MeetUpCategoryTag from '../../atoms/tags/meet-up-tag/tag'
import TextBox from '../../atoms/texts/text-box'
import MemberCount from '../../molecules/member-count'
import TimeLine from './../../atoms/texts/time-line'
import Unlock from '../../../assets/icons/Unlock.svg'
import Lock from '../../../assets/icons/Lock.svg'
import ProfileImgList from '../../molecules/profile-img-list'
import { useNavigate } from 'react-router-dom'

const Article = styled.article`
    margin-bottom: 10px;
    box-sizing: border-box;
    width: 100%;
    display: flex;
    justify-content: space-between;
    position: relative;
    background-color: rgba(255, 255, 255, 1);
    border: 1px solid rgba(65, 64, 66, 0.2);
    border-radius: 10px;
    max-width: 480px;
    padding: 10px;
`

const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Img = styled.img`
    width: 18px;
`

const Wrapper = styled.div`
    width: 100%;
`

const Footer = styled.footer`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-top: 10px;
`
const FooterSection = styled.section`
    width: 100%;
    display: flex;
    align-items: center;
`

const Container = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 10px;
`

function MeetUpPost({ data, isOwned, handleBottomPopUp }) {
    const navigate = useNavigate()
    console.log(data)
    return (
        data && (
            <Article>
                <Wrapper>
                    <Header>
                        <Container>
                            <Img src={data.isOpenYn ? Unlock : Lock} />
                            <MeetUpCategoryTag code={data?.category} />
                            <MeetUpCategoryTag code={data?.isRecruiting} />
                        </Container>
                        <TimeLine date={data?.updatedDt || data?.createdDt} />
                        {isOwned && (
                            <EditButton handleClick={handleBottomPopUp} />
                        )}
                    </Header>
                    <MeetUpTitle size={'big'}>{data.title}</MeetUpTitle>
                    <TextBox size={'big'}>{data.contents}</TextBox>
                    <Footer
                        onClick={() =>
                            navigate('/member-management', {
                                state: {
                                    memberId: data?.memberId,
                                    pendingId: data?.pendingId,
                                    leaderId: data?.leaderId,
                                    isOpenYn: data?.isOpenYn,
                                    status: isOwned,
                                },
                            })
                        }
                    >
                        <FooterSection>
                            <MemberCount
                                type={'join'}
                                maxCount={data.maxPeople}
                                count={data.memberId.length}
                            />
                            <ProfileImgList
                                leaderId={data.leaderId}
                                imgs={data.memberId}
                                size={data.maxPeople}
                            />
                        </FooterSection>
                        <MemberCount
                            type={'pending'}
                            count={data.pendingId.length}
                        />
                    </Footer>
                </Wrapper>
            </Article>
        )
    )
}

export default MeetUpPost
