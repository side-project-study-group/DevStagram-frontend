import React from 'react'
import styled from 'styled-components'
import Input from '../atoms/inputs/input'
import Label from '../atoms/texts/label'

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: ${(props) => (props.width ? 'row' : 'column')};
    justify-content: space-between;
    margin: 15px 0;
`

function InputContainer({ name, label, width, handleChange }) {
    return (
        <Container width={width}>
            <Label label={label} />
            <Input
                name={name}
                width={width}
                type={label === '인원수' ? 'number' : 'text'}
                handleChange={handleChange}
            />
        </Container>
    )
}

export default InputContainer
