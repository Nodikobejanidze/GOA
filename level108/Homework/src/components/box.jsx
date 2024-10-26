import React from 'react'

const Box = ({className}) => {
  return (
    <div>
      <div className={`${className} rounded-lg w-[100px] h-[100px]`}/>
    </div>
  )
}

export default Box