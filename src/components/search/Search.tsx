/// <reference types="vite-plugin-svgr/client" />

import {ChangeEvent, FC, useRef} from 'react';

import {useDispatch, useSelector} from 'react-redux';

import {selectFilters, setSearchValue} from '../../redux/slices/filter/filterSlice.ts';

import styles from './search.module.scss';

import SearchIcon from '../../assets/icons/search.svg?react';
import Close from '../../assets/icons/close.svg?react';

const Search: FC = () => {
  const {searchValue} = useSelector(selectFilters);
  const dispatch = useDispatch();
  const inputRef = useRef<HTMLInputElement>(null);

  const onChangeInput = (event: ChangeEvent<HTMLInputElement>): void => {
    dispatch(setSearchValue(event.target.value))
  }

  const onClickClose = (): void => {
    dispatch(setSearchValue(''));
    inputRef.current?.focus();
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
