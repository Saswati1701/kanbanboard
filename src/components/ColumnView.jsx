import React from 'react'
// import data from '../api/data.json'
import Column from './Column';
import { useSelector } from 'react-redux';
import Card from './Card';
import Ellipsis from '../assets/ellipsis.png'
import Plus from '../assets/plus.png'

const ColumnView = () => {
    const {selectedData} = useSelector(
      (state) => state.SelectDataReducer
    );
    // var columnsData = parseDataAsPerGroup(data, "priority");
    var dataa = [];
    // for(let i=0; i<columnsData.data.length; i++){
    //     dataa.push(columnsData.data[i])
    // }
    // console.log(dataa);
    // for(let key in selectedData.data){
    //     dataa.push({groupKey: key, columnData: columnsData.data[key]})
    // }
    // console.log(columnsData.data);
  return (
    <div className='columnview-container'>
      { selectedData?.map((column, index) => (
        <div className='column-container'>
          {/* {groupKey} */}
          {/* {selectedData.map((card) => (
              <Card data={card} />
          ))} */}
          <div className='column-header'>
            <div className='column-header-left'>
              <img src={Plus} alt="" height="12px" />
              <div>{column[index].title}</div>
              <div>{column[index].value.length}</div>
            </div>
            <div className='column-header-right'>
              <img className='icons' src={Ellipsis} alt="" srcset="" />
              <img src={Plus} alt="" height="12px" />
            </div>
          </div>
          {column[index]?.value?.map((elem) => {
            return (
              <Card id={elem.id} title={elem.title} tag={elem.tag} />
            );
          })}

      </div>
      ))}
    </div>
  )
}

export default ColumnView