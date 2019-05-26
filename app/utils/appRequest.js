/* eslint-disable no-param-reassign */
import request from 'utils/request';
const baseRequest = (resource, options) => request(resource, options);
const requestApi = (resource, method, body, options) => {
  const envLocalhost = 'http://localhost:8080';
  const url = `${envLocalhost}/${resource}`;
  if (!options.headers) {
    options.headers = new Headers({
      Accept: 'application/json',
      'Content-Type': 'application/json;charset=UTF-8',
    });
  }
  options.method = method;
  if (method !== 'GET') {
    options.body = JSON.stringify(body);
  }
  return baseRequest(url, options);
};
export const getApi = (resource, params, options = {}) => {
  const queryString = Object.keys(params).map(key => key + '=' + params[key]).join('&');
  const url = `${resource}?${queryString}`;
  return requestApi(url, 'GET', {}, options);
};
export const postApi = (resource, body, options = {}) => {
  const url = `${resource}`;
  return requestApi(url, 'POST', body, options);
};
