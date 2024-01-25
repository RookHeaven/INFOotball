import Button from "../button/Button.tsx";

import classNames from 'classnames';

import logo from '../../assets/svg/logo.svg';

import styles from './header.module.scss';

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={classNames(styles.header__container, 'container')}>
        <div className={styles.header__logo}>
          <a href='#'>
            <img src={logo} alt="Logo INFOotball." width='42' height='42'/>
            <div>
              <h1>INFOotball</h1>
              <p>football club information app</p>
            </div>
          </a>
        </div>
        <Button isLinkButton={true}>Clubs</Button>
      </div>
    </div>
  )
}

export default Header;
