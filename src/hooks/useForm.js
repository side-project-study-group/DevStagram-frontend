import { useState } from 'react'

function useForm() {
    const [form, setForm] = useState({})

    const handleChange = (e) => {
        const { name, value } = e.target
        setForm({ ...form, [name]: value })
    }

    const handleSubmit = (e) => e.preventDefault()

    return { form, handleChange, handleSubmit }
}

export default useForm
