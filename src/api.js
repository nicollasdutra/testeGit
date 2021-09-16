import axios from 'axios';

const api = axios.create({
   baseURL: 'https://www.okanebox.com.br/api/acoes/hist/MGLU3/20210914/20210916/', 
});

export default api;

