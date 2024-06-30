import axios from 'axios';

const backend_url = 'https://backend-escnil994.herokuapp.com/api';

// Interceptores de solicitud y respuesta
axios.interceptors.request.use(
  config => {
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

// Función fetcher para obtener datos
const fetcher = url => axios.get(url).then(res => res.data);

// Obtener comentarios con paginación
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

// Crear un nuevo comentario
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

const ApproveComments = async (comment) => {
  try {
    const url = `${backend_url}/comment/autorize-comment/${comment}`;
    return await axios.put(url);

  } catch (error) {
    console.error('Error al aprobar el comentario:', error);
    throw error;
  }
}


const GetCommentByID = async (id) => {
  try {
    const url = `${backend_url}/comment/get-comments-by-id/${id}`;
    const response = await axios.get(url);

    return response.data;
  } catch (error) {
    if (error.response) {
      console.error(`Error en la respuesta del servidor: ${error.response.data}`);
      return error.response.data; // Devuelve la respuesta del backend
    } else if (error.request) {
      console.error('Error en la solicitud:', error.request);
    } else {
      console.error('Error al configurar la solicitud:', error.message);
    }
    
    return { error: 'Error desconocido al obtener comentarios' };
  }
};



export { GetComments, CreateComment, ApproveComments, GetCommentByID };
