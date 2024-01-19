import Button from "../button/Button.tsx";
import {useState} from "react";
import './tabs.scss';

const tabsTitles = ['All clubs', 'Russian', 'English', 'Italian', 'French', 'German'];

const Tabs = () => {
  const [activeIndex, setActiveIndex] = useState(0);

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
