import React from 'react'
import { useDispatch } from 'react-redux'

const Filter = ({option, type, name, selected}) => {
    const dispatch = useDispatch();

    return (
        <div className='dropdown'>
            <select name={name} id="name" onChange={(e)=>{ 
                if (type === 'group'){
                    dispatch({type: 'SET_GROUPBY_KEYWORD', payload: e.target.value})
                } else {
                    dispatch({type: 'SET_SORTBY_KEYWORD', payload: e.target.value})
                }
            }}>
                {option.map((item) => {
                    if(item === selected){
                        return <option value={item} selected>{item}</option>
                    } else {
                        return <option value={item}>{item}</option>
                    }
                })}
            </select>
        </div>
  )
}

export default Filter