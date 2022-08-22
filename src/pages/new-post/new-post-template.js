import React from "react";
import TextareaWithoutBox from '../../components/atoms/inputs/textarea-without-border'
import VerticalProfile from "../../components/molecules/vertical-profile";
import FooterBtn from "../../components/atoms/buttons/footer-button";
// apache 2.0 
import { GrGallery } from "react-icons/gr"; 
import styled from 'styled-components';

const Container = styled.div`
    padding: 10px 10px
`
const Section = styled.div`
    box-sizing: border-box;
    width: 100%;
    position: relative;
    background-color: rgba(255, 255, 255, 1);
    border: 2px solid #24231f;
    border-radius: 10px;
    max-width: 480px;
    padding: 10px;
`

function NewPostTemplate({src, text, value, handleChange, submit}){
    
    return (
        <Container>
            <Section>
                <VerticalProfile src={src} text={text} />
                <TextareaWithoutBox value={value} handleChange={handleChange} />
                <GrGallery size={"36px"} />
            </Section>
            <FooterBtn text={"게시하기"} handleClick={submit}/>
        </Container>
    );  
}

export default NewPostTemplate;