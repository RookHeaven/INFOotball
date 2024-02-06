import EmptyFavorites from "../../components/emptyFavorites/EmptyFavorites.tsx";
import FavoriteClub from "../../components/favoriteClub/FavoriteClub.tsx";
import Button from "../../components/button/Button.tsx";

import {useDispatch, useSelector} from "react-redux";
import {clearAllFavorite} from "../../slices/favoriteSlice.ts";

import Heart from '../../assets/icons/heart.svg?react';

import styles from './favoriteClubsPage.module.scss';



const FavoriteClubsPage = () => {
  const {clubs} = useSelector(state => state.favorites);
  const dispatch = useDispatch();

  const onClearAllFavoriteClub = () => {
    dispatch(clearAllFavorite())
  }

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
      <div className={styles.favorite__container}>
        <div className={styles.favorite__top}>
          <h2 className={styles.favorite__title}>
            <Heart/>
            Favorite clubs
          </h2>
          <Button isClearAllCardButton={true}
                  onClickClearAllCardButton={() => onClearAllFavoriteClub()}
          >Clear favorites
          </Button>
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
