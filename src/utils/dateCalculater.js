// input 날짜와 현재 날짜를 비교하여
// 8일 전, 1시간 전 등으로 반환한다.
export default function dateCalculater(inputDate) {
    let now = new Date()
    let date = new Date(inputDate)
    let minus
    if (now.getFullYear() > date.getFullYear()) {
        minus = now.getFullYear() - date.getFullYear()
        return minus + '년 전'
    } else if (now.getMonth() > date.getMonth()) {
        minus = now.getMonth() - date.getMonth()
        return minus + '달 전'
    } else if (now.getDate() > date.getDate()) {
        minus = now.getDate() - date.getDate()
        return minus + '일 전'
    } else if (now.getDate() == date.getDate()) {
        let nowTime = now.getTime()
        let date = date.getTime()
        if (nowTime > date) {
            let sec = parseInt(nowTime - date) / 1000
            let day = parseInt(sec / 60 / 60 / 24)
            sec = sec - day * 60 * 60 * 24
            let hour = parseInt(sec / 60 / 60)
            sec = sec - hour * 60 * 60
            let min = parseInt(sec / 60)
            sec = parseInt(sec - min * 60)
            if (hour > 0) {
                return hour + '시간 전'
            } else if (min > 0) {
                return min + '분 전'
            } else if (sec > 0) {
                return sec + '초 전'
            }
        }
    }
}
