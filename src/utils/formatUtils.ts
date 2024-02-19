import {IClub, IDataClub} from '../@types/types.ts';

export const _transformClubs = (clubs: IDataClub): IClub => {
  return {
    id: clubs.idTeam,
    title: clubs.strTeam,
    formedYear: clubs.intFormedYear,
    league: clubs.strLeague,
    stadium: clubs.strStadium,
    stadiumCapacity: clubs.intStadiumCapacity,
    website: clubs.strWebsite,
    description: clubs.strDescriptionEN || 'There is no description',
    country: clubs.strCountry,
    imgSrc: `/images/clubs/${clubs.strTeamBadge}`,
  }
}
