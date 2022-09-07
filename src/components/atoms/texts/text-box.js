import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    width: 100%;
    padding-right: 10px;
    margin-bottom: 5px;
`
const Container = styled.div`
    width: 100%;
    font-family: 'NotoSansKR';
    padding: 0 5px;
    box-sizing: border-box;
    font-size: 15px;
    line-height: 23px;
    white-space: pre-wrap;
`

function TextBox({ text }) {
    return (
        <Wrapper>
            <Container>{text}</Container>
        </Wrapper>
    )
}

export default TextBox
