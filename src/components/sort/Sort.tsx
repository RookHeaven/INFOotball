import Select, {SingleValue} from 'react-select';

import {FC} from 'react';

import {useDispatch, useSelector} from 'react-redux';
import {Options, selectFilters, setCurrentOption} from '../../slices/filterSlice.ts';

import './sort.scss';

interface Option {
  value: Options;
  label: string;
}

const options = [
  { value: Options.ALPHABET_ASC, label: 'alphabetical (A-Z)' },
  { value: Options.ALPHABET_DESC, label: 'alphabetical (Z-A)' },
  { value: Options.YEAR_ASC, label: 'formed year ↑' },
  { value: Options.YEAR_DESC, label: 'formed year ↓' },
  { value: Options.CAPACITY_ASC, label: 'stadium capacity ↑' },
  { value: Options.CAPACITY_DESC, label: 'stadium capacity ↓' }
]

const Sort: FC = () => {
  const {currentOption} = useSelector(selectFilters);
  const dispatch = useDispatch();

  const onClickOption = (option: SingleValue<string | Option> | null): void => {
    if (option === null || typeof option === 'string') return
    dispatch(setCurrentOption(option.value));
  }

  const getValue = (): Option | undefined | '' => {
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
                onChange={(newValue: SingleValue<string | Option> | null) => onClickOption(newValue)}
                placeholder='select an option'/>
      </div>
    </div>
  )
}

export default Sort;
