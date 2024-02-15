import {useHttp} from "../hooks/http.hook.ts";

import {Club, DataClub} from '../@types/types.ts';

import {_apiBase, _apiKey} from '../constants/apiConstants.ts';
import {_transformClubs} from '../utils/formatUtils.ts';

interface Params {
  id?: string
}

type ClubLoaderParams = {
  params: Params;
};

export const clubLoader = async ({params}: ClubLoaderParams): Promise<Club | undefined> => {
  // Todo deal with custom hook usage error
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const {request} = useHttp();
  const clubs: DataClub[] =  await request(`${_apiBase}${_apiKey}`);

  const id: string | undefined = params.id;
  const club: Club | undefined = clubs.map(_transformClubs).find((c: Club) => c.id === id);

  return club;
}
