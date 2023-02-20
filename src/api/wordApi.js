import axiosClient from "./axiosClient"

const wordApi = {
    getWords: (params) => {
        const url = '/words'
        return axiosClient.get(url, {params})
    }
}

export default wordApi