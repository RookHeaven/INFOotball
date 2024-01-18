import Button from "../button/Button.tsx";
import {useState} from "react";
import './tabs.scss';

const tabsTitles = ['All clubs', 'Russian', 'English', 'Italian', 'French', 'German'];

const Tabs = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const onClickActiveIndex = (index) => {
    setActiveIndex(index);
  }

  return (
    <div className='tabs'>
      <ul>
        {tabsTitles.map((tabTitle, i) => (
          <li key={tabTitle}>
            <Button isTabButton={true}
                    isLinkButton={false}
                    onClickTabButton={() => onClickActiveIndex(i)}
                    activeTabClassName={activeIndex === i}>{tabTitle}
            </Button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Tabs;
