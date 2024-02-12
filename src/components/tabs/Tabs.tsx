import Button from '../button/Button.tsx';

import {useDispatch, useSelector} from 'react-redux';

import {selectFilters, setActiveTab} from '../../slices/filterSlice.ts';

import styles from './tabs.module.scss';

const tabsTitles = ['All clubs', 'Russia', 'England', 'France', 'Germany', 'Italy', 'Spain'];

const Tabs = () => {
  const {activeTab} = useSelector(selectFilters);
  const dispatch = useDispatch();

  const onClickTab = (title) => {
    dispatch(setActiveTab(title));
  }

  return (
    <div className={styles.tabs}>
      <ul>
        {tabsTitles.map((tabTitle) => (
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
