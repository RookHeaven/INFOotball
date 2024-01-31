import Tabs from "../../components/tabs/Tabs.tsx";
import Sort from "../../components/sort/Sort.tsx";
import ClubCard from "../../components/clubCard/ClubCard.tsx";

import styles from './mainPage.module.scss';

const MainPage = () => {

  return (
    <div className={styles.content}>
      <div className='container'>
        <div className={styles.content__sorting}>
          <Tabs/>
          <Sort/>
        </div>
        <h2 className={styles.content__title}>All clubs</h2>
        <ClubCard/>
      </div>
    </div>
  )
}

export default MainPage;
