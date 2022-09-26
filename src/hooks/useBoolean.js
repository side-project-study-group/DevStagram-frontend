import { useState } from 'react'

function useBoolean() {
    const [value, setValue] = useState(false)

    const handleTrue = () => {
        setValue(true)
    }
    const handleFalse = () => {
        setValue(false)
    }
    const handleToggle = (init) => {
        setValue(!init)
    }

    return [value, { handleTrue, handleFalse, handleToggle }]
}

export default useBoolean
