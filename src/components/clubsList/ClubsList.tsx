import {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addToFavorite} from "../../slices/favoriteSlice.ts";

import Button from "../button/Button.tsx";
import FootballData from "../../services/FootballData.ts";
import Skeleton from "../skeleton/Skeleton.tsx";

import styles from './clubsList.module.scss';


const ClubsList = () => {
  const {activeTab, currentOption, searchValue} = useSelector(state => state.filters);
  const {clubs} = useSelector(state => state.favorites);
  const dispatch = useDispatch();

  const [clubsList, setClubsList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);

  const {getAllClubs, loading} = FootballData();

  // const isClubInFavorites = clubs.some(club => club.id === )

  useEffect(() => {
    setFilteredList(getFilteredClubs())
  }, [activeTab, loading, currentOption])

  useEffect(() => {
    onRequest();
  }, [])

  const getSortingFunction = () => {
    switch (currentOption) {
      case 'alphabeticalAsc':
        return (a, b) => a.title.localeCompare(b.title)
      case 'alphabeticalDesc':
        return (a, b) => b.title.localeCompare(a.title)
      case 'yearDesc':
        return (a, b) => b.formedYear - a.formedYear
      case 'yearAsc':
        return (a, b) => a.formedYear - b.formedYear
      case 'capacityDesc':
        return (a, b) => b.stadiumCapacity - a.stadiumCapacity
      case 'capacityAsc':
        return (a, b) => a.stadiumCapacity - b.stadiumCapacity
      default:
        return (a, b) => a.title.localeCompare(b.title);
    }
  }

  const getFilteredClubs = () => {
    const sortingFunction = getSortingFunction()

    if (activeTab === 'All clubs') return clubsList
      .slice()
      .sort(sortingFunction)

    return clubsList
      .filter(club => club.country === activeTab)
      .sort(sortingFunction)
  }

  const onRequest = () => {
    getAllClubs()
      .then(onClubsListLoaded)
  }

  const onClubsListLoaded = (newClubsList) => {
    setClubsList(newClubsList);
  }

  const onClubAdded = (item) => {
    dispatch(addToFavorite(item))
  }

  function renderItems (arr) {
    const items = arr
      .filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase()))
      .map(item => (
        <li className={styles.clubs__item} key={item.id}>
          <img className={styles.clubs__image} width='200' height='200' src={item.imgSrc} alt="Football club team badge"/>
          <h3 className={styles.clubs__title}>{item.title}</h3>
          <p>Formed year: <span>{item.formedYear}</span></p>
          <p>Stadium capacity: <span>{item.stadiumCapacity}</span></p>
          <Button isCardButton={true} onClickCardButton={() => onClubAdded(item)}>Add to favorites</Button>
        </li>
      )
    )

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
      <h2 className={styles.title}>{activeTab}</h2>
      {skeleton}
      {items}
    </>
  )
}

export default ClubsList;
