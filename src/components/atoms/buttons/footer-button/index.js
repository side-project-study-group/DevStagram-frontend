import React from 'react'
import styled from 'styled-components'
import { textData } from './button-text'

const Footer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`

const Container = styled.div`
    position: absolute;
    box-sizing: border-box;
    max-width: 480px;
    bottom: 40px;
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
    font-family: 'NotoSansKR';
    font-size: 16px;
    font-weight: 700;
`

function FooterBtn({ children, handleClick }) {
    return (
        <Footer>
            <Container>
                <Button type="button" onClick={handleClick}>
                    {children}
                </Button>
            </Container>
        </Footer>
    )
}

export default FooterBtn
