import axios from 'axios'
import { useEffect, useState } from 'react'

function useNavigationBar() {
    const [categories, setCategories] = useState([
        { code: 'ALL', displayName: '전체' },
    ])

    useEffect(() => {
        const uri = `http://default-gateway-service--87742-11669872-9594cfbe56b3.kr.lb.naverncp.com:9999`
        axios(`${uri}/api/meetup/read/getCategories`)
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
