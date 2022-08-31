import React from 'react'
import styled from 'styled-components'
import TextAreaWithoutBorder from '../atoms/inputs/text-area-without-border'
import VerticalProfile from '../molecules/vertical-profile'
// apache 2.0
import { GrGallery } from 'react-icons/gr'

const Section = styled.div`
    box-sizing: border-box;
    border: 2px solid #24231f;
    border-radius: 10px;
    max-width: 480px;
    padding: 10px;
    margin-bottom: 10px;
`

function PostForm({ src, text, value, handleChange }) {
    return (
        <Section>
            <VerticalProfile src={src} text={text} />
            <TextAreaWithoutBorder value={value} handleChange={handleChange} />
            <GrGallery size={'36px'} />
        </Section>
    )
}

export default PostForm
