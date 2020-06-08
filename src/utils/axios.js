import axios from 'axios';
import { baseURL } from '../config';

export async function axiosFetch(api, method, data, isFormData = false) {
  const token = localStorage.getItem('token');
  const headers = {};
  if (token) {
    headers.t = token;
  }

  const axiosCreate = axios.create({
    baseURL,
    headers,
  });

  let configReq = {};
  if (method === 'get') {
    configReq = {
      method,
      url: api,
    };
  } else {
    configReq = {
      method,
      url: api,
      data,
    };
  }
  if (isFormData) {
    const formData = Object.keys(data).reduce((total, key) => {
      total.append(key, data[key]);
      return total;
    }, new FormData());
    configReq = {
      ...configReq,
      data: formData,
    };
  }
  try {
    const res = await axiosCreate(configReq);
    if (res.data.code === 0) {
      return res.data;
    } else {
      return await Promise.reject(res.data);
    }
  } catch (error) {
    await Promise.reject(error);
    if (error.code === 1010) {
      return { message: error.message };
    }
    if (error.message === 'Network Error' && !error.response.status) {
      return { type: 'failed' };
    }
    if (error.message === 'Network Error') {
      return { type: 'internet' };
    }
    if (error.response.status === 401) {
      return { error: error.response.data, type: 401 };
    }
    if (error.response.status >= 500) {
      return { error: error.response.data, type: 500 };
    }

    return error.response.data;
  }
}
