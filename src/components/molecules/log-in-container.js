import React from 'react'
import LinkText from '../atoms/buttons/link-text'
import FooterBtn from '../atoms/buttons/footer-button'
import Description from '../atoms/texts/description'
import GoogleLogInImg from '../atoms/image-containers/google-log-in-img'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
    input {
        max-width: 380px;
    }
    padding: 10px;
    box-sizing: border-box;
`

const ConfirmSign = styled.div`
    display: flex;
    gap: 3px;
    justify-content: center;
    margin-top: 40px;
`

function LogInContainer({ handleGoogleLogin, handleAppSignup }) {
    return (
        <Container>
            <LinkText text={'Forgot Password?'} />
            <ConfirmSign>
                <Description
                    define={"Don't have an account?"}
                    color={'rgba(180, 180, 180, 1)'}
                    fontSize={'medium'}
                />
                <LinkText text={'Sign up'} handleClick={handleAppSignup} />
            </ConfirmSign>
            <Description
                define={'Or'}
                color={'rgba(180, 180, 180, 1)'}
                fontSize={'medium'}
                textAlign={'center'}
            />
            <GoogleLogInImg handleClick={handleGoogleLogin} />
            <FooterBtn type={'login'} />
        </Container>
    )
}
export default LogInContainer
