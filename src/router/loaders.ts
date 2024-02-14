import {useHttp} from "../hooks/http.hook.ts";

import {_apiBase, _apiKey, _transformClubs} from "../slices/clubSlice.ts";

interface Params {
  id?: string
}

type ClubLoaderParams = {
  params: Params;
};

export const clubLoader = async ({params}: ClubLoaderParams) => {
  const {request} = useHttp();
  const clubs: object[] =  await request(`${_apiBase}${_apiKey}`);

  const id = params.id;
  const club = clubs.map(_transformClubs).find((c) => c.id === id);

  return club;
}
