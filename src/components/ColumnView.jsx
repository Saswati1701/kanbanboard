import React from 'react'
// import data from '../api/data.json'
import Column from './Column';
import { useSelector } from 'react-redux';
import Card from './Card';
import Ellipsis from '../assets/ellipsis.png'

const ColumnView = () => {
    const {selectedData} = useSelector(
      (state) => state.SelectDataReducer
    );
    var columnsData = parseDataAsPerGroup(data, "priority");
    var dataa = [];
    // for(let i=0; i<columnsData.data.length; i++){
    //     dataa.push(columnsData.data[i])
    // }
    // console.log(dataa);
    // for(let key in selectedData.data){
    //     dataa.push({groupKey: key, columnData: columnsData.data[key]})
    // }
    console.log(columnsData.data);
  return (
    <div className='columnview-container'>
      { selectedData?.map((column, index) => (
        <div className='column-container'>
          {/* {groupKey} */}
          {/* {selectedData.map((card) => (
              <Card data={card} />
          ))} */}
          <div>
            <div>
              {column[index].title}{column[index].value.length}
            </div>
            <div>
              <img className='icons' src={Ellipsis} alt="" srcset="" />
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