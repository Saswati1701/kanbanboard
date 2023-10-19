import React from 'react'
// import data from '../api/data.json'
import Column from './Column';
import { useSelector } from 'react-redux';

const ColumnView = () => {
    const groupByData = useSelector(state => state);
    // console.log('asas', groupByData);
    var columnData = [];
    for(let key in groupByData){
        columnData.push({groupKey: key, columnData: groupByData[key]})
    }
  return (
    <div className='columnview-container'>
      { columnData.map((column) => (
        <Column groupKey={column.groupKey} columnData={column.columnData} />
      ))}
    </div>
  )
}

export default ColumnView