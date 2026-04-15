import React from 'react'

const Activity = ({userName,textColor}) => {
    let style={color:textColor}
  return (
    <div>
      <h1 style={style}>hello!!!  {userName}</h1>
    </div>
  )
}

export default Activity


