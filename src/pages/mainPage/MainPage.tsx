import Tabs from "../../components/tabs/Tabs.tsx";
import Sort from "../../components/sort/Sort.tsx";
import ClubCard from "../../components/clubCard/ClubCard.tsx";

import styles from './mainPage.module.scss';
import {useState} from "react";

const MainPage = () => {
  const [activeTab, setActiveTab] = useState('All clubs');

  return (
    <div className={styles.content}>
      <div className='container'>
        <div className={styles.content__sorting}>
          <Tabs value={activeTab} onClickTab={(title) => setActiveTab(title)}/>
          <Sort/>
        </div>
        <h2 className={styles.content__title}>All clubs</h2>
        <ClubCard country={activeTab}/>
      </div>
    </div>
  )
}

export default MainPage;
