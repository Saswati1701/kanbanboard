import React from 'react'
import Filter from './Filter'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { selectData } from '../DataAction';


const getGroup = () => {
  // console.log(localStorage.getItem("group"));

  if(localStorage.getItem("group")){
    return localStorage.getItem("group");
  }else{
    return "status";
  }
}

const getOrder = () => {
  if(localStorage.getItem("order")){
    return localStorage.getItem("order");
  }else{
    return "priority";
  }
}


const Button = ({displayOnClick, setDisplayOnClick}) => {
  const dispatch = useDispatch();
  const {allTickets, allUser} = useSelector(state => state.DataReducer);
  const [groupValue, setGroupValue] = useState(getGroup());
  const [orderValue, setOrderValue] = useState(getOrder());

  const handleGroupValue = (e, valueBool) => {
    if(valueBool){
      setGroupValue(e.target.value);
      setDisplayOnClick(!displayOnClick);
      localStorage.setItem("group", e.target.value);
    }else{
      setOrderValue(e.target.value);
    setDisplayOnClick(!displayOnClick);
    localStorage.setItem("order", e.target.value);
    }
  }

  useEffect(() => {
    if(groupValue === 'user'){
      dispatch(selectData(groupValue, {
        allTickets, allUser
      }, orderValue))
    }else{
      dispatch(selectData(groupValue, allTickets, orderValue));
    }
  }, [allTickets, dispatch, groupValue, allUser, orderValue]);
 
    const grouping = [
        'status', 'users', 'priority'
      ];
    const ordering = [
      'priority', 'title'
    ];
  return (
    <div className='button-container'>
            <div className="dropOnClick flex-gap-10 p-10">
              <div className="selectGroup flex-sb">
                <span>Grouping</span>
                <select value={groupValue} onChange={(e) => handleGroupValue(e, true)} className="selectStyle" name="group" id="group">
                  <option value="status">Status</option>
                  <option value="user">User</option>
                  <option value="priority">Priority</option>
                </select>
              </div>
              <div className="selectGroup flex-sb">
                <span>Ordering</span>
                <select value={orderValue} onChange={(e) => handleGroupValue(e, false)} className="selectStyle" name="order" id="order">
                  <option value="priority">Priority</option>
                  <option value="title">Title</option>
                </select>
              </div>
            </div>
    </div>
  )
}

export default Button