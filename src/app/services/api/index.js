import axios from "axios";
import { config } from '@/config'

axios.defaults.validateStatus = () => true;
const urlBase = config.SERVER;

export const getResponse = async (url, options = {}) => {
  try {
    await getToken();
    const response = await axios.get(
      `${urlBase}${url}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      });
    return response;
  } catch (error) {
    return error;
  }
};

export const postResponse = async (url, data) => {
  try {
    await getToken();
    const response = await axios.post(`${urlBase}${url}`, data);
    return response;
  } catch (error) {
    return error;
  }
};

const getToken = async () =>{
  axios.interceptors.request.use((config) => {
    const token = localStorage.getItem('token')
    if(token){
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  })
} 
