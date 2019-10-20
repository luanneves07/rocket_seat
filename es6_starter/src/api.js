import axios from 'axios';

/**
 * Configura uma baseURL para o axios. Todas as requisicoes agora partem desta URL
 */
const api = axios.create({
    baseURL: "https://api.github.com",
});

export default api;