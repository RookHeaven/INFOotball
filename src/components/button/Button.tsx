import classNames from 'classnames';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import Heart from '../../assets/icons/heart.svg?react';

import styles from './button.module.scss';


const Button = ({isLinkButton = false, isTabButton = false, isCardButton = false, onClickTabButton = undefined, isActiveTab = false, children}) => {
  const linkButton = <a
    className={classNames(styles.button, styles.button__favorites)} href="#">
      <Heart className={classNames(styles.button__icon)} style={{color: 'white'}}/>
      <span>3</span>
      <div className={styles.button__delimiter}></div>
      {children}
    </a>

  const cardButton = <button
    className={classNames(styles.button, styles.button__card)}>
    <Heart className={classNames(styles.button__icon)} style={{color: 'black'}}/>
    {children}
  </button>

  const tabButton = <button
      onClick={onClickTabButton}
      className={classNames(styles.button, styles.button__tab, isActiveTab && styles.active)}
    >
      {children}
    </button>

  return (
    <>
      {isLinkButton && linkButton}
      {isTabButton && tabButton}
      {isCardButton && cardButton}
    </>
  )
}

export default Button;
