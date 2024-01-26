import Button from "../button/Button.tsx";

import {useState} from "react";

import styles from './tabs.module.scss';

const tabsTitles = ['All clubs', 'France', 'Germany', 'England', 'Italy', 'Russia', 'Spain'];

const Tabs = ({value, onClickTab}) => {
  return (
    <div className={styles.tabs}>
      <ul>
        {tabsTitles.map((tabTitle) => (
          <li key={tabTitle}>
            <Button isTabButton={true}
                    onClickTabButton={() => onClickTab(tabTitle)}
                    isActiveTab={value === tabTitle}>{tabTitle}
            </Button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Tabs;
