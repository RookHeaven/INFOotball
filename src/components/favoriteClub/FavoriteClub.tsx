import Button from '../button/Button.tsx';

import {useDispatch} from 'react-redux';
import {removeFromFavorite} from '../../redux/slices/favorite/favoriteSlice.ts';

import {FC} from 'react';

import {IClub} from '../../@types/types.ts';
import {TFavoriteClub} from './types.ts';

import styles from './favoriteClub.module.scss';

const FavoriteClub: FC<TFavoriteClub> = ({item}) => {
  const dispatch = useDispatch();

  const onClearFavoriteClub = (item: IClub): void => {
    dispatch(removeFromFavorite(item.id))
  }

  return (
    <li className={styles.favoriteClub}>
      <img className={styles.favoriteClub__image} width='80' height='80' src={item.imgSrc} alt="Football club team badge."/>
      <h3 className={styles.favoriteClub__title}>{item.title}</h3>
      <div className={styles.favoriteClub__info}>
        <p>Formed year: <span>{item.formedYear}</span></p>
        <p>Stadium capacity: <span>{item.stadiumCapacity}</span></p>
      </div>
      <Button
        isLinkClubButton={true}
        clubID={item.id}
      >
        Club Page
      </Button>
      <Button
        isClearCardButton={true}
        onClickClearCardButton={() => onClearFavoriteClub(item)}
      >
      </Button>
    </li>
  );
}

export default FavoriteClub;
