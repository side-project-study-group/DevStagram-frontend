import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function useMeetUpForm(state) {
    const navigate = useNavigate()

    const isValid = (form) => {
        return (
            form.category &&
            form.title &&
            form.contents &&
            form.maxPeople &&
            form.isOpenYn &&
            form.title !== '' &&
            form.contents !== '' &&
            parseInt(form.maxPeople) > 0
        )
    }

    const handleForm = (form) => {
        if (form.isOpenYn === undefined) form.isOpenYn = true
        if (isValid(form)) {
            const uri = `http://175.45.195.94:9999/api/`
            axios
                .post(`${uri}meetup/service/${state}`, form, {
                    headers: {
                        Authorization:
                            'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI2MzBmNTMwNGM2ODU3MTE5M2MxZDhiNzIiLCJleHAiOjE2NjY2NjgxODIsImlhdCI6MTY2NjQ5NTM4MiwiZW1haWwiOiJndWVzdDIyMkBnbWFpbC5jb20ifQ.rPFFnjADE82a43GsYIpFE-lyaqI_UVAPA_CaJxRoYEUvlCk8iru1NWfog71AF2M7guGlO5fj9Lw58vskXy_0EQ',
                    },
                })
                .then((res) => {
                    console.log(res)
                    navigate('/')
                })
                .catch(function (error) {
                    console.log('meet-up-write_create', error)
                })
        } else {
            alert('입력하신 내용 중 빈 내용이 있는지 확인해주세요.')
        }
    }

    return handleForm
}

export default useMeetUpForm
