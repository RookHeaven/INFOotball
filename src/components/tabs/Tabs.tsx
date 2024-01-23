import Button from "../button/Button.tsx";
import {useEffect, useState} from "react";
import './tabs.scss';

const tabsTitles = ['All clubs', 'Russian', 'Italian', 'French', 'German', 'Spain', 'English'];

const Tabs = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // useEffect(() => {
  //   fetch('https://api.football-data.org/v4/competitions/PL/teams', {mode: "no-cors"})
  //     .then((res) => {
  //       console.log(res)
  //     })
  // }, [])

  return (
    <div className='tabs'>
      <ul>
        {tabsTitles.map((tabTitle, i) => (
          <li key={tabTitle}>
            <Button isTabButton={true}
                    onClickTabButton={() => setActiveIndex(i)}
                    isActiveTab={activeIndex === i}>{tabTitle}
            </Button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Tabs;
