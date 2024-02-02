import axios from 'axios';

class AxiosApiService {
    async fetchData(url) {
        const response = await axios.get(url);
        return response.data;
    }
}

class FetchApiService {
    async fetchData(url) {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    }
}
