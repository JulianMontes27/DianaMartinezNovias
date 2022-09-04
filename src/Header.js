import React from 'react'
import './Header.css'
import { useState} from 'react'

const Header = () => {
  const [opened, setOpen]= useState(false)

  return (
    <>
    <div className='header'>
        <div className='header_nav'>
            <div className='nav_option'>
                <a className='nav_anker' href='#'>PRINCIPAL</a>

            </div>
             <div className='nav_option'>
                <a className='nav_anker' href='#' onClick={()=>setOpen(!opened)}> GALERÍA <i className="fas fa-caret-down"></i> 
                </a>
            </div>

            <div className='nav_option'>
                <a className='nav_anker' target={'_blank'} href='https://www.instagram.com/dianamartineznovias/?hl=es-la'

                >INSTAGRAM</a>
            </div>
            <div className='nav_option'>
                <a className='nav_anker' href='#' onClick={
                  ()=> console.log('works')
                }>CONTÁCTANOS</a>

            </div>
        </div>

    </div>

      {opened&&
        <div className='dropdown_wrapper' style={{display:'flex', position:'absolute', top:'1.5%', width:'20%',marginLeft:'74%'}}>
          <DropDown/>
          </div>}
    
    </>
  )
}

//<i className="fas fa-caret-down"></i> 

function DropDown (){

  function DropDownItem({title}){
    return(
      <a className='dropdown_ank'>{title}</a>

    )
  }

  return (
    <div className='dropdown_container'>
      <DropDownItem title={'Vestidos de Novias'}/>
       <br></br>
      <DropDownItem title={'Vestidos de Alta Costura'}/>
      <br></br>
      <DropDownItem title={'Accesorios y otras prendas'}/>
    </div>
  )
}


export default Header