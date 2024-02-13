import axios from 'axios';

export const useHttp = () => {

  const request = async (url: string,
                         method = 'GET',
                         data = null,
                         headers = {
                             'Content-Type': 'application/json'
                              }) => {

    const response = await axios.get(url, {method, data, headers});

    return response.data;
  };

  return {request}
}
