import React from 'react'
import { useSelector } from 'react-redux';
import Card from './Card';
import Ellipsis from '../assets/ellipsis.png'
import Plus from '../assets/plus.png'

const ColumnView = () => {
    var y = Math.random();
    if (y < 0.5)
      y = 0
    else
      y= 1
    
    const selectedData = useSelector(state => state.SelectDataReducer)   
    console.log(selectedData);
    const data = useSelector(state => state.DataReducer) 
    console.log(data.icons[selectedData.group]);
  return (
    <div className='columnview-container'>
      { selectedData?.selectedData.map((column, index) => (
        <div className='column-container'>  
          <div className='column-header'>
            <div className='column-header-left'>
              <div className='column-header-title'>
                { selectedData.group == "user" ? <i class={data.icons[selectedData.group][index % 2 ? "online" : "offline"]} aria-hidden="true"></i> : <i class={data.icons[selectedData.group][column[index].title]} aria-hidden="true"></i> }
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