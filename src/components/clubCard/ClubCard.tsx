import {useState, useEffect} from "react";

import Button from "../button/Button.tsx";
import FootballData from "../../services/FootballData.tsx";
import Skeleton from "../skeleton/Skeleton.tsx";

import styles from './clubCard.module.scss';

const ClubCard = () => {
  const [clubsList, setClubsList] = useState([]);

  const {getAllClubs, loading} = FootballData();

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
        <li className={styles.clubs__item} key={item.id}>
          <img className={styles.clubs__image} width='200' height='200' src={item.imgSrc} alt="Football club team badge"/>
          <h3 className={styles.clubs__title}>{item.title}</h3>
          <Button isCardButton={true}>Add to favorites</Button>
        </li>
      )
    })

    return (
      <ul className={styles.clubs}>
        {items}
      </ul>
    )
  }

  function renderSkeleton (arr) {
    const items = arr.map((_, index) => {
      return (
        <Skeleton className='skeleton' key={index}/>
      )
    })

    return (
      <ul className={styles.clubs}>
        {items}
      </ul>
    )
  }

  const items = !loading && renderItems(clubsList);
  const skeleton = loading && renderSkeleton([...new Array(18)]);


  return (
    <>
      {skeleton}
      {items}
    </>
  )
}

export default ClubCard;
