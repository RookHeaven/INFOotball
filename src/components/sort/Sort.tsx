import Select from "react-select";
import {useState} from "react";

import './sort.scss';


const options = [
  { value: 'alphabetical', label: 'alphabetical' },
  { value: 'formed year', label: 'formed year' },
  { value: 'stadium capacity', label: 'stadium capacity' }
]

const Sort = () => {
  const [currentOption, setCurrentOption] = useState('');

  const getValue = () => {
    return currentOption ? options.find(option => option.value === currentOption) : ''
  };

  const onChange = (currentOption) => {
    setCurrentOption(currentOption.value)
  }

  return (
    <div className='sorting'>
      <span className='sorting__text'>Sorting:</span>
      <div className='sorting__select'>
        <Select classNamePrefix='sorting'
                defaultValue={currentOption}
                options={options}
                value={getValue()}
                onChange={onChange}
                placeholder='select an option'/>
      </div>
    </div>
  )
}

export default Sort;
