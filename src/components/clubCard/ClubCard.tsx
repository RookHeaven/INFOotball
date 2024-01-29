import {useState, useEffect} from "react";

import Button from "../button/Button.tsx";
import FootballData from "../../services/FootballData.tsx";
import Skeleton from "../skeleton/Skeleton.tsx";

import styles from './clubCard.module.scss';

const ClubCard = ({country, option}) => {
  const [clubsList, setClubsList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);

  const {getAllClubs, loading} = FootballData();

  useEffect(() => {
    setFilteredList(getFilteredClubs())
    // setIsFiltered(true)
  }, [country, loading, option])

  useEffect(() => {
    onRequest();
  }, [])

  const getSortingFunction = () => {
    switch (option) {
      case 'alphabeticalAsc':
        return (a, b) => a.title.localeCompare(b.title)
      case 'alphabeticalDesc':
        return (a, b) => b.title.localeCompare(a.title)
      case 'yearDesc':
        return (a, b) => a.formedYear - b.formedYear
      case 'yearAsc':
        return (a, b) => b.formedYear - a.formedYear
      case 'capacityDesc':
        return (a, b) => a.stadiumCapacity - b.stadiumCapacity
      case 'capacityAsc':
        return (a, b) => b.stadiumCapacity - a.stadiumCapacity
      default:
        return (a, b) => a.title.localeCompare(b.title);
    }
  }

  const getFilteredClubs = () => {
    const sortingFunction = getSortingFunction()

    if (country === 'All clubs') return clubsList
      .slice()
      .sort(sortingFunction)

    return clubsList
      .filter(club => club.country === country)
      .sort(sortingFunction)
  }

  const onRequest = () => {
    getAllClubs()
      .then(onClubsListLoaded)
  }

  const onClubsListLoaded = (newClubsList) => {
    setClubsList(newClubsList);
  }

  function renderItems (arr) {
    const items = arr.map(item => {
      return (
        <li className={styles.clubs__item} key={item.id}>
          <img className={styles.clubs__image} width='200' height='200' src={item.imgSrc} alt="Football club team badge"/>
          <h3 className={styles.clubs__title}>{item.title}</h3>
          <p>Formed year: <span>{item.formedYear}</span></p>
          <p>Stadium capacity: <span>{item.stadiumCapacity}</span></p>
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

  const items = !loading && renderItems(filteredList);
  const skeleton = loading && renderSkeleton([...new Array(18)]);


  return (
    <>
      {skeleton}
      {items}
    </>
  )
}

export default ClubCard;
