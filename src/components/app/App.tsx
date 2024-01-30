import {useState} from "react";
import Header from "../header/Header.tsx";
import searchContext from "../../context/context.tsx";
import {Outlet} from "react-router-dom";

import style from './app.module.scss';

const {Provider} = searchContext;
const App = () => {
  const [searchValue, setSearchValue] = useState('');

  return (
      <div className={style.wrapper}>
        <Provider value={{searchValue, setSearchValue}}>
          <Header/>
          <Outlet/>
        </Provider>
      </div>
  )
}

export default App;
