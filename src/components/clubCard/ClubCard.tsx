import Button from '../button/Button.tsx';

import {addToFavorite, removeFromFavorite, selectFavorites} from '../../slices/favoriteSlice.ts';
import {useDispatch, useSelector} from 'react-redux';
import {Link} from 'react-router-dom';

import {FC} from 'react';

import {Club} from '../../@types/types.ts';

import styles from '../clubCard/clubCard.module.scss';

type ClubCardProps = {
  item: Club;
}

const ClubCard: FC<ClubCardProps> = ({item}) => {
  const {clubs} = useSelector(selectFavorites);
  const dispatch = useDispatch();

  const isClubInFavorites: boolean = clubs.some(club => club.id === item.id);
  const text: string = isClubInFavorites
    ? 'Remove from favorites'
    : 'Add to favorites';

  const onToggleClub = (item: Club): void => {
    isClubInFavorites
      ? dispatch(removeFromFavorite(item.id))
      : dispatch(addToFavorite(item));
  }

  return (
    <li className={styles.club}>
      <Link className={styles.club__link} to={`/clubs/${item.id}`}>
        <img className={styles.club__image} width='200' height='200' src={item.imgSrc} alt="Football club team badge"/>
      </Link>
      <h3 className={styles.club__title}>{item.title}</h3>
      <p>Formed year: <span>{item.formedYear}</span></p>
      <p>Stadium capacity: <span>{item.stadiumCapacity}</span></p>
      <Button
        isRemoveCardButton={isClubInFavorites}
        isCardButton={true}
        onClickCardButton={() => onToggleClub(item)}
      >
        {text}
      </Button>
    </li>
  );
};

export default ClubCard;
