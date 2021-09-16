import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:50019/api/PORTAL', 
 });
 
 export default api;
 