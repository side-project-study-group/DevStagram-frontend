import React from 'react'
import styled from 'styled-components'
import Label from '../atoms/texts/label'
import Select from '../atoms/inputs/select'

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: ${(props) => (props.width ? 'row' : 'column')};
    justify-content: space-between;
    margin: 15px 0;
`

function SelectContainer({ label, options, width, handleChange }) {
    return (
        <Container width={width}>
            <Label label={label} />
            <Select
                options={options}
                width={width}
                name={label}
                handleChange={handleChange}
            />
        </Container>
    )
}

export default SelectContainer
