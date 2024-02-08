import {useDispatch, useSelector} from "react-redux";
import {selectFilters, setCurrentOption} from "../../slices/filterSlice.ts";

import Select from "react-select";

import './sort.scss';

const options = [
  { value: 'alphabeticalAsc', label: 'alphabetical (A-Z)' },
  { value: 'alphabeticalDesc', label: 'alphabetical (Z-A)' },
  { value: 'yearAsc', label: 'formed year ↑' },
  { value: 'yearDesc', label: 'formed year ↓' },
  { value: 'capacityAsc', label: 'stadium capacity ↑' },
  { value: 'capacityDesc', label: 'stadium capacity ↓' }
]

const Sort = () => {
  const {currentOption} = useSelector(selectFilters);
  const dispatch = useDispatch();

  const onClickOption = (option) => {
    dispatch(setCurrentOption(option.value));
  }

  const getValue = () => {
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
                onChange={onClickOption}
                placeholder='select an option'/>
      </div>
    </div>
  )
}

export default Sort;
