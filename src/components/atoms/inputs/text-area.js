import React from 'react'
import styled from 'styled-components'

const TextAreaTag = styled.textarea`
    resize: none;
    height: 150px;
    border: 2px solid rgba(65, 64, 66, 1);
    padding: 5px;
    font-family: 'NotoSansKR';
    border-radius: 5px;
`

function TextArea({ name, handleChange, value }) {
    return (
        <TextAreaTag
            name={name}
            onChange={handleChange}
            placeholder="내용을 입력해주세요."
            value={value}
        />
    )
}

export default TextArea
