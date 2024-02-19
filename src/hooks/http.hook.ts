import axios from 'axios';
import {IDataClub} from '../@types/types.ts';

export const useHttp = () => {

  const request = async (url: string,
                         method: string = 'GET',
                         data: null = null,
                         headers = {
                             'Content-Type': 'application/json'
                              }): Promise<IDataClub[]> => {

    const response = await axios.get<IDataClub[]>(url, {method, data, headers});

    return response.data;
  };

  return {request}
}
