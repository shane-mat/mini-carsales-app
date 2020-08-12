import axios, { AxiosResponse } from 'axios';
import { ICar } from '../features/cars/models/Car';
import { toast } from 'react-toastify';

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

axios.interceptors.response.use(undefined, error => {
    if (error.message === 'Network Error') {
        toast.error("Network error");
        return;
    }
    const { status } = error?.response;

    if (status === 500) {
        toast.error("Server error");
        return;
    }
    throw error;
});

const responseBody = (response: AxiosResponse) => response?.data;

const requests = {
    get: (url: string) => axios.get(url, { headers: { 'Access-Control-Allow-Origin': '*' } }).then(responseBody),
    post: (url: string, body: {}) => axios.post(url, body, { headers: { 'Access-Control-Allow-Origin': '*' } }).then(responseBody)
}

const Cars = {
    list: (): Promise<ICar[]> => requests.get('/car'),
    create: (car: ICar) => requests.post('/car', car)
}

export default {
    Cars
}