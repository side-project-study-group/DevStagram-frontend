import axios from 'axios'
import { useEffect, useState } from 'react'

function useFeedList() {
    const [data, setData] = useState([])
    const uri = `http://175.45.195.94:9999/api`
    const config = {
        headers: {
            Authorization:
                'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI2MzBmNTMwNGM2ODU3MTE5M2MxZDhiNzIiLCJleHAiOjE2NjU3MjUxODAsImlhdCI6MTY2NTU1MjM4MCwiZW1haWwiOiJndWVzdDIyMkBnbWFpbC5jb20ifQ.H_9x_tPnWAuANhdlHnrjT2cZnb77OFwckRH4M4cCokfad6evjkiY2btBaWgIqPprZ_U-9e2ZI4NP8pRuN6iOsw',
        },
    }

    useEffect(() => {
        axios(`${uri}/posts/timeline?page=0&size=4`, config)
            .then((res) => setData(res.data._embedded.postsList))
            .catch(function (error) {
                console.log('post-list======>', error)
            })
    }, [])
    return data
}

export default useFeedList
