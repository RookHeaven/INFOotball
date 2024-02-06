import {useSelector} from "react-redux";

import EmptyFavorites from "../../components/emptyFavorites/EmptyFavorites.tsx";
import FavoriteClub from "../../components/favoriteClub/FavoriteClub.tsx";
import Button from "../../components/button/Button.tsx";

import Heart from '../../assets/icons/heart.svg?react';
import Trash from '../../assets/icons/trash.svg?react';

import styles from './favoriteClubsPage.module.scss';



const FavoriteClubsPage = () => {
  const {clubs} = useSelector(state => state.favorites);

  function renderItems (arr) {
    const items = arr.map(item => <FavoriteClub key={item.id} item={item}/>)

    return (
      <ul className={styles.favorite__list}>
        {items}
      </ul>
    )
  }

  const items = renderItems(clubs);

  if (clubs.length === 0) {
    return (
      <EmptyFavorites/>
    )
  }

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
        {items}
        <div className={styles.favorite__bottom}>
          <span>Total clubs:<b>{clubs.length}</b></span>
          <Button isBackButton={true}>Back to Main Page</Button>
        </div>
      </div>
    </div>
  )
}

export default FavoriteClubsPage;
