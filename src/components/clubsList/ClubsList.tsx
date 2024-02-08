import {useState, useEffect} from "react";
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";

import {fetchClubs, selectClubs} from "../../slices/clubSlice.ts";

import ClubCard from "../clubCard/ClubCard.tsx";
import ErrorMessage from "../errorMessage/ErrorMessage.tsx";
import Skeleton from "../skeleton/Skeleton.tsx";

import styles from './clubsList.module.scss';
import {selectFilters} from "../../slices/filterSlice.ts";



const ClubsList = () => {
  const {activeTab, currentOption, searchValue} = useSelector(selectFilters);
  const {clubs, filtersLoadingStatus} = useSelector(selectClubs);

  const dispatch = useDispatch();

  const [filteredList, setFilteredList] = useState([]);

  useEffect(() => {
    setFilteredList(getFilteredClubs())
  }, [activeTab, currentOption, filtersLoadingStatus])

  useEffect(() => {
    dispatch(fetchClubs())
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

    if (activeTab === 'All clubs') return clubs
      .slice()
      .sort(sortingFunction)

    return clubs
      .filter(club => club.country === activeTab)
      .sort(sortingFunction)
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

  const items = filtersLoadingStatus === 'idle' && renderItems(filteredList);
  const skeleton = filtersLoadingStatus === 'loading' && renderSkeleton([...new Array(18)]);
  const error = filtersLoadingStatus === 'error' && <ErrorMessage/>;


  return (
    <>
      <h2 className={styles.clubs__title}>{activeTab}</h2>
      {error}
      {skeleton}
      {items}
    </>
  )
}

export default ClubsList;
