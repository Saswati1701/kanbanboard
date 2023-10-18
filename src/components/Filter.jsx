import React from 'react'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const Filter = ({option, handleSelect}) => {
    const defaultOption = option[0];
    return (
        <div className='dropdown'>
            <Dropdown 
                options={option} 
                onChange={handleSelect} 
                value={defaultOption} 
                placeholder="Select an option" />
        </div>
  )
}

export default Filter