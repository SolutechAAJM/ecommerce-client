import axios from "axios";
import { config } from "../../../config";

axios.defaults.validateStatus = () => true;
const urlBase=config.urlBase;

export const getResponse = async (url) =>{
    try {
        const response = await axios.get(`${urlBase}${url}`);
        return response;
      } catch (error) {
        return error;
      }
}

export const postResponse = async (url, data) => {
    try {
      const response = await axios.post(`${urlBase}${url}`, data);
      return response;
    } catch (error) {
      return error;
    }
  };