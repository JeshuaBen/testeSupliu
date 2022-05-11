import axios from 'axios';

const api = axios.create({
  baseURL: 'https://tiao.supliu.com.br/api'
});

api.interceptors.request.use((config) => {
  const token = 'jeshuacostafer@gmail.com'
  config.headers = { 
    ...config.headers,
    'Authorization': token
  }
  return config
});

export default api;