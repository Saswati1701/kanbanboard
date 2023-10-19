import React from 'react'
import Filter from './Filter'
import { useSelector } from 'react-redux';

const Button = () => {
    const groupKey = useSelector(state => state.groupByKeyword);
    const sortKey = useSelector(state => state.sortByKeyword);

    const grouping = [
        'status', 'users', 'priority'
      ];
    const ordering = [
      'priority', 'title'
    ];
  return (
    <div className='button-container'>
        <Filter type="group" selected={groupKey} name="Select Group" option = {grouping} />
        <Filter type="sort" selected={sortKey} name="Select Order" option = {ordering} />
    </div>
  )
}

export default Button