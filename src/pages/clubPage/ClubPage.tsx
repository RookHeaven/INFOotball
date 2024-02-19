import Button from '../../components/button/Button.tsx';

import {useLoaderData} from 'react-router-dom';

import {IClub} from '../../@types/types.ts';
import {FC} from 'react';

import classNames from 'classnames';

import styles from './clubPage.module.scss';

export const ClubPage: FC = () => {
  const club: IClub = useLoaderData() as IClub;

  return (
    <div className={classNames(styles.club)}>
      <div className={styles.club__container}>
        <div className={styles.club__top}>
          <img src={`.${club.imgSrc}`} width='250' height='250' alt="Football club team badge."/>
          <div className={styles.club__info}>
            <h2 className={styles.club__title}>{club.title}</h2>
            <p>Formed year: <span>{club.formedYear}</span></p>
            <p>League: <span>{club.league}</span></p>
            <p>Country: <span>{club.country}</span></p>
            <p>Stadium: <span>{club.stadium}</span></p>
            <p>Stadium capacity: <span>{club.stadiumCapacity}</span></p>
            <p>Website: <a className={styles.club__link} href={`https://${club.website}`} target='_blank'>{club.website}</a></p>
          </div>
        </div>
        <div className={styles.club__bottom}>
          <p className={classNames(
            styles.club__description,
            (club.description.length >= 500 && club.description.length < 1500) && styles.club__descriptionTwo,
            club.description.length >= 1500 && styles.club__descriptionThree)}>{club.description}</p>
          <Button isBackButton={true}>Back to Main Page</Button>
        </div>
      </div>
    </div>
  );
}
