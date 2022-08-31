import React from 'react'
import useInput from '../../hooks/useInput'
import NewPostTemplate from './new-post-template'

function NewPost() {
    const [value, handleChange] = useInput()

    function submit() {
        return
    }

    return (
        <NewPostTemplate
            src={'https://fakeimg.pl/50x50/'}
            text={'Albert Flores'}
            value={value}
            handleChange={handleChange}
            submit={submit}
        />
    )
}

export default NewPost
