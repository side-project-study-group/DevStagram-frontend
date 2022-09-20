import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function useSetting() {
    const [updateData, setUpdateData] = useState({})
    const navigate = useNavigate()

    const uri = `http://default-gateway-service--87742-11669872-9594cfbe56b3.kr.lb.naverncp.com:9999`
    let token =
        'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI2MzBmNTMwNGM2ODU3MTE5M2MxZDhiNzIiLCJleHAiOjE2NjM3NTYyMDEsImlhdCI6MTY2MzU4MzQwMSwiZW1haWwiOiJndWVzdDIyMkBnbWFpbC5jb20ifQ.2beQHnvB5iE7Cw4-fSruKX_8OLafB6a3VHAPTKXeNHwETohZHQzQFtMV-8HHRhrYTVpsM-dI5DDMVhBiKm576Q'
    const config = { headers: { Authorization: token } }

    function handleModify(body) {
        axios
            .post(`${uri}/api/meetup/service/update`, body, config)
            .then((res) => setUpdateData(res.data.attribute.result))
            .catch((error) =>
                alert(`useSetting handleModify ========> ${error}`)
            )
    }

    function handleDelete(meetUpId) {
        axios
            .delete(`${uri}/api/meetup/service/delete?id=${meetUpId}`, config)
            .then((res) =>
                res.status === 200 && res.data.code === 200
                    ? navigate('/')
                    : alert(
                          '삭제 요청을 실패하였습니다. 다시 시도해주시기 바랍니다.'
                      )
            )
            .catch((error) =>
                alert(`useSetting handleDelete ========> ${error}`)
            )
    }

    return { handleModify, handleDelete, updateData }
}

export default useSetting
