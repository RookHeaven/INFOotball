import Header from "../header/Header.tsx";
import Tabs from "../tabs/Tabs.tsx";
import Sort from "../sort/Sort.tsx";
import ClubCard from "../clubCard/ClubCard.tsx";

import style from './app.module.scss';

const App = () => {

  return (
      <div className={style.wrapper}>
        <Header/>
        <div className='content'>
          <div className='container'>
            <div className='content__sorting'>
              <Tabs/>
              <Sort/>
            </div>
            <h2 className='content__title'>All clubs</h2>
            <ClubCard/>
          </div>
        </div>
      </div>
  )
}

export default App;
