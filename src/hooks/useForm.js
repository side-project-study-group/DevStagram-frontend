import { useState } from 'react'

function useForm() {
    const [form, setForm] = useState({})

    const handleChange = (e) => {
        const { name, value } = e.target
        if (name === 'isOpenYn') {
            setForm({ ...form, [name]: value === '오픈밋업' })
        } else {
            setForm({ ...form, [name]: value })
        }
    }

    const handleSubmit = (e) => e.preventDefault()

    return { form, handleChange, handleSubmit }
}

export default useForm
