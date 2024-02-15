export interface Club {
  formedYear: string;
  country: string;
  website: string;
  league: string;
  stadium: string;
  description: string;
  id: string;
  title: string;
  stadiumCapacity: string;
  imgSrc: string;
}

export interface DataClub {
  idTeam: string;
  strTeam: string;
  intFormedYear: string;
  strLeague: string;
  strStadium: string;
  intStadiumCapacity: string;
  strWebsite: string;
  strDescriptionEN: string;
  strCountry: string;
  strTeamBadge: string;
}
