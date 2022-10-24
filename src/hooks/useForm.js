import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

function useForm() {
    const initForm = {
        category: '',
        title: '',
        contents: '',
        maxPeople: 0,
        isOpenYn: true,
    }
    const [form, setForm] = useState(initForm)
    const location = useLocation()
    const [state, setState] = useState('create')
    const handleChange = (e) => {
        const { name, value: inputValue } = e.target
        setForm({ ...form, [name]: inputValue.replace(/^\s/, '') })
    }
    const handleSubmit = (e) => e.preventDefault()

    useEffect(() => {
        if (location.state) {
            setState('update')
            const { data } = location.state
            setForm({
                category: data.category,
                title: data.title,
                contents: data.contents,
                maxPeople: data.maxPeople,
                isOpenYn: data.isOpenYn,
            })
        }
    }, [])

    return { form, state, handleChange, handleSubmit }
}

export default useForm
