import Tabs from "../components/tabs/Tabs.tsx";
import Sort from "../components/sort/Sort.tsx";
import ClubCard from "../components/clubCard/ClubCard.tsx";

const MainPage = () => {
  return (
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
  )
}

export default MainPage;
