import Button from '../button/Button.tsx';

import {useDispatch, useSelector} from 'react-redux';

import {selectFilters, setActiveTab} from '../../slices/filterSlice.ts';

import styles from './tabs.module.scss';

const tabsTitles: string[] = ['All clubs', 'Russia', 'England', 'France', 'Germany', 'Italy', 'Spain'];

const Tabs = () => {
  const {activeTab} = useSelector(selectFilters);
  const dispatch = useDispatch();

  const onClickTab = (title: string) => {
    dispatch(setActiveTab(title));
  }

  return (
    <div className={styles.tabs}>
      <ul>
        {tabsTitles.map((tabTitle: string) => (
          <li key={tabTitle}>
            <Button isTabButton={true}
                    onClickTabButton={() => onClickTab(tabTitle)}
                    isActiveTab={activeTab === tabTitle}>{tabTitle}
            </Button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Tabs;
