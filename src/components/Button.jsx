import React from 'react'
import Filter from './Filter'

const Button = () => {
    const grouping = [
        'status', 'users', 'priority'
      ];
    const ordering = [
      'priority', 'title'
    ];
  return (
    <div className='button-container'>
        <Filter name="Select Group" option = {grouping} />
        <Filter name="Select Order" option = {ordering} />
    </div>
  )
}

export default Button