import React from 'react'
import { useDispatch, useSelector} from "react-redux";
import { useState, useEffect } from 'react';
import { selectData } from '../DataAction';
import Filter from '../assets/setting.png'
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

const Header = () => {
  const [displayOnClick, setDisplayOnClick] = useState(false);
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
 
  
  return (
    <div className="header-container">
      <div className="displayButton">
        <button
          className='btn'
          onClick={() => setDisplayOnClick(!displayOnClick)}
        ><img src={Filter} alt="" srcset="" height="16px" style={{margin:"0 5px 0 0"}}/>
          Display
        </button>
        {displayOnClick && (
            <div className='pop-up'>
              <div className="selectGroup">
                <span className='grouping'>Grouping</span>
                <select className="dropdown" value={groupValue} onChange={(e) => handleGroupValue(e, true)} name="group" id="group">
                  <option value="status">Status</option>
                  <option value="user">User</option>
                  <option value="priority">Priority</option>
                </select>
              </div>
              <div className="selectGroup">
                <span className='grouping'>Ordering</span>
                <select className="dropdown" value={orderValue} onChange={(e) => handleGroupValue(e, false)} name="order" id="order">
                  <option value="priority">Priority</option>
                  <option value="title">Title</option>
                </select>
              </div>
            </div>
        )}
      </div>
    </div>
  );
};

export default Header