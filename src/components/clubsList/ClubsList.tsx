import ClubCard from '../clubCard/ClubCard.tsx';
import ErrorMessage from '../errorMessage/ErrorMessage.tsx';
import Skeleton from '../skeleton/Skeleton.tsx';

import {useState, useEffect, FC, JSX} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {AppDispatch} from '../../redux/store.ts';

import {fetchClubs, selectClubs} from '../../redux/slices/club/clubSlice.ts';
import {selectFilters} from '../../redux/slices/filter/filterSlice.ts';

import {IClub} from '../../@types/types.ts';
import {Status} from '../../redux/slices/club/types.ts';

import styles from './clubsList.module.scss';


const ClubsList: FC = () => {
  const {activeTab, currentOption, searchValue} = useSelector(selectFilters);
  const {clubs, filtersLoadingStatus} = useSelector(selectClubs);

  const dispatch = useDispatch<AppDispatch>();

  const [filteredList, setFilteredList] = useState<IClub[]>([]);

  useEffect(() => {
    setFilteredList(getFilteredClubs())
  }, [activeTab, currentOption, filtersLoadingStatus])

  useEffect(() => {
    dispatch(fetchClubs())
  }, [])

  const getSortingFunction = () => {
    switch (currentOption) {
      case 'alphabeticalAsc':
        return (a: IClub, b: IClub) => a.title.localeCompare(b.title)
      case 'alphabeticalDesc':
        return (a: IClub, b: IClub) => b.title.localeCompare(a.title)
      case 'yearDesc':
        return (a: IClub, b: IClub) => parseInt(b.formedYear) - parseInt(a.formedYear)
      case 'yearAsc':
        return (a: IClub, b: IClub) => parseInt(a.formedYear) - parseInt(b.formedYear)
      case 'capacityDesc':
        return (a: IClub, b: IClub) => parseInt(b.stadiumCapacity) - parseInt(a.stadiumCapacity)
      case 'capacityAsc':
        return (a: IClub, b: IClub) => parseInt(a.stadiumCapacity) - parseInt(b.stadiumCapacity)
      default:
        return (a: IClub, b: IClub) => a.title.localeCompare(b.title);
    }
  }

  const getFilteredClubs = (): IClub[] => {
    const sortingFunction = getSortingFunction()

    if (activeTab === 'All clubs') return clubs
      .slice()
      .sort(sortingFunction)

    return clubs
      .filter(club => club.country === activeTab)
      .sort(sortingFunction)
  }

  function renderItems (arr: IClub[]): JSX.Element {
    const items: JSX.Element[] = arr
      .filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase()))
      .map(item => <ClubCard key={item.id} item={item}/>
    )

    return (
      <ul className={styles.clubs}>
        {items}
      </ul>
    )
  }

  function renderSkeleton (arr: undefined[]): JSX.Element {
    const items: JSX.Element[] = arr.map((_: undefined, index: number) => <Skeleton key={index}/>)

    return (
      <ul className={styles.clubs}>
        {items}
      </ul>
    )
  }

  const items: false | JSX.Element = filtersLoadingStatus === Status.IDLE && renderItems(filteredList);
  const skeleton: false | JSX.Element = filtersLoadingStatus === Status.LOADING && renderSkeleton([...new Array(18)]);
  const error: false | JSX.Element = filtersLoadingStatus === Status.ERROR && <ErrorMessage/>;


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
