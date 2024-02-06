import {useSelector} from "react-redux";

import {Link} from "react-router-dom";

import classNames from 'classnames';

import Heart from '../../assets/icons/heart.svg?react';
import Arrow from '../../assets/icons/arrow-back.svg?react';
import Trash from '../../assets/icons/trash.svg?react';

import styles from './button.module.scss';


const Button = (props) => {
  const {
    isLinkButton = false,
    isTabButton = false,
    isCardButton = false,
    isBackButton = false,
    isRemoveCardButton = false,
    onClickTabButton = undefined,
    isActiveTab = false,
    onClickCardButton = undefined,
    children
  } = props;

  const {clubs} = useSelector(state => state.favorites);

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
          className={classNames(styles.button, styles.button__card)}>
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
  }

  return (
    <>
      {renderButton()}
    </>
  )
}

export default Button;
