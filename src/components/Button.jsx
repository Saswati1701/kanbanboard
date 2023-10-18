import React from 'react'
import Filter from './Filter'

const Button = (handleSelect) => {
    const grouping = [
        'status', 'users', 'priority'
      ];
    const ordering = [
      'priority', 'title'
    ];
  return (
    <div className='button-container'>
        <Filter option = {grouping} onChange={handleSelect}/>
        <Filter option = {ordering} onChange={handleSelect}/>
    </div>
  )
}

export default Button