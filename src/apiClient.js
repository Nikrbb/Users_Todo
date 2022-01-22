import Axios from 'axios';

const options = {
  baseURL: process.env.VUE_APP_API,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json; charset=utf-8',
  }
};

const httpClient = Axios.create(options);

httpClient.interceptors.request.use(config => config);

httpClient.interceptors.response.use(response => response, error => error)

const ApiClient = {
  get(url, conf = {}) {
    return httpClient.get(url, conf)
  },

  put(url, data = {}, conf = {}) {
    return httpClient.put(url, data, conf)
  },

  delete(url, data = {}, conf = {}) {
    return httpClient.delete(url, data)
  },

  post(url, data = {}, conf = {}) {
    return httpClient.post(url, data, conf)
  }
}

export default ApiClient;