import Tabs from "../../components/tabs/Tabs.tsx";
import Sort from "../../components/sort/Sort.tsx";
import ClubsList from "../../components/clubsList/ClubsList.tsx";

import styles from './mainPage.module.scss';

const MainPage = () => {

  return (
    <div className={styles.content}>
      <div className='container'>
        <div className={styles.content__sorting}>
          <Tabs/>
          <Sort/>
        </div>
        <ClubsList/>
      </div>
    </div>
  )
}

export default MainPage;
