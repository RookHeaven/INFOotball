/// <reference types="vite-plugin-svgr/client" />

import {useSelector} from 'react-redux';
import {selectFavorites} from '../../slices/favoriteSlice.ts';

import {Link} from 'react-router-dom';

import {FC, ReactNode} from 'react';

import classNames from 'classnames';

import Heart from '../../assets/icons/heart.svg?react';
import Arrow from '../../assets/icons/arrow-back.svg?react';
import Trash from '../../assets/icons/trash.svg?react';
import Info from '../../assets/icons/info.svg?react';
import Close from '../../assets/icons/close.svg?react';

import styles from './button.module.scss';

interface ButtonProps {
  isLinkButton?: boolean;
  isTabButton?: boolean;
  isCardButton?: boolean;
  isBackButton?: boolean;
  isClearCardButton?: boolean;
  isClearAllCardButton?: boolean;
  isLinkClubButton?: boolean;
  isRemoveCardButton?: boolean;
  onClickTabButton?: () => void;
  onClickCardButton?: () => void;
  onClickClearCardButton?: () => void;
  onClickClearAllCardButton?: () => void;
  isActiveTab?: boolean;
  clubID?: string;
  children?: ReactNode;
}

const Button: FC<ButtonProps> = (props) => {
  const {
    isLinkButton,
    isTabButton,
    isCardButton,
    isBackButton,
    isClearCardButton,
    isClearAllCardButton,
    isLinkClubButton,
    isRemoveCardButton,
    onClickTabButton,
    onClickCardButton,
    onClickClearCardButton,
    onClickClearAllCardButton,
    isActiveTab,
    clubID,
    children
  } = props;

  const {clubs} = useSelector(selectFavorites);

  const renderButton = () => {
      if (isLinkButton) {
        return <Link
          to='/clubs'
          className={classNames(styles.button, styles.button__favorites)}>
          <Heart className={styles.button__icon} style={{color: 'white'}}/>
          <span>{clubs.length}</span>
          <div className={styles.button__delimiter}></div>
          {children}
        </Link>
      }

      if (isCardButton) {
        return <button
          onClick={onClickCardButton}
          className={classNames(styles.button, styles.button__card, isRemoveCardButton && styles.remove)}>
          {isRemoveCardButton
            ? <Trash className={styles.button__iconTrash}/>
            : <Heart className={styles.button__icon}/>
          }
          {children}
        </button>
      }

      if (isTabButton) {
        return <button
          onClick={onClickTabButton}
          className={classNames(styles.button, styles.button__tab, isActiveTab && styles.active)}
        >
          {children}
        </button>
      }

      if (isBackButton) {
        return <Link
          to='/'
          className={classNames(styles.button, styles.button__back)}>
          <Arrow className={styles.button__icon}/>
          {children}
        </Link>
      }

    if (isLinkClubButton) {
      return <Link
        to={`/clubs/${clubID}`}
        className={classNames(styles.button, styles.button__info)}>
        <Info className={styles.button__iconInfo}/>
        {children}
      </Link>
    }

    if (isClearCardButton) {
      return <button
        onClick={onClickClearCardButton}
        className={classNames(styles.button, styles.button__clear)}
      >
        <Close className={styles.button__iconClear}/>
      </button>
    }

    if (isClearAllCardButton) {
      return <button
        onClick={onClickClearAllCardButton}
        className={classNames(styles.button, styles.button__clearAll)}
      >
        <Trash className={styles.button__iconTrash}/>
        {children}
      </button>
    }
  }

  return (
    <>
      {renderButton()}
    </>
  )
}

export default Button;
