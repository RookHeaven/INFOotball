import Header from "../header/Header.tsx";
import Tabs from "../tabs/Tabs.tsx";
import './app.scss';

const App = () => {

  return (
    <div className='wrapper'>
      <Header/>
      <div className='content'>
        <div className='container'>
          <Tabs/>
        </div>
      </div>
    </div>
  )
}

export default App;
