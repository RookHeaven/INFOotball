import {useHttp} from "../../hooks/http.hook.ts";

import {TClubLoader} from './types.ts';
import {IClub, IDataClub} from '../../@types/types.ts';

import {_apiBase, _apiKey} from '../../constants/apiConstants.ts';
import {_transformClubs} from '../../utils/formatUtils.ts';

export const clubLoader = async ({params}: TClubLoader): Promise<IClub | undefined> => {
  // Todo deal with custom hook usage error
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const {request} = useHttp();
  const clubs: IDataClub[] =  await request(`${_apiBase}${_apiKey}`);

  const id: string | undefined = params.id;
  const club: IClub | undefined = clubs.map(_transformClubs).find((c: IClub) => c.id === id);

  return club;
}
