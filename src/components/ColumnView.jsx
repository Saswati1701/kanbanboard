import React from 'react'
import { parseDataAsPerGroup } from '../api/getData'
import data from '../api/data.json'
import Column from './Column';

const ColumnView = () => {
    var columnsData = parseDataAsPerGroup(data, "priority");
    var dataa = [];
    // for(let i=0; i<columnsData.data.length; i++){
    //     dataa.push(columnsData.data[i])
    // }
    // console.log(dataa);
    for(let key in columnsData.data){
        dataa.push({groupKey: key, columnData: columnsData.data[key]})
    }
    console.log(columnsData.data);
  return (
    <div className='columnview-container'>
      { dataa.map((column) => (
        <Column groupKey={column.groupKey} columnData={column.columnData} />
      ))}
    </div>
  )
}

export default ColumnView