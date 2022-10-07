import axios from 'axios'
import { useEffect, useState } from 'react'

function useNavigationBar() {
    const [categories, setCategories] = useState([
        { code: 'ALL', displayName: '전체' },
        ...mock,
    ])

    useEffect(() => {
        const uri = `http://175.45.195.94:9999/api`
        axios(`${uri}/meetup/read/getCategories`)
            .then((res) => {
                if (res.status === 200) {
                    setCategories([...categories, ...res.data.attribute.result])
                }
            })
            .catch(function (error) {
                console.log('Navigation bar error===>', error)
            })
    }, [])

    return [categories]
}

export default useNavigationBar

let mock = [
    {
        code: 'PROJECT',
        displayName: '프로젝트',
    },
    {
        code: 'STUDY',
        displayName: '스터디',
    },
    {
        code: 'NETWORK',
        displayName: '네트워킹',
    },
]
