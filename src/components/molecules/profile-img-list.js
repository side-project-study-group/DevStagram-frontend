import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import LeaderProfileImg from '../atoms/leader-profile'
import ProfileImg from '../atoms/profile-img'

const Container = styled.div`
    display: flex;
    flex-direction: column;
`
const Section = styled.section`
    display: flex;
    align-items: flex-end;
`

function ProfileImgList({ leaderId, imgs, size }) {
    const [emptyList, setEmptyList] = useState()

    useEffect(() => {
        let arr = new Array(size - imgs?.length - 1).fill('')
        setEmptyList(arr)
    }, [imgs])

    return (
        <Container>
            <Section>
                <LeaderProfileImg size={'small'} />
                {imgs?.map((id, i) => (
                    <ProfileImg key={i} size="small" src={id} />
                ))}
                {emptyList?.map((id, i) => (
                    <ProfileImg key={i} size="small" src={id} />
                ))}
            </Section>
        </Container>
    )
}

export default ProfileImgList
