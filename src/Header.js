import React from 'react'
import './Header.css'

const Header = () => {
    
  return (
    <div className='header'>
        <div className='header_nav'>
            <div className='nav_option'>
                <a className='nav_anker' href=''>PRINCIPAL</a>

            </div>
             <div className='nav_option'>
                <a className='nav_anker' href=''> GALERÍA<i className="fas fa-caret-down" onClick={()=>console.log('works')}></i> </a>

            </div>
            <div className='nav_option'>
                <a className='nav_anker' target={'_blank'} href='https://www.instagram.com/dianamartineznovias/?hl=es-la'

                >INSTAGRAM</a>
            </div>
            <div className='nav_option'>
                <a className='nav_anker' href=''>CONTÁCTANOS</a>

            </div>
        </div>
    </div>
        
  )
}

const Dropdown= () => {
    return (
      <div>
          <ul>
              <li> Vestidos de novia</li>
              <li> Vestidos</li>
              <li> Para la casa </li>
              <li> Zapatos</li>
              <li> Accesorios</li>
          </ul>
      </div>
    )
  }
  

export default Header