import { useState, useEffect } from 'react';
import { AxiosApiService } from './services';
// import { apiService } from './services';

function API({ apiService }) {
    const [data, setData] = useState(null);

    useEffect(() => {
        async function loadData() {
            const data = await apiService.fetchData('https://api.example.com/data');
            setData(data);
        }

        loadData();
    }, [apiService]);

    return <div>{data ? <div>{JSON.stringify(data)}</div> : <p>Loading...</p>}</div>;
}

// Inyectar la dependencia concreta en el componente más alto posible, podría ser este mismo componente o incluso más arriba.
const apiService = new AxiosApiService();
// const apiService = new FetchApiService(); // Esta línea comentada demuestra cómo cambiar la implementación fácilmente

export const AppWithDependency = () => {
    return <API apiService={apiService} />;
};
