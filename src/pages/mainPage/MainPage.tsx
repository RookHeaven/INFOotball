import Tabs from '../../components/tabs/Tabs.tsx';
import Sort from '../../components/sort/Sort.tsx';
import ClubsList from '../../components/clubsList/ClubsList.tsx';

import {FC} from 'react';

import styles from './mainPage.module.scss';

export const MainPage: FC = () => {

  return (
    <main className={styles.content}>
      <div className={'container'}>
        <div className={styles.content__sorting}>
          <Tabs/>
          <Sort/>
        </div>
        <ClubsList/>
      </div>
    </main>
  )
}
