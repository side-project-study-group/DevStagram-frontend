import React from 'react'
import styled from 'styled-components'

const Footer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`

const Container = styled.div`
    position: fixed;
    box-sizing: border-box;
    max-width: 480px;
    bottom: 25px;
`

const Button = styled.div`
    cursor: pointer;
    width: 200px;
    height: 40px;
    line-height: 40px;
    background-color: rgba(75, 100, 230, 1);
    border-radius: 20px;
    text-align: center;
    border: 2px solid rgba(65, 64, 66, 1);
    color: #ffffff;
    font-family: 'NotoSansKRBold';
`

function FooterBtn({ text, handleClick }) {
    return (
        <Footer>
            <Container>
                <Button onClick={handleClick}>{text}</Button>
            </Container>
        </Footer>
    )
}

export default FooterBtn
