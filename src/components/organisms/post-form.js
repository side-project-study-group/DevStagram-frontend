import React from 'react'
import styled from 'styled-components'
import TextAreaWithoutBorder from '../atoms/inputs/text-area-without-border'
// apache 2.0
import UserProfile from '../molecules/user-profile'
import { ReactComponent as AddPhoto } from '../../assets/icons/AddPhoto.svg'

const Section = styled.div`
    margin-bottom: 10px;
    padding: 20px 15px 5px;
    border: 1px solid rgba(65, 64, 66, 0.2);
    border-radius: 10px;
    background-color: #ffffff;
`
const Icon = styled(AddPhoto)`
    width: 37px;
`

function PostForm({ userId, form, userPicUrl, handleChange }) {
    return (
        <Section>
            <UserProfile size={'big'} id={userId} />
            <TextAreaWithoutBorder
                name={'contents'}
                value={form?.contents}
                handleChange={handleChange}
            />
            <Icon />
        </Section>
    )
}

export default PostForm
