import {useState, useEffect} from "react";
import {useSelector} from "react-redux";

import FootballData from "../../services/FootballData.ts";
import Skeleton from "../skeleton/Skeleton.tsx";

import styles from './clubsList.module.scss';
import ClubCard from "../clubCard/ClubCard.tsx";


const ClubsList = () => {
  const {activeTab, currentOption, searchValue} = useSelector(state => state.filters);

  const [clubsList, setClubsList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);

  const {getAllClubs, loading} = FootballData();

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

  function renderItems (arr) {
    const items = arr
      .filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase()))
      .map(item => <ClubCard key={item.id} item={item}/>
    )

    return (
      <ul className={styles.clubs}>
        {items}
      </ul>
    )
  }

  function renderSkeleton (arr) {
    const items = arr.map((_, index) => <Skeleton className='skeleton' key={index}/>)

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
      <h2 className={styles.clubs__title}>{activeTab}</h2>
      {skeleton}
      {items}
    </>
  )
}

export default ClubsList;