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

const Sort = ({currentOption, setCurrentOption}) => {

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
