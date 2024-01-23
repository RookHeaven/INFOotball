import './clubCard.scss';
import Button from "../button/Button.tsx";
import FootballData from "../../services/FootballData.tsx";
import {useState, useEffect} from "react";

const ClubCard = () => {
  const [clubsList, setClubsList] = useState([]);

  const {getAllClubs} = FootballData();

  useEffect(() => {
    onRequest();
  }, [])

  const onRequest = () => {
    getAllClubs()
      .then(onClubsListLoaded)
  }

  const onClubsListLoaded = (newClubsList) => {
    setClubsList([...clubsList, ...newClubsList]);
  }

  function renderItems (arr) {
    const items = arr.map(item => {
      return (
        <li className="club-list__item" key={item.id}>
          <img className='club-list__image' src={item.imgSrc} alt="Football club team badge"/>
          <h3 className='club-list__title'>{item.title}</h3>
          <Button isCardButton={true}>Add to favorites</Button>
        </li>
      )
    })

    return (
      <ul className="club-list">
        {items}
      </ul>
    )
  }

  const items = renderItems(clubsList);


  return (
    <>
      {items}
    </>
  )
}

export default ClubCard;
