import styles from './favoriteClub.module.scss';

function FavoriteClub({item}) {
  return (
    <li className={styles.favoriteClub}>
      <img className={styles.club__image} width='200' height='200' src={item.imgSrc} alt="Football club team badge"/>
      <h3 className={styles.club__title}>{item.title}</h3>
    </li>
  );
}

export default FavoriteClub;
