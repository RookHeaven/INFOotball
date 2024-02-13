import Header from '../header/Header.tsx';

import {Outlet} from 'react-router-dom';

import {FC} from 'react';

import style from './app.module.scss';

const App: FC = () => {

  return (
      <div className={style.wrapper}>
          <Header/>
          <Outlet/>
      </div>
  )
}

export default App;
