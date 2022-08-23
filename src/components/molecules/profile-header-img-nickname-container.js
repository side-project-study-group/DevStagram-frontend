import React from 'react'
import ProfileImg from '../atoms/profile-images/profile/profile-img'
import Title from '../atoms/texts/title'
import Description from '../atoms/texts/description.js'
import ProfileMiniBtns from '../../components/atoms/buttons/profile-mini-button'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    margin: 9px 0;
`
const NciknameDes = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    gap: 3px;
    margin-left: 15px;
`

function ProfileImgNicknameDesContainer({ title }) {
    return (
        <Container>
            <ProfileImg size="medium" marginTop="-40px" />
            <NciknameDes>
                <Title
                    title={title}
                    size="medium"
                    color="rgba(65, 65, 65, 0.8)"
                />
                <Description define={'룰루랄라 성장하는 개발자!'} />
            </NciknameDes>
            <ProfileMiniBtns name={'프로필 수정'} />
        </Container>
    )
}

export default ProfileImgNicknameDesContainer
