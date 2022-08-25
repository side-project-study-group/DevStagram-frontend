import React from 'react'
import H1Tag from '../../components/atoms/texts/h1-sign.js'
import H2Tag from '../../components/atoms/texts/h2-sign.js'
import H3Tag from '../../components/atoms/texts/h3-sign.js'
import SignUpCongrats from '../../components/atoms/image-containers/sign-up-congrats'
import image from '../../assets/imgs/background.png'
import FooterBtn from '../../components/atoms/buttons/footer-button'
import styled from 'styled-components'

const Wrapper = styled.div`
    background: url(${image}) no-repeat center center fixed;
    background-size: cover;
    width: 100%;
    height: 100%;
    max-width: 480px;
    margin: 0 auto;
    padding: 100px 20px 20px 20px;
    box-sizing: border-box;
`

const Container = styled.div`
    background-color: rgba(255, 255, 255, 0.9);
    width: 100%;
    height: 100%;
    margin: 0 auto;
    padding: 70px 0 10px 0;
    border-radius: 50px 50px 0px 0px;
    box-sizing: border-box;
`

const ButtonContainer = styled.div`
    position: absolute;
    left: 0;
    right: 0;
    bottom: 45px;
    margin: 0 auto;
`

function SignUpTemp() {
    return (
        <Wrapper>
            <Container>
                <H1Tag sign={'Finish'} />
                <SignUpCongrats />
                <H2Tag sign={'Devstagram에서 함께 하게 되어 반가워요!'} />
                <H3Tag
                    sign={'Devstagram에서 함께 할 개발자들을 찾으러 가볼까요?'}
                />
                <ButtonContainer>
                    <FooterBtn text={'Login'} />
                </ButtonContainer>
            </Container>
        </Wrapper>
    )
}

export default SignUpTemp
