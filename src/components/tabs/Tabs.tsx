import Button from '../button/Button.tsx';

import {useDispatch, useSelector} from 'react-redux';

import {FC, memo} from 'react';

import {setActiveTab, TabsTitles} from '../../slices/filterSlice.ts';

import styles from './tabs.module.scss';
import {RootState} from '../../store/store.ts';

const tabsTitles: TabsTitles[] = [TabsTitles.ALL, TabsTitles.RUSSIA, TabsTitles.ENGLAND, TabsTitles.FRANCE, TabsTitles.GERMANY, TabsTitles.ITALY, TabsTitles.SPAIN];

const Tabs: FC = memo(() => {
  const activeTab = useSelector((state: RootState) => state.persistedReducer.filter.activeTab);
  const dispatch = useDispatch();

  const onClickTab = (title: TabsTitles): void => {
    dispatch(setActiveTab(title));
  }

  return (
    <div className={styles.tabs}>
      <ul>
        {tabsTitles.map((tabTitle: TabsTitles) => (
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
})

export default Tabs;
