import { useState } from 'react'

function useBoolean(init) {
    const [value, setValue] = useState(init)

    const handleTrue = () => {
        setValue(true)
    }
    const handleFalse = () => {
        setValue(false)
    }
    const handleToggle = () => {
        setValue(!value)
    }

    return [value, { handleTrue, handleFalse, handleToggle }]
}

export default useBoolean
