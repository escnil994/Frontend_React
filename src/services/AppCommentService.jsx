import axios from 'axios';

const backend_url = 'https://backend-escnil994.herokuapp.com/api';

axios.interceptors.request.use(
  config => {
    // Puedes añadir tokens de autenticación aquí si es necesario
    // config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  error => {
    console.error('Error en la solicitud:', error);
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  response => response,
  error => {
    console.error('Error en la respuesta del servidor:', error.response ? error.response.data : error.message);
    return Promise.reject(error);
  }
);

const fetcher = url => axios.get(url).then(res => res.data);

const GetComments = async (page = 1, limit = 3) => {
  try {
    const from = (page - 1) * limit;
    const url = `${backend_url}/comment/get-comments?from=${from}&limit=${limit}`;
    return await fetcher(url);
  } catch (error) {
    console.error('Error al obtener comentarios:', error);
    throw error;
  }
};

const CreateComment = async (data) => {
  try {
    const url = `${backend_url}/comment/create-new-comment`;
    const response = await axios.post(url, data);
    return response.data;
  } catch (error) {
    console.error('Error al crear comentario:', error);
    throw error;
  }
};

export { GetComments, CreateComment };
