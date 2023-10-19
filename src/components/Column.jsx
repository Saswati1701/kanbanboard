import React from 'react'
import Card from './Card';
import { useSelector } from 'react-redux';

const Column = ({groupKey, columnData}) => {
  const { selectedData, user } = useSelector(
    (state) => state.SelectDataReducer
  );
    console.log(groupKey, columnData);
  return (
    <div className='column-container'>
        {groupKey}
        {/* {selectedData.map((card) => (
            <Card data={card} />
        ))} */}
        {/* {elem[index]?.value?.map((elem, ind) => {
          return (
            <Card id={elem.id} title={elem.title} tag={elem.tag} />
          );
        })} */}

    </div>
  )
}

export default Column