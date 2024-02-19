import {IClub} from '../../../@types/types.ts';

export enum Status {
  LOADING = 'loading',
  IDLE = 'idle',
  ERROR = 'error'
}

export type TClubSlice = {
  clubs: IClub[];
  filtersLoadingStatus: Status;
}
