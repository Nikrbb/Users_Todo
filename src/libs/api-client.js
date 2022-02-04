import Axios from 'axios';

const options = {
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json; charset=utf-8',
    // 'Access-Control-Allow-Origin': 'http://localhost:8080', // fix it
  }
};

const httpClient = Axios.create(options);

httpClient.interceptors.request.use(config => config);

httpClient.interceptors.response.use(response => response, error => Promise.reject(error.response.data))


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