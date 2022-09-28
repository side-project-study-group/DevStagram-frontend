import React from 'react'
import styled from 'styled-components'
import TextAreaWithoutBorder from '../atoms/inputs/text-area-without-border'
// apache 2.0
import ProfileTag from '../molecules/user-profile'
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

function PostForm({ src, text, value, handleChange }) {
    return (
        <Section>
            <ProfileTag size={'big'} id={text} />
            <TextAreaWithoutBorder
                name={'contents'}
                value={value}
                handleChange={handleChange}
            />
            <Icon />
        </Section>
    )
}

export default PostForm
