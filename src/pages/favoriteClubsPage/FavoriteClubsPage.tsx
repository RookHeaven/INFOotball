import Button from "../../components/button/Button.tsx";

import Heart from '../../assets/icons/heart.svg?react';
import Trash from '../../assets/icons/trash.svg?react';

import styles from './favoriteClubsPage.module.scss';

const FavoriteClubsPage = () => {
  return (
    <div className={styles.favorite}>
      <div className='container'>
        <div className={styles.favorite__top}>
          <h2 className={styles.favorite__title}>
            <Heart/>Favorite clubs</h2>
          <div className={styles.favorite__clear}>
            <Trash/>
            <span>Clear favorites</span>
          </div>
        </div>
        <ul className={styles.favorite__list}></ul>
        <div className={styles.favorite__bottom}>
          <span>Total clubs:<b>3</b></span>
          <Button isBackButton={true}>Back to Main Page</Button>
        </div>
      </div>
    </div>
  )
}

export default FavoriteClubsPage;
