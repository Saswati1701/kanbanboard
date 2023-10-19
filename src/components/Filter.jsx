import React from 'react'

const Filter = ({option, name, handleSelect}) => {
    return (
        <div className='dropdown'>
            <select name={name} id="name">
                <option value="" selected disabled>Select</option>
                {option.map((item) => (
                    <option value={item}>{item}</option>
                ))}
            </select>
        </div>
  )
}

export default Filter