import classNames from 'classnames';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import Heart from '../../assets/icons/heart.svg?react';
import Arrow from '../../assets/icons/arrow-back.svg?react';

import styles from './button.module.scss';
import {Link} from "react-router-dom";


const Button = ({isLinkButton = false, isTabButton = false, isCardButton = false, onClickTabButton = undefined, isActiveTab = false, isBackButton = false, children}) => {
  const linkButton = <Link
    to='/clubs'
    className={classNames(styles.button, styles.button__favorites)}>
      <Heart className={classNames(styles.button__icon)} style={{color: 'white'}}/>
      <span>3</span>
      <div className={styles.button__delimiter}></div>
      {children}
    </Link>

  const cardButton = <button
    className={classNames(styles.button, styles.button__card)}>
    <Heart className={classNames(styles.button__icon)}/>
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
    <Arrow className={classNames(styles.button__icon)}/>
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
