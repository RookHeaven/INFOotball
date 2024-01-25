import Button from "../button/Button.tsx";

import {useState} from "react";

import styles from './tabs.module.scss';

const tabsTitles = ['All clubs', 'Russian', 'Italian', 'French', 'German', 'Spain', 'English'];

const Tabs = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className={styles.tabs}>
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
