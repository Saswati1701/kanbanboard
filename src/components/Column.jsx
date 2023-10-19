import React from 'react'
import Card from './Card';

const Column = ({groupKey, columnData}) => {
    // console.log(groupKey, columnData);
  return (
    <div className='column-container'>
        {groupKey}
        {columnData.map((card) => (
            <Card data={card} />
        ))}

    </div>
  )
}

export default Column