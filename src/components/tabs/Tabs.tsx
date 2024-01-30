import Button from "../button/Button.tsx";

import styles from './tabs.module.scss';

const tabsTitles = ['All clubs', 'Russia', 'England', 'France', 'Germany', 'Italy', 'Spain'];

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
