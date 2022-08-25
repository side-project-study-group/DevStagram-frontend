import React, { useState } from 'react'
import NewPostTemplate from './new-post-template'

function NewPost() {
    const [value, setValue] = useState('')

    function handleChange(event) {
        setValue(event.target.value)
        console.log(event.target.value)
    }
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
