import React from 'react'
import Input from '../../components/atoms/inputs/input.js'
import H1Tag from '../../components/atoms/texts/h1-sign.js'
import LogInContainer from '../../components/molecules/log-in-container'
import image from '../../assets/imgs/background.png'
import styled from 'styled-components'

const Wrapper = styled.div`
    background: url(${image}) no-repeat center center fixed;
    background-size: cover;
    width: 100%;
    height: 100%;
    max-width: 480px;
    margin: 0 auto;
    padding: 150px 20px 20px 20px;
    box-sizing: border-box;
`

const Container = styled.div`
    background-color: rgba(255, 255, 255, 0.9);
    width: 100%;
    height: 100%;
    margin: 0 auto;
    padding: 130px 0 10px 0;
    border-radius: 50px 50px 0px 0px;
    box-sizing: border-box;
`

const InpuContainer = styled.div`
    width: 100%;
    margin: 0 auto;
    padding: 10px;
    display: flex;
    flex-direction: column;
    gap: 40px;
    box-sizing: border-box;
`

function LogInTemp({ handleGoogleLogin, handleAppSignup }) {
    return (
        <>
            <Wrapper>
                <Container>
                    <InpuContainer>
                        <H1Tag sign={'Log in'} />
                        <Input placeholder={'E-mail'} />
                        <Input placeholder={'Password'} />
                    </InpuContainer>
                    <LogInContainer
                        handleGoogleLogin={handleGoogleLogin}
                        handleAppSignup={handleAppSignup}
                    />
                </Container>
            </Wrapper>
        </>
    )
}

export default LogInTemp
