import axios from 'axios';
import queryString from 'query-string';

const axiosClient = axios.create({
    baseURL: 'https://api.datamuse.com',
    headers: {
    "content-type": "application/json",
    },
    paramsSerializer:  {
        serializer: (params) => queryString.stringify(params)
    }
});

axiosClient.interceptors.response.use(
    (response) => {
      if (response && response?.data) {
        return response?.data;
      }
      return response;
    },
    (error) => {
      throw error;
    }
);

export default axiosClient;