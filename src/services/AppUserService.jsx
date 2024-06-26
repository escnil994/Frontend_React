import axios from 'axios';

const backend_url = 'https://backend-escnil994.herokuapp.com/api';

axios.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  response => response,
  error => {
    console.error('Error en la respuesta del servidor:', error);
    return Promise.reject(error);
  }
);

const AppContactTo = (data) => {
  const url = `${backend_url}/contact/contact-to-me`;
  return axios.post(url, data).then(res => res.data);
};


const AppGetUtils = () => {
  const url = `${backend_url}/utils/image`;
  return axios.get(url).then(res => res.data);
};


export { AppContactTo, AppGetUtils };
