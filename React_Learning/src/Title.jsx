import React from 'react'

const Title = () => {
  let name="surbhi"
  return (
    <div>
      <h1>this is first component</h1>
      {/* JSX WITH CURLY BRACES */}
      <p>hii, {name.toUpperCase()}</p>

    </div>
    
  )
}

export default Title