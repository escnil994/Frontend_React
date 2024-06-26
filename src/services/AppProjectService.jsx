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

const fetcher = url => axios.get(url).then(res => res.data);

const getProjects = (page = 1, limit = 3) => {
  const from = (page - 1) * limit;
  const url = `${backend_url}/project/get-projects?from=${from}&limit=${limit}`;
  return fetcher(url);
};



const getProjectDetail = (id) => {
  const url = `${backend_url}/project/get-project/${id}`;
  return fetcher(url);
};

export { getProjects, getProjectDetail};
