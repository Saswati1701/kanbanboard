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

    const state2 = useSelector(state => state);
    
    console.log(state2);
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
              <div className='column-header-title'>
                <img src={Plus} alt="" height="12px" />
                <div style={{margin: "0px 12px 0px 12px"}}>{column[index].title}</div>
              </div>
              <div>{column[index].value.length}</div>
            </div>
            <div className='column-header-right'>
              <img className='icons' src={Ellipsis} alt="" srcset="" />
              <img src={Plus} alt="" height="12px" />
            </div>
          </div>
          {column[index]?.value?.map((elem) => {
            return (
              <Card id={elem.id} title={elem.title} tag={elem.tag} priority = {elem.priority} />
            );
          })}

      </div>
      ))}
    </div>
  )
}

export default ColumnView