import React from 'react'

const Color = ({item , setChangeColor}) => {
    
  return (
    <>
        <li className="color-items" onClick={()=>setChangeColor(item)}>
            <div className={`color ${item}`}></div>
            <div className="color-name" >{item}</div>
          </li>
    </>
  )
}

export default Color