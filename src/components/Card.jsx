import React from 'react'

const Card = ({data}) => {
  return (
    <div className='card-container'>
        {data.id}
        {data.title}
        {data.priority}
        {data.status}
    </div>
  )
}

export default Card