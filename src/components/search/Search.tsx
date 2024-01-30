import {useContext} from "react";
import searchContext from "../../context/context.tsx";

import styles from './search.module.scss';

import SearchIcon from '../../assets/icons/search.svg?react';
import Close from '../../assets/icons/close.svg?react';

const Search = () => {
  const {searchValue, setSearchValue} = useContext(searchContext);

  return (
    <div className={styles.search}>
      <SearchIcon className={styles.search__icon}/>
      <input value={searchValue}
             onChange={(event) => setSearchValue(event.target.value)}
             className={styles.search__input}
             placeholder='Search club...'/>
      {searchValue && <Close onClick={() => setSearchValue('')}
                             className={styles.search__closeIcon}/>}
    </div>
  )
}

export default Search;
