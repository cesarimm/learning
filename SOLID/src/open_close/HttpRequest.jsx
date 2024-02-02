import axios from 'axios';

const API_BASE_URL = 'https://miapi.com/api';

///Si es necesario y en el caso de que axios llegue a tener fallas o bien se realice una actualización muy robusta, solamente sería necesario actualizarlo
///Por la función que esta comentada, de esra manera no afectamos a todos los demas lugares en los que se esta impllementtando esta función
///Ademas nos ayuda a tener una buena cohesión y acoplamiento

export const HttpRequest = async (method, url, data) => {
    const response = await axios({ method, url: `${API_BASE_URL}${url}`, data });
    return response.data;
};

// Función genérica para realizar peticiones HTTP con fetch
// export const HttpRequest = async (method, url, data) => {
//     const config = {
//         method,
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: method !== 'GET' ? JSON.stringify(data) : undefined,
//     };

//     const response = await fetch(`${API_BASE_URL}${url}`, config);
//     return await response.json();
// };
