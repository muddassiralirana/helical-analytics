import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://helical-demo.herokuapp.com/api",
});

class BaseClient {
  constructor(axiosInstance, headers = {}) {
    this.headers = headers;
    this.axiosInstance = axiosInstance;
  }
  //to set headers for our requests
  setHeaders = (headers) => {
    this.headers = {
      "content-type": "application/json",
      ...headers,
    };
  };

  // creating dynamic endpoints
  async get(endpoint, params = {}, opts = {}) {
    return await this.send({
      method: "get",
      endpoint: endpoint,
      params: params,
      ...opts,
    });
  }
  async post(endpoint, payload = {}, opts = {}) {
    return await this.send({
      method: "post",
      endpoint: endpoint,
      payload: payload,
      ...opts,
    });
  }
  async put(endpoint, payload = {}, opts = {}) {
    return await this.send({
      method: "put",
      endpoint: endpoint,
      payload: payload,
      ...opts,
    });
  }
  async patch(endpoint, payload = {}, opts = {}) {
    return await this.send({
      method: "patch",
      endpoint: endpoint,
      payload: payload,
      ...opts,
    });
  }
  async delete(endpoint, payload = {}, opts = {}) {
    return await this.send({
      method: "delete",
      endpoint: endpoint,
      payload: payload,
      ...opts,
    });
  }
  async send(request) {
    const {
      method = "get",
      endpoint,
      payload = {},
      headers = {},
      params,
    } = request;
    // sending a request to api and getting response
    try {
      const response = await this.axiosInstance({
        method,
        headers: { ...this.headers, ...headers },
        params,
        url: endpoint,
        data: payload,
      });
      return response;
    } catch (error) {
      console.error({ error });
      return { error };
    }
  }
}

export const apiClient = new BaseClient(axiosInstance);
