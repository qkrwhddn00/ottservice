import axios from 'axios';

const instance = axios.create({
    baseURL : 'https://api.themoviedb.org/3',
    params  : {
        api_key : "f6931bcf8c2d8f030558a4bc49762ad1",
        language : "ko-KR"
    }
});

export default instance;