import axios from 'axios';
import {DataClub} from '../@types/types.ts';

export const useHttp = () => {

  const request = async (url: string,
                         method: string = 'GET',
                         data: null = null,
                         headers = {
                             'Content-Type': 'application/json'
                              }): Promise<DataClub[]> => {

    const response = await axios.get<DataClub[]>(url, {method, data, headers});

    return response.data;
  };

  return {request}
}
