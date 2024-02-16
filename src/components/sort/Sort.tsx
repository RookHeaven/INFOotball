import Select, {SingleValue} from 'react-select';

import {FC, memo} from 'react';

import {RootState} from '../../redux/store.ts';

import {useDispatch, useSelector} from 'react-redux';
import {setCurrentOption} from '../../redux/slices/filter/filterSlice.ts';

import {IOption} from './types.ts';
import {Options} from '../../redux/slices/filter/types.ts';

import './sort.scss';

const options: IOption[] = [
  { value: Options.ALPHABET_ASC, label: 'alphabetical (A-Z)' },
  { value: Options.ALPHABET_DESC, label: 'alphabetical (Z-A)' },
  { value: Options.YEAR_ASC, label: 'formed year ↑' },
  { value: Options.YEAR_DESC, label: 'formed year ↓' },
  { value: Options.CAPACITY_ASC, label: 'stadium capacity ↑' },
  { value: Options.CAPACITY_DESC, label: 'stadium capacity ↓' }
]

const Sort: FC = memo(() => {
  const currentOption = useSelector((state: RootState) => state.persistedReducer.filter.currentOption);
  const dispatch = useDispatch();

  const onClickOption = (option: SingleValue<string | IOption> | null): void => {
    if (option === null || typeof option === 'string') return
    dispatch(setCurrentOption(option.value));
  }

  const getValue = (): IOption | undefined | '' => {
    return currentOption ? options.find(option => option.value === currentOption) : ''
  };

  return (
    <div className='sorting'>
      <span className='sorting__text'>Sorting:</span>
      <div className='sorting__select'>
        <Select classNamePrefix='sorting'
                defaultValue={currentOption}
                options={options}
                value={getValue()}
                onChange={(newValue: SingleValue<string | IOption> | null) => onClickOption(newValue)}
                placeholder='select an option'/>
      </div>
    </div>
  )
})

export default Sort;
