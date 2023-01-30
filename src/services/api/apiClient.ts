import axios, { AxiosInstance, AxiosResponse } from 'axios';

import { ApiClientConfig, DeleteEndpoint, ReadEndpoint, WriteEndpoint } from './types';
import { API_CLIENT_CONFIG } from './config';

class ApiClient {
  private readonly instance: AxiosInstance;

  constructor(configuration: ApiClientConfig) {
    const { baseUrl: baseURL } = configuration;

    this.instance = axios.create({
      baseURL,
      withCredentials: true,
      headers: {
        Accept: 'application/json',
      },
    });
  }

  get = <RequestT, ResponseT>(
    endpointConfig: ReadEndpoint,
    params?: RequestT,
    // responseType?: ResponseType
  ): Promise<AxiosResponse<ResponseT>> => {
    const { url } = endpointConfig;

    return this.instance.get(url, {
      params,
    });
  };

  post = <RequestT, ResponseT>(
    endpointConfig: WriteEndpoint,
    data?: RequestT,
    params?: RequestT,
    // responseType?: ResponseType
  ): Promise<AxiosResponse<ResponseT>> => {
    const { url, method } = endpointConfig;
    // if (method === 'PUT') throw Error('Invalid HTTP method passed as argument');

    return this.instance.post(url, data, {
      params,
    });
  };

  put = <RequestT, ResponseT>(
    endpointConfig: WriteEndpoint,
    data?: RequestT,
    params?: RequestT,
    // responseType?: ResponseType
  ): Promise<AxiosResponse<ResponseT>> => {
    const { url, method } = endpointConfig;
    // if (method === 'POST') throw Error('Invalid HTTP method passed as argument');

    return this.instance.put(url, data, {
      params,
    });
  };

  delete = <RequestT, ResponseT>(
    endpointConfig: DeleteEndpoint,
    params?: RequestT,
    // responseType?: ResponseType
  ): Promise<AxiosResponse<ResponseT>> => {
    const { url } = endpointConfig;

    return this.instance.delete(url, {
      params,
    });
  };
}

export const apiClient = new ApiClient(API_CLIENT_CONFIG);
