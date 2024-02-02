import {useContext, useRef} from "react";
import searchContext from "../../context/context.ts";

import styles from './search.module.scss';

import SearchIcon from '../../assets/icons/search.svg?react';
import Close from '../../assets/icons/close.svg?react';

const Search = () => {
  const inputRef = useRef();
  const {searchValue, setSearchValue} = useContext(searchContext);

  const onClickClose = () => {
    setSearchValue('');
    inputRef.current.focus();
  }

  return (
    <div className={styles.search}>
      <SearchIcon className={styles.search__icon}/>
      <input ref={inputRef}
             value={searchValue}
             onChange={(event) => setSearchValue(event.target.value)}
             className={styles.search__input}
             placeholder='Search club...'/>
      {searchValue && <Close onClick={onClickClose}
                             className={styles.search__closeIcon}/>}
    </div>
  )
}

export default Search;
