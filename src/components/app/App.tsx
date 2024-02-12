import Header from '../header/Header.tsx';
import {Outlet} from 'react-router-dom';

import style from './app.module.scss';

const App = () => {

  return (
      <div className={style.wrapper}>
          <Header/>
          <Outlet/>
      </div>
  )
}

export default App;
