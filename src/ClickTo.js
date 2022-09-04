import React from 'react'
import './ClickTo.css'

const ClickTo = ({color, onClickCollection, mensaje}) => {
    
  return (
    <>
        <div className='div_container' style={{color:color}}>
           <a onClick={onClickCollection} className='div_anchor'>
             {mensaje}
           </a> 
        </div>

    </>
  )
}
export default ClickTo

