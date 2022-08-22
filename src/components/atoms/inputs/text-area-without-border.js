import React, {useRef} from "react";
import styled from 'styled-components'

const InputText = styled.textarea`
        border: none;
        outline: none;
        width: 100%;
        resize: none;
        overflow: hidden;
        min-height: 30px;
`;

function TextAreaWithoutBorder({ value, handleChange }) {
    const textRef = useRef();

    function onChangeHandler(e) {
     const target = e.target;
     textRef.current.style.height = "30px";
     textRef.current.style.height = `${target.scrollHeight}px`;
     handleChange(e)
    };

    return <InputText ref={textRef} placeholder={"오늘은 무슨 일이 있었나요?"} value={value} onChange={onChangeHandler} />
}

export default TextAreaWithoutBorder;