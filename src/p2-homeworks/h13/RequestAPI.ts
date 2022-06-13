import axios from "axios";

export const RequestAPI = {
    testPost(body:any) {
        return axios.post('https://neko-cafe-back.herokuapp.com/auth/test',body)
    }
}