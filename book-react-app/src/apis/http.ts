import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

const httpClient =  axios.create({
    headers: {
        'Content-Type': 'application/json'
    }
});

// Interceptors
// @ts-ignore
httpClient.interceptors.request.use((config: AxiosRequestConfig) =>{
    // Do something before request is sent
    return config;
},  (error) => {
    // Do something with request error
    return Promise.reject(error);
});

// Add a response interceptor
httpClient.interceptors.response.use(function (response: AxiosResponse) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data;
}, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
});

export default httpClient;