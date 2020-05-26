import axios from "axios";
import humps from "humps";
import { REQUEST_ERROR } from "@/constants/errors";

class ApiService {
  constructor(baseURL, headers) {
    this.baseURL = baseURL;
    this.headers = headers;
    this.httpService = axios.create({
      baseURL,
      timeout: 3000,
      headers
    });
  }

  async get(url) {
    try {
      const response = await this.httpService.get(url);
      if (response && response.status == 200) {
        const json = await response.json();
        response.data = humps.camelizeKeys(json || REQUEST_ERROR);
        return response.json();
      } else {
        throw new Error(REQUEST_ERROR);
      }
    } catch (error) {
      console.error(error);
      throw new Error(REQUEST_ERROR);
    }
  }

  async post(url, data) {
    try {
      const response = await this.httpService.post(url, data);
      if (response && response.status == 200) {
        const json = await response.json();
        response.data = humps.camelizeKeys(json || REQUEST_ERROR);
        return response.json();
      } else {
        throw new Error(REQUEST_ERROR);
      }
    } catch (error) {
      console.error(error);
      throw new Error(REQUEST_ERROR);
    }
  }
}

export default ApiService;
