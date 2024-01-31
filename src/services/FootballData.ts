import useHttp from '../hooks/http.hook.ts';

const FootballData = () => {
  const {loading, request} = useHttp();

  const _apiBase = 'https://api.npoint.io/';
  const _apiKey = 'a11d5364beb387fc9602';

  const getAllClubs = async () => {
    const res = await request(
      `${_apiBase}${_apiKey}`
    )
    return res.map(_transformClubs);
  }

  const _transformClubs = (clubs) => {
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

  return {
    getAllClubs,
    loading
  }
}

export default FootballData;
