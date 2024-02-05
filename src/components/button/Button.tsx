import {useSelector} from "react-redux";

import classNames from 'classnames';

import Heart from '../../assets/icons/heart.svg?react';
import Arrow from '../../assets/icons/arrow-back.svg?react';
import Trash from '../../assets/icons/trash.svg?react';

import styles from './button.module.scss';
import {Link} from "react-router-dom";


const Button = (props) => {
  const {
    isLinkButton = false,
    isTabButton = false,
    isCardButton = false,
    isRemoveCardButton = false,
    onClickTabButton = undefined,
    isActiveTab = false,
    isBackButton = false,
    onClickCardButton = undefined,
    children
  } = props;
  const {clubs} = useSelector(state => state.favorites);

  const linkButton = <Link
    to='/clubs'
    className={classNames(styles.button, styles.button__favorites)}>
      <Heart className={styles.button__icon} style={{color: 'white'}}/>
      <span>{clubs.length}</span>
      <div className={styles.button__delimiter}></div>
      {children}
    </Link>

  const cardButton = <button
    onClick={onClickCardButton}
    className={classNames(styles.button, styles.button__card)}>
    {isRemoveCardButton ? <Trash className={styles.button__iconTrash}/> : <Heart className={styles.button__icon}/>}
    {children}
  </button>

  const tabButton = <button
      onClick={onClickTabButton}
      className={classNames(styles.button, styles.button__tab, isActiveTab && styles.active)}
    >
      {children}
    </button>

  const backButton = <Link
    to='/'
    className={classNames(styles.button, styles.button__back)}>
    <Arrow className={styles.button__icon}/>
    {children}
  </Link>

  return (
    <>
      {isLinkButton && linkButton}
      {isTabButton && tabButton}
      {isCardButton && cardButton}
      {isBackButton && backButton}
    </>
  )
}

export default Button;
