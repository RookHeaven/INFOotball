import Header from "../header/Header.tsx";
import Tabs from "../tabs/Tabs.tsx";
import Sort from "../sort/Sort.tsx";
import './app.scss';

const App = () => {

  return (
    <div className='wrapper'>
      <Header/>
      <div className='content'>
        <div className='container'>
          <div className='content__sorting'>
            <Tabs/>
            <Sort/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;
