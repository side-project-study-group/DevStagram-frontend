import { useNavigate } from 'react-router-dom'

function usePopUp(type) {
    const actionType = type?.includes('join') ? 'join' : type
    const navigate = useNavigate()

    function handleOk(body) {
        let token =
            'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI2MzBmNTMwNGM2ODU3MTE5M2MxZDhiNzIiLCJleHAiOjE2NjM3NTYyMDEsImlhdCI6MTY2MzU4MzQwMSwiZW1haWwiOiJndWVzdDIyMkBnbWFpbC5jb20ifQ.2beQHnvB5iE7Cw4-fSruKX_8OLafB6a3VHAPTKXeNHwETohZHQzQFtMV-8HHRhrYTVpsM-dI5DDMVhBiKm576Q'
        const uri = `http://default-gateway-service--87742-11669872-9594cfbe56b3.kr.lb.naverncp.com:9999`
        const config = {
            headers: { Authorization: token },
        }

        switch (actionType) {
            case 'join':
                return axios
                    .post(`${uri}/api/meetup/service/join`, body, config)
                    .then((res) => {
                        if (res.status === 200) {
                            res.data.attribute.result.memberId.includes()
                        }
                    })
            case 'withdrawl':
                return axios
                    .post(`${uri}/api/meetup/service/selfLeave`, body, config)
                    .then((res) => {
                        if (res.status === 200) {
                        }
                    })
            case 'login_yet':
                return navigate('/log-in')
            default:
                return
        }
    }

    return handleOk
}

export default usePopUp
