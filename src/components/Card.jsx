import React from 'react'


const Card = ({data}) => {
  return (
    <div className='card-container'>
      <div>
        <p style={{color: "#9c9b9f",margin:"12px 0 0 0"}}>{data.id}</p>
        <p style={{fontWeight:"500", margin:"2px 0 0 0"}}>{data.title}</p>
        {/* {data.priority} */}
        {/* {data.status} */}
      </div>
      <div className='card-bottom-container'>
        {/* <p></p> */}
        <p style={{color: "#9c9b9f", marginTop:"1px"}}>Feature Request</p>
      </div>
    </div>
  )
}

export default Card