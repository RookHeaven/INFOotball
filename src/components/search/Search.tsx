import {useRef} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setSearchValue} from "../../slices/filterSlice.ts";

import styles from './search.module.scss';

import SearchIcon from '../../assets/icons/search.svg?react';
import Close from '../../assets/icons/close.svg?react';

const Search = () => {
  const {searchValue} = useSelector(state => state.filters);
  const dispatch = useDispatch();
  const inputRef = useRef();

  const onChangeInput = (event) => {
    dispatch(setSearchValue(event.target.value))
  }

  const onClickClose = () => {
    dispatch(setSearchValue(''));
    inputRef.current.focus();
  }

  return (
    <div className={styles.search}>
      <SearchIcon className={styles.search__icon}/>
      <input ref={inputRef}
             value={searchValue}
             onChange={onChangeInput}
             className={styles.search__input}
             placeholder='Search club...'/>
      {searchValue && <Close onClick={onClickClose}
                             className={styles.search__closeIcon}/>}
    </div>
  )
}

export default Search;
