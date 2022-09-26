import axios from 'axios'
import { useState, useEffect } from 'react'

export default useComment = (postId) => {
    const [comments, setComments] = useState()

    useEffect(() => {
        axios
            .get({
                url: '/comments/list/' + postId,
            })
            .then((res) => {
                setComments(res.data)
            })
            .catch((err) => {
                console.error(err)
            })
    }, [])

    const handleUpdate = () => {
        axios
            .put({
                url: '',
                data: {
                    conntens: '',
                },
            })
            .then((res) => {
                updateComment = res.data.map((ele) => {
                    if (ele.id === postId) {
                        return ele.id
                    }
                })
                setComments(updateComment)
            })
            .catch((err) => {
                console.error(err)
            })
    }

    const handleSubmit = () => {
        axios
            .post({
                url: '' + postId,
                data: {},
            })
            .then((res) => {
                setComments([...comments, res.data])
            })
            .catch((err) => {
                console.error(err)
            })
    }

    const handleDelete = () => {
        axios
            .delete({
                url: '',
                headers: '',
            })
            .then((res) => {
                setComments(
                    res.data.filter((ele) => {
                        return ele.id === postId
                    })
                )
            })
            .catch((err) => {
                console.error(err)
            })
    }

    return [comments, setComments]
}
