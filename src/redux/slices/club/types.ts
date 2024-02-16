import {Club} from '../../../@types/types.ts';

export enum Status {
  LOADING = 'loading',
  IDLE = 'idle',
  ERROR = 'error'
}

export type TClubSlice = {
  clubs: Club[];
  filtersLoadingStatus: Status;
}
