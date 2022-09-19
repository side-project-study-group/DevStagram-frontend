import React from 'react'
import styled from 'styled-components'

const Section = styled.section`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    z-index: 99;
`

const Wrapper = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    max-width: 480px;
    background-color: rgba(220, 220, 220, 0.4);
    backdrop-filter: blur(2px);
    display: flex;
    justify-content: center;
`

const Container = styled.div`
    position: fixed;
    box-sizing: border-box;
    width: 100%;
    max-width: 480px;
    padding: 0 20px;
    top: 40%;
    ::before {
        background-color: rgba(250, 215, 120, 1);
        height: 30px;
        content: '';
        display: block;
        border-radius: 10px 10px 0 0;
        border: 1.5px solid rgba(65, 64, 66, 1);
        border-bottom: none;
    }
`

const Contents = styled.div`
    background-color: rgba(250, 250, 248, 1);
    border: 1.5px solid rgba(65, 64, 66, 1);
    padding: 5px 20px;
    border-radius: 0 0 10px 10px;
    text-align: center;
    font-family: 'NotoSansKrBold';
    white-space: pre;
`

const ButtonContainer = styled.div`
    width: 100%;
    display: flex;
    margin-bottom: 5px;
    justify-content: space-evenly;
    button {
        width: 120px;
        border: 1.5px solid rgba(65, 64, 66, 1);
        font-size: 17px;
        border-radius: 15px;
        padding: 5px;
        font-family: 'RobotoBold';
        cursor: pointer;
        :first-child {
            background-color: rgba(217, 217, 217, 1);
        }
        :nth-child(2) {
            background-color: rgba(75, 100, 230, 1);
            color: white;
        }
    }
`

function PopUp({ children, handleCancel }) {
    return (
        <Section>
            <Wrapper>
                <Container>
                    <Contents>
                        {children}
                        <ButtonContainer>
                            <button onClick={handleCancel}>Cancel</button>
                            <button>OK</button>
                        </ButtonContainer>
                    </Contents>
                </Container>
            </Wrapper>
        </Section>
    )
}

export default PopUp
