import EmptyMessage from '../../components/emptyMessage/EmptyMessage.tsx';
import FavoriteClub from '../../components/favoriteClub/FavoriteClub.tsx';
import Button from '../../components/button/Button.tsx';

import {useDispatch, useSelector} from 'react-redux';

import {clearAllFavorite, selectFavorites} from '../../redux/slices/favorite/favoriteSlice.ts';

import {FC, JSX} from 'react';

import {Club} from '../../@types/types.ts';

import Heart from '../../assets/icons/heart.svg?react';

import styles from './favoriteClubsPage.module.scss';


const FavoriteClubsPage: FC = () => {
  const {clubs} = useSelector(selectFavorites);
  const dispatch = useDispatch();

  const onClearAllFavoriteClub = (): void => {
    dispatch(clearAllFavorite())
  }

  function renderItems (arr: Club[]): JSX.Element {
    const items: JSX.Element[] = arr.map(item => <FavoriteClub key={item.id} item={item}/>)

    return (
      <ul className={styles.favorite__list}>
        {items}
      </ul>
    )
  }

  const items: JSX.Element = renderItems(clubs);

  if (clubs.length === 0) {
    return (
      <EmptyMessage/>
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
