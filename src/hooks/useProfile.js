import { useState, useEffect } from 'react'
import axios from 'axios'

function useProfile(init) {
    const [value, setValue] = useState(init)

    useEffect(() => {
        let config = {
            method: 'get',
            url: 'http://default-gateway-service--87742-11669872-9594cfbe56b3.kr.lb.naverncp.com:9999/api/user/profile/whoAmI',
            headers: {
                Authorization:
                    'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI2MzBmNTMwNGM2ODU3MTE5M2MxZDhiNzIiLCJleHAiOjE2NjM2NTcxMTcsImlhdCI6MTY2MzQ4NDMxNywiZW1haWwiOiJndWVzdDIyMkBnbWFpbC5jb20ifQ.PX5QUk9tE6cHgD-qwqqKiio0XXQMJ0MG9VCi1wQl0akPZ6FpbGiOGGx9nSIA-YnaLLCzCZNvqhpQg-TBAx_A6A',
            },
            maxRedirects: 0,
        }

        axios(config)
            .then((response) => {
                console.log(response.data.attribute.me)
                setValue(response.data.attribute.me)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])

    return [value]
}

export default useProfile
